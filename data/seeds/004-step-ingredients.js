
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {step_id: 1, ingredient_id: 1, amount: '2 Slices per sandwich'},
        {step_id: 2, ingredient_id: 2, amount: '1 tbs per slice of bread'},
        {step_id: 3, ingredient_id: 3, amount: '2 slices per sandwich'},
        {step_id: 6, ingredient_id: 4, amount: '2 slices'},
        {step_id: 7, ingredient_id: 5, amount: 'Heaps'},
        {step_id: 8, ingredient_id: 6, amount: 'Mountains'},
      ]);
    });
};
