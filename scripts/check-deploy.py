#!/usr/bin/env python3
"""Exercise deployment success/failure/rollback with a fake Docker CLI."""
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

SCRIPT = Path(__file__).resolve().with_name('deploy-server.sh')
DIGEST = 'ghcr.io/example/resume@sha256:' + 'a' * 64


class DeploymentTest(unittest.TestCase):
    def run_case(self, case, previous=True, telegram=False):
        with tempfile.TemporaryDirectory(prefix='resume-deploy-test-') as temp:
            root = Path(temp)
            binary = root / 'bin'
            binary.mkdir()
            fake = binary / 'docker'
            fake.write_text('''#!/usr/bin/env bash
set -eu
printf '%s\\n' "$*" >> "$CALLS"
if [[ "$1" == login ]]; then cat >/dev/null; exit 0; fi
[[ "$*" != *"pull website"* || "$FAKE_CASE" != pull-fail ]] || exit 1
if [[ "$*" == *" up -d "* ]]; then
  if [[ "$*" == *"/new/"* && "$*" == *" telegram-bot" && "$FAKE_CASE" == telegram-fail ]]; then exit 1; fi
  if [[ "$*" == *"/new/"* && "$FAKE_CASE" == *health-fail* ]]; then exit 1; fi
  if [[ "$*" == *"/old/"* && "$FAKE_CASE" == rollback-health-fail ]]; then exit 1; fi
fi
''')
            fake.chmod(0o755)
            # macOS has no flock; the real production host uses util-linux flock.
            lock = binary / 'flock'
            lock.write_text('#!/bin/sh\nexit 0\n')
            lock.chmod(0o755)
            old = root / 'releases/old'
            new = root / 'releases/new'
            for folder in (old, new):
                folder.mkdir(parents=True)
                (folder / 'compose.prod.yaml').write_text('services: {}\n')
                (folder / '.env').write_text('IMAGE=previous\n')
            if previous:
                (root / 'current').symlink_to(old)
            if telegram:
                (root / 'telegram.env').write_text('TELEGRAM_BOT_TOKEN=fake-bot-token\n')
            if sys.platform == 'darwin':
                # Emulate GNU mv -Tf atomic replacement of the current symlink.
                move = binary / 'mv'
                move.write_text(f'#!{sys.executable}\nimport os, sys\nos.replace(*sys.argv[2:])\n')
                move.chmod(0o755)
            log = root / 'calls'
            env = dict(os.environ, PATH=str(binary) + os.pathsep + os.environ['PATH'],
                       CALLS=str(log), FAKE_CASE=case)
            result = subprocess.run(['bash', str(SCRIPT), str(new), DIGEST, 'example', '3000'],
                                    input='test-token\n', text=True, capture_output=True, env=env)
            return result, log.read_text(), os.readlink(root / 'current') if (root / 'current').exists() else '', str(new), str(old)

    def test_success_promotes_release(self):
        result, calls, current, new, _ = self.run_case('success')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(current, new)
        self.assertNotIn('test-token', calls + result.stdout + result.stderr)

    def test_bot_starts_only_with_server_configuration(self):
        _, calls, _, _, _ = self.run_case('success')
        self.assertNotIn('telegram-bot', calls)
        result, calls, current, new, _ = self.run_case('success', telegram=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(current, new)
        self.assertLess(calls.index('--wait-timeout 90 website'), calls.index('--wait-timeout 70 telegram-bot'))
        self.assertNotIn('fake-bot-token', calls + result.stdout + result.stderr)

    def test_bot_failure_does_not_roll_back_the_website(self):
        result, calls, current, new, _ = self.run_case('telegram-fail', telegram=True)
        self.assertEqual(result.returncode, 1)
        self.assertEqual(current, new)
        self.assertIn('rm -fs telegram-bot', calls)

    def test_failed_health_restores_previous(self):
        result, calls, current, _, old = self.run_case('health-fail')
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertEqual(current, old)
        self.assertIn('--pull never --wait', calls)

    def test_pull_failure_leaves_running_release_alone(self):
        result, calls, current, _, old = self.run_case('pull-fail')
        self.assertEqual(result.returncode, 1)
        self.assertEqual(current, old)
        self.assertNotIn(' up -d ', calls)

    def test_first_deployment_failure_stops_failed_container(self):
        result, calls, current, _, _ = self.run_case('health-fail', previous=False)
        self.assertEqual(result.returncode, 1)
        self.assertEqual(current, '')
        self.assertIn(' down', calls)

    def test_rollback_failure_is_reported(self):
        result, _, _, _, _ = self.run_case('rollback-health-fail')
        self.assertEqual(result.returncode, 2)
        self.assertIn('ROLLBACK FAILED', result.stderr)


if __name__ == '__main__':
    unittest.main()
