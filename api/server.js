//import express
const express = require('express');

//new server
const server = express();

//use middleware
server.use(express.json());


//default GET
server.get('/', (req,res)=>{
  res.status(200).json({message:'The server is running, better go catch it'});
});

//export server
module.exports = server;