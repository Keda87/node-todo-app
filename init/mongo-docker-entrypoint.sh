#!/usr/bin/sh
echo '********************************'
echo 'Creating application user and db'
echo '********************************'
mongo -u ${MONGO_INITDB_ROOT_USERNAME} \
  -p ${MONGO_INITDB_ROOT_PASSWORD} \
  --authenticationDatabase ${MONGO_INITDB_DATABASE} \
  --eval "db.getSiblingDB('${TODO_DB_NAME}').createUser({user: '${TODO_DB_USER}', pwd: '${TODO_DB_PASS}', roles:[{role:'dbOwner', db: '${TODO_DB_NAME}'}]}); db = db.getSiblingDB('${TODO_DB_NAME}'); db.createCollection('${TODO_DB_COLLECTION_NAME}');"
