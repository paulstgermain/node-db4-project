const db = require('../../data/db-config');

const getRecipeById = async (recipe_id) => {
    const recipe = await db('recipes as r').where('recipe_id', recipe_id).first();

    const steps = await db('recipes as r')
    .join('steps as s', 's.recipe_id', 'r.recipe_id')
    .select('s.step_id', 's.step_number', 's.step_text')
    .where('s.recipe_id', recipe_id);

    const ingTemp = await db('recipes as r')
        .join('steps as s', 's.recipe_id', 'r.recipe_id')
        .leftJoin('step_ingredients as st', 'st.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'st.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id);

    const ing = ingTemp.map(i => {
        return {
            ingredient_id: i.ingredient_id,
            ingredient_name: i.ingredient_name,
            amount: i.amount,
            step_id: i.step_id
        }
    });

    const newSteps = await steps.map(step => {
        for(let i = 0; i < ing.length; i++){
            if (ing[i].step_id === step.step_id) {
                return {
                    ...step,
                    ingredients: [
                        {
                            ingredient_id: ing[i].ingredient_id,
                            ingredient_name: ing[i].ingredient_name,
                            amount: ing[i].amount
                        }
                    ]
                }
            } else if (ing[i].ingredient_id === null) {
                return {
                    ...step,
                    ingredients: []
                }
            }
        }
    })

    const result = recipe;


    result.steps = newSteps;

    return result;
}

module.exports = {
    getRecipeById
};