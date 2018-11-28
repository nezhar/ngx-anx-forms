#!/bin/bash
rm -r ../../dist/ngx-anx-forms/
ng build ngx-anx-forms
cp -r src/lib/styles/ ../../dist/ngx-anx-forms/lib/styles/
