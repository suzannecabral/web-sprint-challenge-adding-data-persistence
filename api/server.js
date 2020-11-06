//import express
const express = require('express');
const projectsRouter = require('./projects/projectsRouter');


//new server
const server = express();

//define middleware
//my default logger function
const logger = (req,res,next) => {
  const ts = new Date();

  console.log(`-------------------`);
  console.log(`[${ts.toLocaleTimeString()}] Server Request: `);
  console.log(`${req.method} ${req.url}`);
  console.log(`-------------------`);
  next();
}

//use middleware
server.use(express.json());
server.use(logger);
server.use('/api/projects',projectsRouter);

//default GET
server.get('/', (req,res)=>{
  res.status(200).json({message:'The server is running, better go catch it'});
});

//export server
module.exports = server;