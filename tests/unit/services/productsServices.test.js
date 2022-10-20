const { expect } = require('chai');
const sinon = require('sinon');

const productModel = require("../../../src/models/productModel");
const productService = require("../../../src/services/productService");

const productsMock = require("../mocks/products.mock");

describe('TESTANDO A CAMADA SERVICE', () => {
  it('Testando a camada service getByProductService (4-7)', async () => {
    //arranjo
    sinon.stub(productModel, "getByProductsData").resolves(productsMock);

    //açao
    const result = await productService.getProductService();

    // assertiva
    // expect(result).to.be.a("array");
    expect(result).to.be.deep.eq(productsMock);
  });

  it('Testando addProductService adiciona um produto (12-15)', async () => {
    // Arranjo
    sinon.stub(productModel, "insert").resolves({ id: 4, name: "Capa do Sr. Destino" });

    // Ação
    const result = await productService.addProductService({ name: "Capa do Sr. Destino" });

    // Assertiva
    // expect(result).to.be.a("array");
    expect(result).to.be.deep.eq({ id: 4, name: "Capa do Sr. Destino" });
  });


  afterEach(function () {
    sinon.restore();
  });
});

