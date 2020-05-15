exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipesIngredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipesIngredients').insert([
        {id: 1, quantity: 2, recipe_id: 2, ingredient_id: 1},
        {id: 2, quantity: 1, recipe_id: 1, ingredient_id: 2}
      ]);
    });
};
