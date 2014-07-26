#!/bin/bash

# creating a directory, public_html.
mkdir -v public_html

#getting inside public_html and creating readme.txt file in it.
cd public_html
touch readme.txt

#giving all the permissions to all the users, groups and others for readme.txt.
chmod 777 readme.txt

#getting out from current directory.
cd ..

#moving top four files from current directory to public_html.
for file in $(ls | head -n 4)
do
	mv -v $file public_html/.
done
