const {default:mongoose} = require("mongoose");

async function connectDB(){
  await mongoose.connect("mongodb://localhost:27017/nodejs-course");
}

module.exports = connectDB ;


// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'nodejs-course';

// async function connect() {
//     // Use connect method to connect to the server
//     await client.connect();
   
//     const db = await client.db(dbName);
   
  
  
//     return db;
//   }

//   module.exports = connect;