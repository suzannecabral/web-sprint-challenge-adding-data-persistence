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
    await 'insert resource here'

    //take returned id, look up newly added proj

    //return newly added proj data
    return 'new resource'

  },
};