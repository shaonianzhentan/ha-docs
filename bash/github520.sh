#!/bin/bash
file="/tmp/github520.py"
if [ -f "$file" ]
then
 echo "$file found."
 rm -rf $file
else
 echo "$file not found."
fi
wget -P /tmp https://gitee.com/shaonianzhentan/ha-docs/raw/master/bash/github520.py
python $file