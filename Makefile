.DEFAULT_GOAL := help
SHELL := /bin/sh

PNPM ?= pnpm
NODE ?= node
PYTHON ?= python3
DOCKER ?= docker
IMAGE ?= cv:local
FONT_DIR ?=
BENCH_SECONDS ?= 5
BENCH_CONCURRENCY ?= 4

.PHONY: help install dev build start check typecheck test check-shell test-deploy docker-build docker-up docker-down docker-logs docker-stats bench pdf

help: ## Show available commands
	@awk 'BEGIN {FS = ":.*## "} /^[a-zA-Z_-]+:.*## / {printf "  %-18s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install the exact versions from pnpm-lock.yaml
	$(PNPM) install --frozen-lockfile

dev: ## Start the development server at http://127.0.0.1:3000
	$(PNPM) run dev

build: ## Create the production Next.js build
	$(PNPM) run build

start: ## Run an existing production build on port 3000
	$(PNPM) run start

check: typecheck test check-shell ## Check types, navigation and deployment shell syntax

typecheck: ## Generate route types, then check TypeScript
	$(PNPM) exec next typegen
	$(PNPM) run typecheck

test: ## Check navigation through all projects and stage boundaries
	$(NODE) scripts/check-navigation.cjs

check-shell: ## Validate deployment shell script syntax
	bash -n scripts/deploy-ssh.sh scripts/deploy-server.sh

test-deploy: ## Test deployment and rollback in Linux with a fake Docker CLI
	$(DOCKER) run --rm --mount "type=bind,source=$(CURDIR),target=/workspace,readonly" -w /workspace python:3.12-slim python3 scripts/check-deploy.py

docker-build: ## Build the production image (IMAGE=cv:local)
	$(DOCKER) build -t "$(IMAGE)" .

docker-up: ## Build and start local Docker Compose on port 3000
	$(DOCKER) compose -f compose.yaml up --build -d

docker-down: ## Stop local Docker Compose, retaining volumes
	$(DOCKER) compose -f compose.yaml down

docker-logs: ## Follow the local website container logs
	$(DOCKER) compose -f compose.yaml logs --follow --tail=100 website

docker-stats: ## Show one resource usage snapshot for local Compose
	$(DOCKER) compose -f compose.yaml stats --no-stream website

bench: ## Briefly measure an existing IMAGE in an isolated container
	$(PYTHON) scripts/benchmark-docker.py --image "$(IMAGE)" --seconds "$(BENCH_SECONDS)" --idle-seconds 2 --concurrency "$(BENCH_CONCURRENCY)"

pdf: ## Export both PDF locales: make pdf FONT_DIR=/path/to/fonts
	@test -n "$(FONT_DIR)" || { printf '%s\n' 'Set FONT_DIR to the directory containing Noto Sans and Rubik fonts.' >&2; exit 1; }
	$(PYTHON) scripts/export_resume.py --locale ru --font-dir "$(FONT_DIR)"
	$(PYTHON) scripts/export_resume.py --locale en --font-dir "$(FONT_DIR)"
