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
});
