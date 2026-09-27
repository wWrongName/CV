#!/usr/bin/env python3
"""Measure a disposable production container; Python stdlib and Docker only."""
import argparse
import concurrent.futures
import datetime
import json
import http.client
import math
import re
import statistics
import subprocess
import threading
import time
import urllib.request
import uuid
from pathlib import Path


def docker(*args):
    return subprocess.check_output(['docker', *args], text=True).strip()


def mib(value):
    number, unit = re.fullmatch(r'([\d.]+)(\w+)', value.strip()).groups()
    return float(number) * {'B': 1, 'KiB': 1024, 'MiB': 1024**2, 'GiB': 1024**3,
                          'kB': 1000, 'MB': 1000**2, 'GB': 1000**3}[unit] / 1024**2


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--image', default='resume-site:benchmark')
    parser.add_argument('--seconds', type=int, default=30)
    parser.add_argument('--idle-seconds', type=int, default=10)
    parser.add_argument('--concurrency', type=int, default=20)
    parser.add_argument('--memory', default='512m')
    parser.add_argument('--cpus', default='1.0')
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    if min(args.seconds, args.idle_seconds, args.concurrency) < 1:
        parser.error('Durations and concurrency must be positive')
    name = 'resume-benchmark-' + uuid.uuid4().hex[:10]
    image = json.loads(docker('image', 'inspect', args.image))[0]
    engine = json.loads(docker('info', '--format', '{{json .}}'))
    report = {
        'measured_at_utc': datetime.datetime.now(datetime.timezone.utc).isoformat(),
        'image': args.image, 'image_id': image['Id'], 'image_bytes': image['Size'],
        'docker_image_ls_size': docker('image', 'ls', '--format', '{{.Size}}', args.image),
        'image_architecture': image['Architecture'], 'docker_version': engine['ServerVersion'],
        'engine_cpus': engine['NCPU'], 'engine_memory_bytes': engine['MemTotal'],
        'limits': {'cpus': args.cpus, 'memory': args.memory},
        'method': 'HTTP GETs from host threads over persistent connections; Docker CLI working-set RAM samples. No browser JS/GPU workload.',
    }
    try:
        started = time.monotonic()
        docker('run', '-d', '--name', name, '--init', '--memory', args.memory, '--cpus', args.cpus,
               '--pids-limit', '128', '--cap-drop', 'ALL', '--security-opt', 'no-new-privileges:true',
               '-p', '127.0.0.1::3000', args.image)
        port = json.loads(docker('inspect', name))[0]['NetworkSettings']['Ports']['3000/tcp'][0]['HostPort']
        base = 'http://127.0.0.1:' + port

        def request(path):
            with urllib.request.urlopen(base + path, timeout=10) as response:
                return response.status, response.read(), response.headers.get_content_type()

        deadline = time.monotonic() + 60
        while True:
            try:
                if request('/ru')[0] == 200:
                    break
            except OSError:
                pass
            if time.monotonic() > deadline:
                raise RuntimeError('Container did not become ready within 60 seconds')
            time.sleep(.1)
        report['ready_seconds'] = round(time.monotonic() - started, 3)

        paths = ['/', '/ru', '/en', '/ru/experience', '/en/experience',
                 '/resume-ivan-velichko.pdf', '/resume-ivan-velichko-en.pdf']
        for path in paths:
            status, body, content_type = request(path)
            assert status == 200, (path, status)
            if path.endswith('.pdf'):
                assert body.startswith(b'%PDF') and content_type == 'application/pdf', path
            else:
                lang = 'en' if path.startswith('/en') else 'ru'
                assert f'lang="{lang}"'.encode() in body, path
        html = request('/ru')[1].decode()
        assets = list(dict.fromkeys(re.findall(r'(?:src|href)="(/_next/static/[^"?]+)', html)))
        assert assets, 'Missing production assets'
        for path in assets:
            status, body, content_type = request(path)
            assert status == 200 and body and content_type != 'text/html', path
        paths += assets[:4]
        report['checked_routes'] = paths.copy()
        # Redirects are already checked above by urllib; raw HTTP load uses final URLs.
        paths = [path for path in paths if path != '/']

        def phase(seconds, concurrency=0):
            stop = threading.Event()
            samples, latencies, errors = [], [], []
            transferred = [0]
            lock = threading.Lock()

            def sample():
                while not stop.is_set():
                    data = json.loads(docker('stats', '--no-stream', '--format', '{{json .}}', name))
                    samples.append({'cpu_percent': float(data['CPUPerc'].rstrip('%')),
                                    'memory_mib': round(mib(data['MemUsage'].split('/')[0]), 3)})
                    stop.wait(.25)

            def worker(index):
                connection = http.client.HTTPConnection("127.0.0.1", int(port), timeout=10)
                while time.monotonic() < until:
                    before = time.monotonic()
                    try:
                        connection.request("GET", paths[index % len(paths)])
                        response = connection.getresponse()
                        body = response.read()
                        assert response.status == 200
                        with lock:
                            latencies.append((time.monotonic() - before) * 1000)
                            transferred[0] += len(body)
                    except Exception as error:
                        connection.close()
                        connection = http.client.HTTPConnection("127.0.0.1", int(port), timeout=10)
                        with lock:
                            errors.append(str(error))
                    index += 1
                connection.close()

            began = time.monotonic()
            until = began + seconds
            collector = threading.Thread(target=sample)
            collector.start()
            if concurrency:
                with concurrent.futures.ThreadPoolExecutor(max_workers=concurrency) as pool:
                    list(pool.map(worker, range(concurrency)))
            else:
                time.sleep(seconds)
            elapsed = time.monotonic() - began
            stop.set()
            collector.join()
            assert samples, 'No Docker resource samples collected'
            result = {'duration_seconds': round(elapsed, 2), 'concurrency': concurrency,
                      'cpu_mean_percent': round(statistics.mean(s['cpu_percent'] for s in samples), 2),
                      'cpu_peak_percent': max(s['cpu_percent'] for s in samples),
                      'memory_mean_mib': round(statistics.mean(s['memory_mib'] for s in samples), 2),
                      'memory_peak_mib': max(s['memory_mib'] for s in samples),
                      'sample_count': len(samples), 'samples': samples}
            if concurrency:
                ordered = sorted(latencies)
                result.update(requests=len(latencies), errors=len(errors), error_examples=errors[:3],
                              requests_per_second=round(len(latencies) / elapsed, 1), bytes=transferred[0],
                              latency_p50_ms=round(statistics.median(ordered), 2) if ordered else None,
                              latency_p95_ms=round(ordered[math.ceil(len(ordered)*.95)-1], 2) if ordered else None)
            return result

        report['idle'] = phase(args.idle_seconds)
        report['load'] = phase(args.seconds, args.concurrency)
        report['after_load'] = phase(args.idle_seconds)
        state = json.loads(docker('inspect', name))[0]['State']
        report['container_state'] = state
        assert state['Running'] and not state['OOMKilled'], state
        print(json.dumps(report, ensure_ascii=False, indent=2))
        if args.output:
            args.output.parent.mkdir(parents=True, exist_ok=True)
            args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
        assert report['load']['errors'] == 0, report['load']['error_examples']
    except Exception:
        subprocess.run(['docker', 'logs', '--tail', '50', name], check=False)
        raise
    finally:
        subprocess.run(['docker', 'rm', '-f', name], stdout=subprocess.DEVNULL, check=False)


if __name__ == '__main__':
    main()
