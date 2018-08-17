#!/bin/bash
#script ejemplo de actualizacion
#elija su distribucion
#debian-ubuntu
cd /home/node/microservices-sql/sql
pm2 start node_modules/react-scripts/scripts/start.js --watch --name "react"
cd /home/node/microservices-sql
pm2 start soporte/index.js -i 6 --watch --name "soporte"
pm2 start gateway/index.js -i 4 --watch --name "gateway"

#cd ./src/ & rm -rf uploads 
