const { expect } = require("chai");
const sinon = require('sinon');
const { productModel } = require("src/models/productModel.js");
const connection = require("../../../src/db/connection");

describe('Model de produtos', () => {
  describe('Listar todos os produtos', () => {
    const expectReturn = [
      {
        id: 1,
        name: "Martelo de Thor",
      },
      {
        id: 2,
        name: "Traje de encolhimento",
      },
      {
        id: 3,
        name: "Escudo do Capitão América",
      },
    ];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([expectReturn])
    });

    it('Deve retornar um array com todos os elementos', async () => {
      const result = await productModel.getByProducts();

      expect(result).to.be.a('array');
      expect(result).to.be.deep.eq(expectReturn);
    });

    afterEach(() => {
      sinon.restore();
    });
  })
});

