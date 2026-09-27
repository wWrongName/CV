# Angie reverse proxy

Target: Debian 13, `wwn@HOST` (`ssh swe-1`). Angie serves
`wwncv.tech` over HTTPS and proxies to Docker on `127.0.0.1:3000`.

## DNS

Keep the domain's existing Timeweb nameservers. Keep this record in its zone:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | @ | IP | 600 |

MX and SPF records are only used for email; keep them if using Timeweb mail.
No wildcard or `www` hostname is configured.

## Installation

Install Angie from its [official Debian repository](https://en.angie.software/angie/docs/installation/oss_packages/).
The server uses `/usr/share/keyrings/angie-signing.gpg` and:

```text
deb [signed-by=/usr/share/keyrings/angie-signing.gpg] https://download.angie.software/angie/debian/13 trixie main
```

Back up `/etc/angie` before applying these files. Disable the package's
`http.d/default.conf` (rename to `default.conf.disabled`). Copy `angie.conf` to
`/etc/angie/angie.conf` and `http.d/wwncv.conf` to `/etc/angie/http.d/wwncv.conf`.

```sh
sudo angie -t
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo systemctl enable --now angie
# Subsequent config updates:
sudo angie -t && sudo systemctl reload angie
```

Port 53 and ACME NS delegation are not required. Stop any other listener on 80/443
before starting Angie. Caddy is disabled on this host and its config retained
for rollback. Application delivery via GitHub does not replace proxy configs.

## Certificates and checks

Angie's built-in [HTTP ACME client](https://en.angie.software/angie/docs/configuration/acme/#http-validation)
issues and renews the Let's Encrypt certificate automatically; no cron or
Certbot is required. Issuance requires the A record above to resolve publicly and TCP 80 to be reachable.
Angie handles the HTTP challenge automatically, including with the HTTPS redirect.
Failed requests retry after one hour; avoid repeated reloads during DNS setup.

```sh
dig A wwncv.tech +short
sudo systemctl status angie
sudo tail -n 30 /var/log/angie/error.log
curl -I https://wwncv.tech/ru
sudo openssl x509 -in /var/lib/angie/acme/wwncv/certificate.pem -noout -dates -issuer -ext subjectAltName
```

Back up `/var/lib/angie/acme/` securely to preserve the ACME account and keys.
Never commit that directory or private keys. Access logs are disabled; error
logs may contain request details and should be handled as operational data.
