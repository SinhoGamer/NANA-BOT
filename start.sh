#!/bin/bash
GREEN='\033[0;32m'
while : 
do
echo -e "${GREEN} Ligando BOT..."

if [ "$1" = "sim" ]; then
node iniciar.js sim
elif [ "$1" = "não" ]; then
node iniciar.js não
else 
node iniciar.js
fi

sleep 1
done
