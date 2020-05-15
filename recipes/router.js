const express = require('express');
const Db = require('./recipes_model');

const router = express.Router();

router.get('/', (req, res) => {
  Db.getRecipes()
    .then(recipes => {
      res.status(200).json({data: recipes});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.get('/:id/shoppingList', (req, res) => {
  const {id} = req.params;

  Db.getShoppingList(id)
    .then(list => {
      res.status(500).json({data: list});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.get('/:id/instructions', (req, res) => {
  const {id} = req.params;

  Db.getInstructions(id)
    .then(instruction => {
      res.status(200).json({data: instruction});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
