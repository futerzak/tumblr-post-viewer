#!/bin/bash
echo "install bower"
npm install -g bower

echo "install nodemon"
npm install nodemon -g

echo "install dependencies"
bower install --allow-root

echo "install server dependencies"
npm install --node-dev

echo "start app"
npm start
