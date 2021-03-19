const router = require('express').Router();

const { getRecipeById } = require('./recipes-model');

router.get('/:id', (req, res, next) => {
    getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;