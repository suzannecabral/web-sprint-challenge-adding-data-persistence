const db = require('../../data/dbConfig');

module.exports = {
  
  // url: /api/projects/

  // get all projects
  // GET /
  getAll(){
    return db('projects');
  },

  // add new project
  // POST  /
  addNew(project){
    return 'new project goes here'
  },

  // add new task to project:
  // POST /:id/tasks
  addTask(task, project_id){
    return 'new task goes here'
  }

};