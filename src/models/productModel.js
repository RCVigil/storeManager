const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('../db/connection');

// const insert = async (travel) => {
//   const columns = Object.keys(snakeize(travel))
//     .map((key) => `${key}`)
//     .join(', ');

//   const placeholders = Object.keys(travel)
//     .map((_key) => '?')
//     .join(', ');

//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO travels (${columns}) VALUE (${placeholders})`,
//     [...Object.values(travel)],
//   );

//   return insertId;
// };

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

const addProductDB = async (id, name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (id, name) VALUES (?, ?)',
    [id, name],
  );
  return camelize(result);
};

module.exports = {
  // insert,
  getByProductsData,
  findById,
  addProductDB,
};
