#!/bin/bash

set -e

echo 'Check Format'
npm run format:check -- --base origin/main

echo 'Lint Workspace & Code'
npm run affected:lint -- --base origin/main

echo 'Unit Tests'
npm run affected:test -- --base origin/main

echo 'Build affected projects'
npm run affected:build  -- --base origin/main --prod

# echo 'Release affected libraries'
# npm run affected -- --target release --debug --dry-run --base origin/main
