exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, ingredient_id: 1, name: 'chicken fried rice'},
        {id: 2, ingredient_id: 2, name: 'chia tea'},
        {id: 3, ingredient_id: 3, name: 'pizza'}
      ]);
    });
};
