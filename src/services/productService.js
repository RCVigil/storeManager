const productModel = require('../models/productModel');

// PROCURANDO PRODUTOS
const getProductService = async (idProduto) => {
  const result = await productModel.getByProductsData(idProduto);
  return result;
};
const addProductService = async (id, name) => {
  const result = await productModel.addProductDB(id, name);
  return result;
};

module.exports = {
  getProductService,
  addProductService,
};
