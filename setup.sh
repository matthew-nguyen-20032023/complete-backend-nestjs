#!/bin/bash

# Install lib dependencies
yarn;

# Setup backend components
docker-compose up -d;

cp .env.example .env;

yarn start:dev;
