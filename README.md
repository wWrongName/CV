# CV

Interactive 3D portfolio and resume built with Next.js, TypeScript, React Three Fiber and Three.js. Includes English/Russian locales, light/dark themes, PDF resumes and a SQLite-backed analytics dashboard. Docker deployment via GitHub Actions.

## Requirements

Node.js 24.21.0 LTS (see `.nvmrc`), pnpm 12.6.0 and GNU Make. Docker Engine with Compose v2 for container commands.

## Commands

```sh
make install       # Install dependencies from the lockfile
make dev           # Start development at http://127.0.0.1:3000
make check         # Check types, navigation and deployment script syntax
make build         # Build for production
make start         # Run the production build
make docker-up     # Build and start with Docker Compose
make docker-down   # Stop Docker Compose
make docker-logs   # Follow container logs
make docker-stats  # Show container CPU and memory usage
make               # List all available commands
```

Run development, production or Docker on port 3000 one at a time.

```sh
make docker-build                   # Build cv:local
make bench                          # Brief resource check of the built image
make pdf FONT_DIR=/path/to/fonts     # Export both PDF locales
```

PDF export requires Python 3, ReportLab and `NotoSans-Regular.ttf`, `NotoSans-Bold.ttf`, `Rubik-Bold.ttf` in `FONT_DIR`.

On the server, after deploying this version:

```sh
cd /opt/resume-site/current
make admin-setup
```

Enter a username and password interactively (password input is hidden). The command
prints the private admin URL and stores only the password hash and generated secrets
in `resume-site_site-data` at `/app/data/admin.env` (mode `0600`). Existing credentials
are never overwritten. The volume configuration takes priority over legacy admin
environment variables and survives container replacement. Back up this volume securely;
`docker compose down -v` deletes it. The server needs Make, Bash and Docker Compose.
