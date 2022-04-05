#!/bin/bash
file="/tmp/github520.py"
if [ -f "$file" ]
then
 echo "$file found."
 rm -rf $file
else
 echo "$file not found."
fi
wget -P /tmp https://cdn.jsdelivr.net/gh/shaonianzhentan/ha-config@main/bash/github520.py
python $file