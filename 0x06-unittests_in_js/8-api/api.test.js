const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect } = chai;

chai.use(chaiHttp);

const url = "http://localhost:7865";

describe("API test cases", () => {
  it("should return the welcome message", (done) => {
    chai
      .request(url)
      .get("/")
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Welcome to the payment system");
        done();
      });
  });
});
