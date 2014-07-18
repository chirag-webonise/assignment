#!/bin/bash

mkdir -v public_html

cd public_html
touch readme.txt

chmod 777 readme.txt

cd ..

for file in $(ls | head -n 4)
do
	mv -v $file public_html/.
done
