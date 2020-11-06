const express = require('express');
const Tasks = require('./tasksModel');

const router = express.Router();

//-------------------
// ENDPOINTS
// url: /api/all_tasks/
//-------------------


// get all tasks
// getAll()
// GET /
//-------------------
router.get('/', (req,res)=>{
  Tasks.getAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({ message: 'Failed to get tasks '});
    });
});

module.exports = router;