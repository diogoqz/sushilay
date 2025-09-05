#!/bin/bash

# Build the Vite React application
echo "Building Sushilay application..."
cd /code
npm install
npm run build

# Start the static file server
echo "Starting Sushilay server..."
npx serve -s dist -l 3000
