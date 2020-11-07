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
  //---------------------
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
  //---------------------
  async addTask(task){

    //insert new task
    const [id] = await db('tasks').insert(task);

    //return newly added task data
    return db('tasks').where('tasks.id',id).first();
  },



  // get tasks by project
  // getTasks(project_id)
  // GET /:id/tasks
  //-------------------

  async getTasks(project_id){
    //check proj exists
    const foundProject = await db('projects')
      .where('projects.id',project_id)
      .first();


    
    if(foundProject){
      //get tasks by id
      return db('tasks as t')
        .join('projects as p','t.project_id','p.id')
        .select('t.description', 't.notes')
        .where('t.project_id',project_id)
        .orderBy('t.order');

    }else{
      //no proj, return null
      return Promise.resolve(null);
    }
  },
  
  async getResources(project_id){
    //check proj exists
    const foundProject = await db('projects')
      .where('projects.id',project_id)
      .first();

    if(foundProject){
      return db('project_resources as pr')
        .join('resources as r', 'pr.resource_id', 'r.id')
        .select('r.name', 'r.description')
        .where('pr.project_id', project_id);
    }else{
      //no proj, return null
      return Promise.resolve(null);
    }

  }

};