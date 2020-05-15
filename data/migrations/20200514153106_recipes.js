exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique();

    tbl
      .integer('ingredient_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
