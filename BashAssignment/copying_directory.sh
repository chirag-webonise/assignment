#!/bin/bash


#creating a temporary directory to hold all the files of the public_html directory.
mkdir temp

#copying public_html to temp directory.
cp -rv public_html temp/.

#copying temp's public_html to public_html.
cp -rv temp/public_html public_html/.

#deleting temp directory.
rm -rf temp

#getting inside public_html.
cd public_html

#renaming public_html to cb_public_html.
mv -v public_html cb_public_html
