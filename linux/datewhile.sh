#!/bin/bash

startDate=`date -j -f +"%F" -d "2022 01 01"`
endDate=`date -j -f "+%F" -d "2022 02 01"`

while [ "$startDate" != "$endDate" ]
do
	echo $startDate

	startDate=`date -j -f +"%F" -d "$startDate + 1 day"`
done
