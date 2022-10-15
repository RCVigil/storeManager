const { expect } = require("chai");
const sinon = require('sinon');

const connection = require("../../../src/db/connection");
const productModel = require("../../../src/models/productModel");

const productsMock = require('../mocks/products.mock')

describe('Model de produtos', function () {
  describe('Listar todos os produtos', function () {
    productsMock;

    beforeEach(() => {
      sinon.stub(connection, "execute").resolves([productsMock]);
    });

    it('Deve retornar um array com todos os elementos', async function () {
      const result = await productModel.getByProductsData();

      expect(result).to.be.a('array');
      expect(result).to.be.deep.eq(productsMock);
    });

    afterEach(() => {
      sinon.restore;
    });
  })
});

