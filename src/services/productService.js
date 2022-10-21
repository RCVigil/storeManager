const productModel = require('../models/productModel');

// PROCURANDO PRODUTOS
const getProductService = async (idProduto) => {
  const result = await productModel.getByProductsData(idProduto);

  return result;
};

// ADICIONANDO PRODUTOS
const addProductService = async ({ name }) => {
  const result = await productModel.insert({ name });

  return result;
};

const deleteProductService = async (idProduto) => {
  const result = await productModel.deleteByProductsData(idProduto);

  return result;
};

module.exports = {
  getProductService,
  addProductService,
  deleteProductService,
};
