#!/bin/bash

# before running this script, make sure to run:
# chmod +x ./install.sh

set -e  # exit if any command fails

echo "Starting deployment..."

# Step 1: Start containers
echo "Running Docker Compose..."
docker compose up -d

# Step 2: Generate database client
# echo "Generating database client..."
# pnpm db:generate

# Step 3: Run migrations
# echo "Running database migrations..."
# pnpm db:migrate

echo "Deployment complete!"
