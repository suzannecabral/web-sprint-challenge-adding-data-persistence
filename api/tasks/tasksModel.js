const db = require('../../data/dbConfig');

module.exports = {
  getAll(){
    return db('tasks')
      .join('projects as p', 'tasks.project_id', 'p.id')
      .select('tasks.description', 'tasks.notes', 'p.name as Project');
  },

  // get list of resources for task
  // getResources(task_id) 
  // GET /:id/resources
  //-----------------------
  async getResources(task_id){
    const foundTask = await db('tasks')
    .where('tasks.id', task_id)
    .first();

    if(foundTask){
      return db('project_resources as pr')
        .join('tasks as t', 'pr.task_id', 't.id')
        .join('resources as r', 'pr.resource_id', 'r.id')
        .select('t.description as Task Name', 't.notes as Task Notes', 'r.name as Resource')
        .where('pr.task_id',task_id)
        .groupBy('r.id');


    }else{
      return Promise.resolve(null);
    }
  },

  // post a new resource for a task
  // addResource()
  // POST /:id/resources
  //-----------------------
  async addResource(task_id, resource_id){
    // return Promise.resolve(null);


    //check that task exists
    const foundTask = await db('tasks')
      .where('tasks.id', task_id)
      .first();

    if(foundTask){
      const newResource = {
        "task_id":task_id,
        "resource_id":resource_id,
        "project_id":foundTask.project_id
      }

      const [id] = await db('project_resources as pr')
      .insert(newResource);

      // return db('project_resources')
      //   .where('project_resources.id',id)
      //   .first();

      return db('project_resources as pr')
        .join('tasks as t', 'pr.task_id', 't.id')
        .join('resources as r', 'pr.resource_id','r.id')
        .select('t.description as Task Description','t.notes as Task Notes', 'r.name as Resource')
        .where('pr.id',id);
      
    }else{
      return Promise.resolve(null);
    }
  }
};