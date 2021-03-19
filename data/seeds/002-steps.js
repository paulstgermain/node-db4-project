
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step_text: 'Take out the Italian Bread, slicing off as many slices as sandwiches desired.', recipe_id: 1},
        {step_number: 2, step_text: 'Spread mayonnaise on 1 half of each slice of bread, place 1 slice for each sandwich in a pan on the stovetop.', recipe_id: 1},
        {step_number: 3, step_text: 'Take out your fresh mozzarella, slicing off just enough to cover each slice of bread in the pan, then cover with the other slice - mayonnaise side up.', recipe_id: 1},
        {step_number: 4, step_text: 'Turn the burner to medium-high heat, cook until cheese is melted and bread is toasted and golden.', recipe_id: 1},
        {step_number: 5, step_text: "Slice each sandwich DIAGONALLY as to not offend your wife's sensibilities, serve hot, and enjoy! :P", recipe_id: 1},
        {step_number: 1, step_text: 'Lay 2 slices of bread of choice on a plate.', recipe_id: 2},
        {step_number: 2, step_text: 'Spread peanut butter on one slice.', recipe_id: 2},
        {step_number: 3, step_text: 'Spread jelly on the other half.', recipe_id: 2},
        {step_number: 4, step_text: 'Put newly coated slices of bread together, and enjoy!', recipe_id: 2},
      ]);
    });
};
