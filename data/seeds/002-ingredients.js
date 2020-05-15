exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'chicken'},
        {id: 2, name: 'rice'},
        {id: 3, name: 'milk'}
      ]);
    });
};
