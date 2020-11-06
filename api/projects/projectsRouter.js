const express = require('express');
const Projects = require('./projectsModel');

//new router
const router = express.Router();


//-------------------
// ENDPOINTS
// url: /api/projects/
//-------------------


// get all projects
// Projects.getAll()
// GET /
//-------------------
router.get('/', (req,res)=>{
  Projects.getAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({ message: 'Failed to get projects '});
    });
});

// add new project
// Projects.addNew(project)
// POST /
//-------------------
router.post('/', (req,res)=>{
  const newProject = req.body;

  //required input:
  //    name: (text)
  //optional:
  //    description: (text)

  Projects.addNew(newProject)
    .then(data =>{ 
      res.status(201).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({ message: 'Failed to add project'});
    });
});


// add new task to project:
// Projects.addTask(task, project_id)
// POST /:id/tasks
//-------------------
router.post('/:id/tasks', (req,res)=>{
  const { id } = req.params;
  const newTask = {...req.body, project_id:id}

  //required input:
  //    description (text)
  //    order: (number)
  //optional:
  //    notes: (text)
  //    completed: (boolean)

  Projects.addTask(newTask, id)
    .then(data =>{ 
      res.status(201).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({ message: 'Failed to add project'});
    });
});

//export
module.exports = router;