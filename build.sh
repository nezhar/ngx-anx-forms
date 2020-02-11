#!/bin/bash
npm run build_library

rm -r ./dist/ngx-anx-forms/lib/styles/
cp -r ./projects/ngx-anx-forms/src/lib/styles/ ./dist/ngx-anx-forms/lib/styles/
