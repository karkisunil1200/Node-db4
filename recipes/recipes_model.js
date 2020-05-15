const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList
};

function getRecipes() {
  return db.select('*').from('recipes');
}
function getShoppingList(recipe_id) {
  return db
    .select('i.name', 'ri.quantity')
    .from('ingredients as i')
    .join('recipesIngredients as ri', 'ri.ingredient_id', 'i.id')
    .where('ri.recipe_id', recipe_id);
}
