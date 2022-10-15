const express = require('express');
const {
  getProductController,
  getProductControllerId,
  creatProductControl,
} = require('../controllers/productController');

const router = express.Router();

// busca produto (todos)
router.get('/', getProductController);
// busca produto único por (id)
router.get('/:id', getProductControllerId);
// adiciona produto por (id)
router.post('/', creatProductControl);
// router.put('/:id', ); alterar produto
// router.get('/', );
// router.get('/:id', );

module.exports = router;
