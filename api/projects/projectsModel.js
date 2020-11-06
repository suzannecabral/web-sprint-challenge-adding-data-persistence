const db = require('../../data/dbConfig');

module.exports = {
  
  // url: /api/projects/
  //--------------------

  // get all projects
  // GET /
  getAll(){
    return db('projects');
  },

  // add new project
  // POST  /
  async addNew(project){

    //insert new project
    const [id] = await db('projects').insert(project);

    //take returned id, look up newly added proj
    //return newly added proj data
    return db('projects').where('projects.id', id).first();
  },

  // add new task to project:
  // project_id comes in on the req
  // POST /:id/tasks
  async addTask(task){

    //insert new task
    const [id] = await db('tasks').insert(task);

    //return newly added task data
    return db('tasks').where('tasks.id',id).first();
    
  }
};