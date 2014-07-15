#!/bin/bash

mkdir temp

cp -rv public_html temp/.

cp -rv temp/public_html public_html/.

rm -rf temp

cd public_html

mv -v public_html cb_public_html
