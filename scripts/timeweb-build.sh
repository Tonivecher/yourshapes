#!/usr/bin/env bash
set -e

echo "Building website..."

cd webapp-pure-form-7dzsf1/apps/website

npm install
npm run build

echo "Copying build to root..."

cd ../../..

rm -rf dist
cp -r webapp-pure-form-7dzsf1/apps/website/dist ./dist

echo "Build finished."
