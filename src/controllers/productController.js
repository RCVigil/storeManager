const productService = require('../services/productService');

const getProductController = async (_req, res) => {
  const buscaProduto = await productService.getProductService();
  if (!buscaProduto) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(buscaProduto);
};

const getProductControllerId = async (req, res) => {
  const productId = req.params;
  const idProduto = Number(productId.id);
  const buscaProduto = await productService.getProductService(idProduto);

  const productUnit = buscaProduto.find((item) => item.id === idProduto);
  if (idProduto > buscaProduto.length || !productUnit) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(productUnit);
};

module.exports = {
  getProductController,
  getProductControllerId,
};
