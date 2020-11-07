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


  // get list of resources for task
  // getResources(task_id) 
  // GET /:id/resources
  //-----------------------

  router.get('/:id/resources', (req,res)=>{
    const task_id = req.params.id;

    Tasks.getResources(task_id)
      .then(data =>{ 
        res.status(200).json(data);
      })
      .catch(err=>{
        console.log(err);
        res.status(500).json({ message: 'Failed to get resources'});
      });
  });


  // post a new resource for a task
  // addResource(task_id, resource_id)
  // POST /:id/resources
  //-----------------------

  router.post('/:id/resources', (req,res)=>{
    const task_id = req.params.id;
    const resource_id = req.body.resource_id;

    // requires input: resource_id

    Tasks.addResource(task_id, resource_id)
      .then(data =>{ 
        res.status(201).json(data);
      })
      .catch(err=>{
        console.log(err);
        res.status(500).json({ message: 'Failed to add resource'});
      });
  });



module.exports = router;