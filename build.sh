#!/bin/bash
ng build ngx-anx-forms
cp -r ./projects/ngx-anx-forms/src/lib/styles/ ./dist/ngx-anx-forms/lib/styles/

#cd ./dist/ngx-anx-forms
#npm publish