
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Italian Bread'},
        {ingredient_name: 'Mayonnaise'},
        {ingredient_name: 'Mozzarella'},
        {ingredient_name: 'Egg(s)'},
        {ingredient_name: 'Green Onion'},
        {ingredient_name: 'Chives'},
        {ingredient_name: 'Butter'},
        {ingredient_name: 'Half & Half'},
        {ingredient_name: 'Salt'},
        {ingredient_name: 'Pepper'},
      ]);
    });
};
