#!/bin/bash

echo -e "\n\n\n\n Que 2 3 4"

for file in *.txt; do mv -v $file cb$file ; done
ls >> assignment.log

for file in x*; do mv -v $file cb$file ; done
ls >> assignment.log

date >> assignment.log
