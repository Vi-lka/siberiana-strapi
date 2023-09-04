CURRENT_DIR=$(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
ROOT_DIR=$(CURRENT_DIR)
CURRENT_USER=
DOCKER_CLIENT_NAME=siberiana-strapi
DOCKER_COMPOSE?=docker-compose
DOCKER_EXEC_TOOLS_APP=$(CURRENT_USER) docker exec -it $(DOCKER_CLIENT_NAME) sh


.PHONY: env build install up start init stop restart clear


env:
	cp .env.example .env


network:
	docker network inspect siberiana-network >/dev/null 2>&1 || docker network create siberiana-network


volume:
	docker volume inspect siberiana-strapi-data >/dev/null 2>&1 || docker volume create siberiana-strapi-data


build:
	$(DOCKER_COMPOSE) up --build --no-recreate -d


recreate:
	$(DOCKER_COMPOSE) up --build --force-recreate -d


up:
	$(DOCKER_COMPOSE) up -d


start: up


init: network volume build


stop: $(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) kill || true
	$(DOCKER_COMPOSE) rm --force || true


restart: stop start up


clear: stop $(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) down -v --remove-orphans || true
