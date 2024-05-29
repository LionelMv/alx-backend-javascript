const chai = require("chai");
const expect = chai.expect;
const request = require("request");

describe("API test cases", () => {
  const url = "http://localhost:7865";

  it("should return the correct response", (done) => {
    request.get(`${url}/`, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });

  it("should check the cart route", (done) => {
    request.get(`${url}/cart/47`, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 47");
      done();
    });
  });

  it("should check if the id is not a number", (done) => {
    request.get(`${url}/cart/him`, (error, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it("should check if the id is not a number", (done) => {
    request.get(`${url}/cart/-47`, (error, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it("GET /available_payments returns valid response", (done) => {
    request.get(`${url}/available_payments`, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });

  it("POST /login returns valid response", (done) => {
    const userData = { userName: "John" };
    request.post(`${url}/login`, { json: userData }, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Welcome ${userData.userName}`);
      done();
    });
  });
});
