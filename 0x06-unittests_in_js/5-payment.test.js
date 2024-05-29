const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const sendPaymentRequestToApi = require("./5-payment");

describe("Find the total cost test", () => {
  let sinonSpy;

  beforeEach(() => {
    if (!sinonSpy) {
      sinonSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    sinonSpy.log.resetHistory();
  });

  it("should log the correct total for payment request (100, 20)", () => {
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.log.calledWith("The total is: 120")).to.be.true;
    expect(sinonSpy.log.calledOnce).to.be.true;
  });
  it("should log the correct total for payment request (10, 10)", () => {
    sendPaymentRequestToApi(10, 10);
    expect(sinonSpy.log.calledWith("The total is: 20")).to.be.true;
    expect(sinonSpy.log.calledOnce).to.be.true;
  });
});
