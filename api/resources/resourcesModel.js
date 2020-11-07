const db = require('../../data/dbConfig');

module.exports = {
  
  // url: /api/resources/
  //--------------------
  
  // get all resources
  // GET /
  getAll(){
    return db('resources');
  },

  // add new resource
  // POST  /
  async addNew(resource){

    //insert new resource
    const [id] = await db('resources').insert(resource);

    //take returned id, look up newly added proj
    //return newly added proj data
    return db('resources')
      .where('resources.id', id)
      .first();
  },

};