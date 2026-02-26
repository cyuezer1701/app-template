#!/bin/bash
# Pre-push hook: Prettier + ESLint + Tests + Build
# Copy to .git/hooks/pre-push after cloning:
#   cp scripts/pre-push.sh .git/hooks/pre-push && chmod +x .git/hooks/pre-push

set -e

echo "🔍 Pre-push checks..."

echo "  → Prettier..."
npm run format:check || { echo "❌ Prettier failed! Run: npm run format"; exit 1; }

echo "  → ESLint..."
npm run lint || { echo "❌ ESLint failed! Run: npm run lint:fix"; exit 1; }

echo "  → Tests..."
npm test -- --run || { echo "❌ Tests failed!"; exit 1; }

echo "  → Build..."
npm run build || { echo "❌ Build failed!"; exit 1; }

echo "✅ All checks passed!"
