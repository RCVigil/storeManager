const camelize = require('camelize');
const connection = require('../db/connection');

const queryGet = `SELECT sp.sale_id AS saleId,
sd.date AS date,
  sp.product_id AS productId,
  sp.quantity AS quantity
  FROM StoreManager.sales AS sd
  INNER JOIN StoreManager.sales_products AS sp ON sp.sale_id = sd.id
      ORDER BY saleId, productId`;

const getBySaleData = async () => {
  const [result] = await connection.execute(queryGet);

  return camelize(result);
};

const queryGetById = `SELECT sd.date AS date,
    sp.product_id AS productId,
    sp.quantity AS quantity
    FROM StoreManager.sales AS sd
    INNER JOIN StoreManager.sales_products AS sp ON sp.sale_id = sd.id
    WHERE sp.sale_id = ?
        ORDER BY sp.sale_id, productId`;

const findById = async (idVenda) => {
  const [result] = await connection.execute(queryGetById, [idVenda]);
  console.log('O idVenda na linha 45 da Model é: ', idVenda);
  console.log('O Result na linha 46 da Model é: ', result);
  return camelize(result);
};

module.exports = {
  getBySaleData,
  findById,
};
