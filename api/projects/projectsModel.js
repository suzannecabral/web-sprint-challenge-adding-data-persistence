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
  // POST /:id/tasks
  async addTask(task, project_id){

    //insert new project
    await 'insert task here'

    //take returned id, look up newly added proj

    //return newly added proj data
    return 'new task'
    
  }
};