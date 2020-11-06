const db = require('../../data/dbConfig');

module.exports = {
  getAll(){
    return db('tasks')
      .join('projects as p', 'tasks.project_id', 'p.id')
      .select('tasks.description', 'tasks.notes', 'p.name as Project');
  },
};