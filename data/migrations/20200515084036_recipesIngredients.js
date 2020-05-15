exports.up = function(knex) {
  return knex.schema.createTable('recipesIngredients', tbl => {
    tbl.increments();

    tbl.integer('quantity').notNullable();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

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
  return knex.schema.dropTableIfExists('recipesIngredients');
};
