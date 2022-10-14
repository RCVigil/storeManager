const productModel = require('../models/productModel');

// PROCURANDO PRODUTOS
const getProductService = async (idProduto) => {
  const result = await productModel.getByProductsData(idProduto);
  return result;
};

module.exports = {
  getProductService,
};
