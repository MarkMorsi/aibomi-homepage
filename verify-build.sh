#!/bin/bash

# Build Verification Script for Cloudflare Pages Deployment
# This script verifies the build is ready for deployment

set -e

echo "🔍 Verifying Aibomi ApS build for Cloudflare Pages deployment..."
echo ""

# Check Node version
echo "✓ Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "  Node version: $NODE_VERSION"
echo ""

# Install dependencies
echo "✓ Installing dependencies..."
npm install --silent
echo ""

# Run TypeScript check
echo "✓ Running TypeScript check..."
npx tsc --noEmit
echo ""

# Build the project
echo "✓ Building production bundle..."
npm run build
echo ""

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not created!"
    exit 1
fi

# Check if index.html exists in dist
if [ ! -f "dist/index.html" ]; then
    echo "❌ Error: dist/index.html not found!"
    exit 1
fi

echo "✅ Build verification complete!"
echo ""
echo "📦 Build artifacts:"
ls -lh dist/
echo ""
echo "🚀 Ready to deploy to Cloudflare Pages!"
echo ""
echo "Deploy with:"
echo "  npx wrangler pages deploy dist --project-name=aibomi"
echo ""
