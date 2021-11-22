#!/bin/sh
npm run generate
# deploy migrations
npm run deploy
# build the app
npm run build # this will one day be a gitlab pipeline step
# host build app
npm run start
