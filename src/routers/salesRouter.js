const express = require('express');

const {
  getSaleController,
  getSaleControllerId,
} = require('../controllers/saleController');

const router = express.Router();

router.get('/', getSaleController);

router.get('/:id', getSaleControllerId);

module.exports = router;
