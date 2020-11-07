//import express
const express = require('express');
const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter');
const tasksRouter = require('./tasks/tasksRouter');

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
//and routers
server.use('/api/projects',projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/all_tasks', tasksRouter);

//default GET
server.get('/', (req,res)=>{
  res.status(200).json({message:'The server is running, better go catch it'});
});

//export server
module.exports = server;