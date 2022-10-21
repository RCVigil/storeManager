const saleModel = require('../models/saleModel');

const getSaleService = async () => {
  const result = await saleModel.getBySaleData();
  return result;
};
const getSaleServiceId = async (idVenda) => {
  const result = await saleModel.findById(idVenda);
  console.log('Result da getSaleServiceId da linha 9 é: ', result);
  return result;
};

module.exports = {
  getSaleService,
  getSaleServiceId,
};
