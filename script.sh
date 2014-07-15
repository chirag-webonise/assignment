#!/bin/bash

echo "HOSTNAME " $HOSTNAME > assignment.log 

cat /etc/os-release >> assignment.log

echo "HOME " $HOME >> assignment.log 

who | cut -d " " -f 1,2 >> assignment.log

groups | tr " " "\n" >> assignment.log

ls -R $HOME >> assignment.log


date >> assignment.log


