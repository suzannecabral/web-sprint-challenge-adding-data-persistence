
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name:"Wash Dishes",
          description:"Clean all the dishes in the sink",
        },
        {
          name:"Build Raised Beds",
          description:"Build raised beds for the garden",
        },
        {
          name:"Clean Office",
          description:"Clean and sort everything in the office",
        },
      ]);
    });
};
