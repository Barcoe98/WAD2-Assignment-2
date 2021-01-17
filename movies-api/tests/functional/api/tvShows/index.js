import chai from "chai";
import request from "supertest";

const expect = chai.expect;

let api;

const sampleTv = {
  id: 77169,
  name: "Cobra Kai",
};

describe("Tv Shows endpoint", () => {
  beforeEach(async () => {
    try {
      api = require("../../../../index");
    } catch (err) {
      console.error(`failed to Load Data: ${err}`);
    }
  });
  afterEach(() => {
    api.close(); // Release PORT 8080
    delete require.cache[require.resolve("../../../../index")];
  });


  describe("GET /tvshows ", () => {
    // it("should return 20 tv shows and a status 200", (done) => {
    //   request(api)
    //     .get("/api/tvshows")
    //     .set("Accept", "application/json")
    //     .expect("Content-Type", /json/)
    //     .expect(200)
    //     .end((err, res) => {
    //       //expect(res.body).to.deep.equal("{}");
    //       //expect(res.body.length).to.equal(20);
    //       done();
    //     });
    // });
  });

   describe("GET /tvshows/:id", () => {
    describe("when the id is valid", () => {
      // it("should return the matching tv show", () => {
      //    request(api)
      //     .get(`/api/tvshows/${sampleTv.id}`)
      //     .set("Accept", "application/json")
      //     .expect("Content-Type", /json/)
      //     .expect(200)
      //     .then((res) => {
      //       expect(res.body).to.have.property("title", sampleTv.name);
      //     });
      // });
    });
    
    describe("when the id is invalid", () => {
      // it("should return the NOT found message", () => {
      //    request(api)
      //     .get("/api/tvshows/xxx")
      //     .set("Accept", "application/json")
      //     .expect("Content-Type", /json/)
      //     .expect({
      //       success: false,
      //       status_code: 34,
      //       status_message: "The resource you requested could not be found.",
      //     });
      // });
    });
  });
});
