exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          id: 1,
          recipe_id: 1,
          quantity: 1,
          ingredient_id: 2,
          steps: 'First: get chicken and get rice and stiryFry it'
        },
        {
          id: 2,
          recipe_id: 2,
          quantity: 2,
          ingredient_id: 2,
          steps: 'First: get milk and boil it and add stuff'
        },
        {
          id: 3,
          recipe_id: 3,
          quantity: 2,
          ingredient_id: 2,
          steps: 'First: get flour and add vegetables'
        }
      ]);
    });
};
