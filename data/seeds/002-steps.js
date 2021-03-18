
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
        {step_number: 1, step_text: 'Start by chilling your butter, and optionally your pan, in your freezer. Keeping these chilled helps your eggs from cooking too fast.', recipe_id: 2},
        {step_number: 2, step_text: 'While those are chilling, slice off a few slices of your italian bread (2 per person) and your green onion or chives for garnish.', recipe_id: 2},
        {step_number: 3, step_text: 'Once sufficiently chilled, chop your butter into small cubes to allow them more coverage in your eggs.', recipe_id: 2},
        {step_number: 4, step_text: 'Crack your eggs into a bowl and whisk, then add the butter cubes and prepare to cook.', recipe_id: 2},
        {step_number: 5, step_text: 'Add your egg/butter combo to your optionally chilled pan, and turn your burner to medium-low. While cooking your eggs, you should always keep them moving to prevent them from become hard-set scrambled eggs. Remove from heat occasionally if cooking too fast to do the same.', recipe_id: 2},
        {step_number: 6, step_text: 'In another pan or a toaster, toast your slices of italian bread. If in a pan, toast with butter in the pan, if toaster spread a little butter on each slice after toasting.', recipe_id: 2},
        {step_number: 7, step_text: 'When your eggs are close to done, add a splash of half & half, and a pinch of salt & pepper to your eggs, then cook to finish.', recipe_id: 2},
        {step_number: 8, step_text: 'Once your eggs are cooked, but while still soft-set, drape them gently over your toasted bread. Top each serving with green onion/chives for garnish and flavor, and serve immediately!', recipe_id: 2},
      ]);
    });
};
