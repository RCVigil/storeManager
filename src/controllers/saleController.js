const saleService = require('../services/saleService');

const getSaleController = async (_req, res) => {
  const buscaVendas = await saleService.getSaleService();

  if (!buscaVendas) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(buscaVendas);
};

const getSaleControllerId = async (req, res) => {
  const vendaId = req.params;

  const idVenda = Number(vendaId.id);
  const buscaVenda = await saleService.getSaleServiceId(idVenda);

  if (idVenda > buscaVenda.length || !buscaVenda) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(buscaVenda);
};

module.exports = {
  getSaleController,
  getSaleControllerId,
};
