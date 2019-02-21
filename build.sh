#!/bin/bash
ng build ngx-anx-forms

rm -r ./dist/ngx-anx-forms/lib/styles/
cp -r ./projects/ngx-anx-forms/src/lib/styles/ ./dist/ngx-anx-forms/lib/styles/
