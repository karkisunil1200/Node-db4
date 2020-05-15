exports.up = function(knex) {
  return knex.schema.createTable('instructions', tbl => {
    tbl.increments();

    tbl.string('steps').notNullable();

    tbl.integer('quantity').notNullable();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions');
};
