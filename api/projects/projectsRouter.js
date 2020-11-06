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
      res.json(data);
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



// add new task to project:
// Projects.addTask(task, project_id)
// POST /:id/tasks
//-------------------


//export
module.exports = router;