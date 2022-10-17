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

  if (!name) {
    res.status(404).json({ message: '"name" is required' });
  }

  if (name.lenght < 5) {
    res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  if (typeof (name) === 'string') {
    console.log('newProduct no CONTROLLER é: ', name);

    const novoProd = await productService.addProductService({ name });

    console.log('PRODUCTcONTROLLER ADICIONOU: ', novoProd);

    res.status(201).json({ id: novoProd, name });
  }
};

module.exports = {
  getProductController,
  getProductControllerId,
  creatProductControl,
};
