
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Italian Bread'},
        {ingredient_name: 'Mayonnaise'},
        {ingredient_name: 'Mozzarella'},
        {ingredient_name: 'Bread'},
        {ingredient_name: 'Peanut Butter'},
        {ingredient_name: 'Jelly'},
      ]);
    });
};
