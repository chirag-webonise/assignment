#!/bin/bash


echo -e "\n\n\n\n Que 2 3 4"

#renaming all .txt files by adding cb in starting.
for file in *.txt; do mv -v $file cb$file ; done
ls >> assignment.log

#renaming all the files starting with x by adding cb in starting to the file name.
for file in x*; do mv -v $file cb$file ; done
ls >> assignment.log

#displaying date.
date >> assignment.log
