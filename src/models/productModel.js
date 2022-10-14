const camelize = require('camelize');
const connection = require('../db/connection');

const getByProductsData = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );

  return camelize(result);
};

const findById = async (idProduto) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [idProduto],
  );
  return camelize(result);
};

module.exports = {
  getByProductsData,
  findById,
};
