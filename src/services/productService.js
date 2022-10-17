const productModel = require('../models/productModel');

// PROCURANDO PRODUTOS
const getProductService = async (idProduto) => {
  const result = await productModel.getByProductsData(idProduto);
  return result;
};

const addProductService = async ({ name }) => {
  const result = await productModel.insert({ name });
  console.log('RESULT DA addProductService é', result);
  return result;
};

module.exports = {
  getProductService,
  addProductService,
};
