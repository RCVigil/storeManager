const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../../src/db/connection");
const productModel = require("../../../src/models/productModel");

const {productsMock, newProducts} = require("../mocks/products.mock");

describe("TESTANDO A CAMADA MODEL", function () {
  describe("Listar os produtos", function () {

    it("Deve retornar um array com todos os elementos getByProductsData(22-28)", async function () {
      // Arranjo
      sinon.stub(connection, "execute").resolves([productsMock]);

      // Ação
      const result = await productModel.getByProductsData();

      // Assertiva
      expect(result).to.be.deep.equal(productsMock);
    });

    it("Deve retornar um array com um elemento findByID(30-36)", async function () {
      // Arranjo
      sinon.stub(connection, "execute").resolves([productsMock]);

      // Ação
      const result = await productModel.findById([productsMock]);

      // Assertiva
      expect([result[0]]).to.be.deep.eq([{ id: 1, name: "Martelo de Thor" }]);
    });

    describe("Inserir Produtos na Model(5-20)", () => {
      it("Deve inserir um array com novo produto", async function () {
        // Arranjo
        sinon.stub(connection, "execute").resolves([{insertId: 4}]);

        // Ação
        const result = await productModel.insert(newProducts);

        // Assertiva
        expect(result).to.equal(4);
      });
    });

    afterEach(sinon.restore);
  });
});
