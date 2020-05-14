exports.up = function(knex) {
  return schema.createTable('recipes', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique();

    tbl
      .integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl.float('quantity').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('recipes');
};
