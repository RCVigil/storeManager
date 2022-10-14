const express = require('express');
const {
  getProductController,
  getProductControllerId,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProductController);
router.get('/:id', getProductControllerId);
// router.put('/:id', getProductController);
// router.post('/', );
// router.get('/', );
// router.get('/:id', );

module.exports = router;
