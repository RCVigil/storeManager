const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('../db/connection');

const insert = async (products) => {
  const columns = Object.keys(snakeize(products))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(products)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
    [...Object.values(products)],
  );

  return insertId;
};

const getByProductsData = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  return camelize(result);
};

const findById = async (idProduto) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [idProduto],
    );
  return camelize(result);
};

module.exports = {
  insert,
  getByProductsData,
  findById,
};
