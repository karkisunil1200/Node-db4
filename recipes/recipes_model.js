const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db.select('recipes.name').from('recipes');
}
function getShoppingList(id) {
  return db
    .select('i.name', 'ri.quantity')
    .from('ingredients as i')
    .join('recipesIngredients as ri', 'ri.ingredient_id', 'i.id')
    .where('ri.recipe_id', `${id}`);
}

function getInstructions(id) {
  return db
    .select('i.steps')
    .from('instructions as i')
    .join('recipes as r', 'i.recipe_id', 'r.id')
    .where('i.recipe_id', id);
}
