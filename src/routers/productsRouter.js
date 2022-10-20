const express = require('express');
const {
  getProductController,
  getProductControllerId,
  creatProductControl,
} = require('../controllers/productController');

const validationAddProducts = require('../middlewares/validatedInsertProduct');

const router = express.Router();

// busca produto (todos)
router.get('/', getProductController);

// busca produto único por (id)
router.get('/:id', getProductControllerId);

// adiciona produto por name
router.post(
  '/',
  validationAddProducts,
  creatProductControl,
);

module.exports = router;
