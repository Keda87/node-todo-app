/* eslint-disable no-undef */
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server';

const MONGO_USER = process.env.TODO_DB_USER
const MONGO_PASS = process.env.TODO_DB_PASS
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB_NAME = process.env.TODO_DB_NAME
const DB_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@db:${MONGO_PORT}/${MONGO_DB_NAME}`


mongoose.Promise = Promise;

export function connect() {
  return new Promise((resolve, reject) => {

    if (process.env.NODE_ENV === 'test') {
      const mongoServer = new MongoMemoryServer()
      mongoServer.getConnectionString()
        .then((mongoUri) => {
          mongoose.createConnection(mongoUri, { useNewUrlParser: true })
            .then((res, err) => {
              if (err) { return reject(err) }
              resolve()
            })
        })
        .catch(err => reject(err))
    } else {
      mongoose.connect(DB_URI, { useNewUrlParser: true })
        .then((res, err) => {
          if (err) { return reject(err) }
          resolve()
        })
        .catch(err => reject(err))
    }

  })
}

export function close() {
  return mongoose.disconnect()
}