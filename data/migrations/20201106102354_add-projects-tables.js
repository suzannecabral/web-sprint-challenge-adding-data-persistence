
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl=>{
    tbl.increments();

    tbl.text('name')
      .notNullable()
      .unique();

    tbl.text('description');

    tbl.boolean('completed')
      .notNullable()
      .defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
