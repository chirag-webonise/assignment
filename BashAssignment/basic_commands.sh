#!/bin/bash

#displaying hostname of system in assignment.log file.
echo "HOSTNAME " $HOSTNAME > assignment.log 

#displaying type and version of the operating system of the machine. 
cat /etc/os-release >> assignment.log

#isplaying whole path of the home directory,
echo "HOME " $HOME >> assignment.log 

#displaying logged users. 
who | cut -d " " -f 1,2 >> assignment.log

#displaying groups of user.
groups | tr " " "\n" >> assignment.log

# listing all the files except directories.
 ll | grep -v ^d >> assignment.log

#displaying date.
date >> assignment.log


