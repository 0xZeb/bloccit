const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

  describe("GET /", () => {

    it("should return status code 200", (done) => {
      request.get(base, (err,res,body) => {
        expect(res.statusCode).toBe(200);
        console.log(res.statusCode + " first one!\n");
        console.log("\n " + body + " top one");
        done();
      });
    });
  });


  describe("GET /marco", () => {

    it("should return status 200", (done) => {
      request.get(base, (err,res,body) => {
        expect(res.statusCode).toBe(200);
        console.log(res.statusCode + " second one!");
        console.log(body);
        done();
      });
    });

  });//end test



})
