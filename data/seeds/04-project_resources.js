
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {
          project_id:1,
          resource_id:1,
        },
        {
          project_id:1,
          resource_id:2,
        },
        {
          project_id:1,
          resource_id:8,
        },
        {
          project_id:1,
          resource_id:11,
        },
        {
          project_id:1,
          resource_id:13,
        },
        {
          project_id:2,
          resource_id:3,
        },
        {
          project_id:2,
          resource_id:4,
        },
        {
          project_id:2,
          resource_id:5,
        },
        {
          project_id:2,
          resource_id:6,
        },
        {
          project_id:2,
          resource_id:10,
        },
        {
          project_id:2,
          resource_id:12,
        },
        {
          project_id:3,
          resource_id:2,
        },
        {
          project_id:3,
          resource_id:7,
        },
        {
          project_id:3,
          resource_id:8,
        },
        {
          project_id:3,
          resource_id:9,
        },
        {
          project_id:3,
          resource_id:13,
        },

      ]);
    });
};
