#!/bin/sh
set -e

echo "Applying Prisma migrations..."
npm run db:deploy

echo "Running database seeds..."
npm run db:seed

echo "Starting NestJS..."
exec npm run start:prod