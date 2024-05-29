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

  it("should return payment methods for a valid cart ID", (done) => {
    chai
      .request(url)
      .get("/cart/47")
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Payment methods for cart 47");
        done();
      });
  });

  it("should return 404 for a non-numeric cart ID", (done) => {
    chai
      .request(url)
      .get("/cart/him")
      .end((error, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it("should return 404 for a negative cart ID", (done) => {
    chai
      .request(url)
      .get("/cart/-47")
      .end((error, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it("should return available payment methods", (done) => {
    chai
      .request(url)
      .get("/available_payments")
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      });
  });

  it("should return welcome message for a valid login", (done) => {
    const userData = { userName: "John" };
    chai
      .request(url)
      .post("/login")
      .send(userData)
      .end((error, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal(`Welcome ${userData.userName}`);
        done();
      });
  });
});
