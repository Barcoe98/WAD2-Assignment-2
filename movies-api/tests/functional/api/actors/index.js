import chai from "chai";
import request from "supertest";

const expect = chai.expect;

let api;

const sampleActor = {
  id: 337401,
  name: "Mulan",
};

describe("Actors endpoint", () => {
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


  describe("GET /actors ", () => {
    it("should return 20 actors and a status 200", (done) => {
      request(api)
        .get("/api/actors")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.equal(20);
          done();
        });
    });
  });

   describe("GET /actors/:id", () => {
    describe("when the id is valid", () => {
      it("should return the matching actors", () => {
         request(api)
          .get(`/api/actors/${sampleActor.id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("name", sampleActor.name);
          });
      });
    });
    
    describe("when the id is invalid", () => {
      it("should return the NOT found message", () => {
         request(api)
          .get("/api/actors/xxx")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect({
            success: false,
            status_code: 34,
            status_message: "The resource you requested could not be found.",
          });
      });
    });
  });
});
