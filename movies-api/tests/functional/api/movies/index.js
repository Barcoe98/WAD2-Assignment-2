import chai from "chai";
import request from "supertest";

const expect = chai.expect;

let api;

const sampleMovie = {
  id: 337401,
  title: "Mulan",
};

describe("Movies endpoint", () => {
  beforeEach(async () => {
    try {
      api = require("../../../../index");
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  });
  afterEach(() => {
    api.close(); // Release PORT 8080
    delete require.cache[require.resolve("../../../../index")];
  });


  describe("GET /movies ", () => {
    it("should return 20 movies and a status 200", (done) => {
      request(api)
        .get("/api/movies")
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

   describe("GET /movies/:id", () => {
    describe("when the id is valid", () => {
      it("should return the matching movie", () => {
         request(api)
          .get(`/api/movies/${sampleMovie.id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("title", sampleMovie.title);
          });
      });
    });
    
    describe("when the id is invalid", () => {
      it("should return the NOT found message", () => {
         request(api)
          .get("/api/movies/xxx")
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
