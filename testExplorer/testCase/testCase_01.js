const request = require("supertest"); //import supertest
const { expect } = require("chai"); //Import chai
//const supertest = require("supertest");
const baseUrl = require("../globalVariabel/baseUrl");

//const url = supertest("https://api.restful-api.dev"); //global variabel
const url = `${baseUrl}`; //define golbal variabel

//test suites
describe("Testing API restful", function () {
    // Test case 1
    it("Test GET", async function () {
      const response = await request(url).get("/objects");
      //assertation / verifikasi
      expect(response.status).to.equal(200);
    });
  });
