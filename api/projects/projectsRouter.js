const express = require('express');
const Posts = require('./projectsModel');

//new router
const router = express.Router();

//endpoints
router.get('/', (req,res)=>{
  res.status(200).json('All the projects will go here');
});

//export
module.exports = router;