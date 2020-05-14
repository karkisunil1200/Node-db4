exports.up = function(knex) {
  knex.schema.createTable('ingredients', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.dropTableIfExists('ingredients');
};
