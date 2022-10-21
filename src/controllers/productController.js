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

const creatProductControl = async (req, res) => {
  const { name } = req.body;

  const novoProd = await productService.addProductService({ name });

  res.status(201).json({ id: novoProd, name });
};

const deleteProductControllerId = async (req, res) => {
  const bdStoreManager = await productService.getProductService();
  console.log('Tamanho do BD = ', bdStoreManager.length);
  const productId = req.params;

  const idProduto = Number(productId.id);
  console.log('idProduto é= ', idProduto);

  if (idProduto < bdStoreManager.length) {
    const buscaProduto = await productService.deleteProductService(idProduto);
    console.log(buscaProduto);

    res.status(204).json(buscaProduto);
  }

  return res.status(404).json({ message: 'Product not found' });
};

module.exports = {
  getProductController,
  getProductControllerId,
  creatProductControl,
  deleteProductControllerId,
};
