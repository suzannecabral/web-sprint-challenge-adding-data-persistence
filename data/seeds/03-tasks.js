
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'gather dishes',
          notes:'check desks for stray plates',
          order:1,
          project_id:1,
        },
        {
          description: 'fill the sink with soap',
          notes:'',
          order:2,
          project_id:1,
        },
        {
          description: 'soak dishes',
          notes:'',
          order:3,
          project_id:1,
        },
        {
          description: 'scrub dishes',
          notes:'',
          order:4,
          project_id:1,
        },
        {
          description: 'move to drying rack',
          notes:'',
          order:5,
          project_id:1,
        },
        {
          description: 'cut boards to length',
          notes:'',
          order:1,
          project_id:2,
        },
        {
          description: 'Move to garden',
          notes:'',
          order:2,
          project_id:2,
        },
        {
          description: 'join frame with bolts',
          notes:'',
          order:3,
          project_id:2,
        },
        {
          description: 'check seating with level',
          notes:'',
          order:4,
          project_id:2,
        },
        {
          description: 'join frame to stakes',
          notes:'optional: line with cloth to prevent gophers',
          order:5,
          project_id:2,
        },
        {
          description: 'sort mess into piles',
          notes:'',
          order:1,
          project_id:3,
        },
        {
          description: 'toss garbage',
          notes:'',
          order:2,
          project_id:3,
        },
        {
          description: 'add labels to boxes',
          notes:'',
          order:3,
          project_id:3,
        },
        {
          description: 'move piles to boxes',
          notes:'tidily',
          order:4,
          project_id:3,
        },
        {
          description: 'clean desk and floor',
          notes:'',
          order:5,
          project_id:3,
        },
        
      ]);
    });
};
