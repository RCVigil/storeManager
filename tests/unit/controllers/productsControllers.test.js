const chai = require("chai");
const sinon = require("sinon");

const { expect } = chai;

const productService = require("../../../src/services/productService");
const productController = require("../../../src/controllers/productController");
const productsMock = require("../mocks/products.mock");;

describe('TESTANDO A CAMADA CONTROLLER', () => {
  describe("TESTANDO A getProductController", () => {
    it("Testando getProductController (3-8)", async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, "getProductService").resolves(productsMock);

      await productController.getProductController(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(productsMock)).to.be.equal(true);

      sinon.restore();
    });

    it("Testando getProductControllerId (10-20)", async () => {
      const res = {};
      const req = {params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, "getProductService").resolves(productsMock.productReqMock);

      await productController.getProductControllerId(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it("Testando getProductControllerId res(400) (18)", async () => {
      const res = {};
      const req = { params: { id: 99 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(productService, "getProductService")
        .resolves(productsMock.productReqMock);

      await productController.getProductControllerId(req, res);

      expect(res.status.calledWith(400)).to.be.equal(false);
    });

    afterEach(function () {
      sinon.restore();
    });
  });

});

