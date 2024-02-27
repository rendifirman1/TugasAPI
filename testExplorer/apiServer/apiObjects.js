const request = require("supertest"); //import supertest
const { expect } = require("chai"); //Import chai
const baseUrl = require("../globalVariabel/baseUrl");

async function getMethod() {
    const response = await request(url).get("/objects");
        //assertation / verifikasi
        expect(response.status).to.equal(200);
        console.log(response.body);
}

async function postMethod() {
    const response = await request(url)
      .post("/objects")
      .send({
        name: "Rendi Firman",
        data: {
          Generation: "2024th",
          Price: "20000",
          Capacity: "125 GB",
        },
      });
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Rendi Firman");
    console.log(response.body);
}

    async function putMethod() {
        const response = await request(url)
          .put(`/objects${Id}`)
          .send({
            name: "Rendi Firman PUT",
            data: {
              Generation: "9999th",
              Price: "999",
              Capacity: "800 GB",
              Address: "Indonesia"
            },
          });
        //assertation / verifikasi
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal("Rendi Firman PUT");
        expect(response.body.data.Generation).to.equal("9999th");
        expect(response.body.data.Price).to.equal("999");
        expect(response.body.data.Capacity).to.equal("800 GB");
        expect(response.body.data.Address).to.equal("Indonesia");

  
    console.log(response.body);
  }

  async function pacthMethod() {
    const response = await request(url)
      .patch(`/objects${Id}`)
      .send({
        "name": "Rendi Firman (Patch Name)",
      });
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Rendi Firman (Patch Name)");
    console.log(response.body);
}
async function deleteMethod() {
    const response = await request(url)
      .delete(`/objects${Id}`)
      expect(response.body.message).to.equal(
        `Object with id = ${Id} has been deleted.`);
    //assertation / verifikasi
    expect(response.body.error).to.equal(`Object with id = ${Id} was not found.`);
    console.log(response.body);
}

module.exports = { getMethod, postMethod, putMethod, pacthMethod, deleteMethod };
