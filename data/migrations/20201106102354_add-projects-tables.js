
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
  .createTable('resources', tbl=>{
    tbl.increments();

    tbl.text('name')
      .notNullable()
      .unique();

    tbl.text('description');
  })
  .createTable('tasks', tbl=>{
    tbl.increments();

    tbl.text('description')
      .notNullable();

    tbl.text('notes');

    tbl.boolean('completed')
      .notNullable()
      .defaultTo(false);

    tbl.integer('order')
      .notNullable()
      .unsigned();

    tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

  })
  .createTable('project_resources', tbl=>{
    tbl.increments();

    tbl.integer('project_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      tbl.integer('resource_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl.integer('task_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('tasks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};
 
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
  
};
