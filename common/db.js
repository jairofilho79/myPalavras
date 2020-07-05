const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mySilabas';

const connect = MongoClient.connect

async function funcWithConnect(func, params) {
  try {
      const client = await connect(url, { useNewUrlParser: true })
      const db = client.db(dbName)
      try{
          return eval(func)(db, ...params)
      } catch(e) {
          console.error('Failed to execute ' + func)
          console.log(e)
      }
      client.close()
  }
  catch(e) {
      console.error('Failed to connect to DB')
      console.log(e)
  }
}

async function insertOne(db, collection, value) {
  db.collection(collection).insertOne(value)
  return db.collection(collection).findOne(value)
}

async function insertMany(db, collection, values) {
  db.collection(collection).insertMany(values)
}

async function find(db, collection, subject) {
    return db.collection(collection).find(subject).toArray()
}

async function findOne(db,collection,subject) {
  return db.collection(collection).findOne(subject)
}
module.exports = { funcWithConnect }
