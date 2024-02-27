const { getMethod, postMethod, putMethod, pacthMethod, deleteMethod } = require("../apiServer/apiObjects");

describe("Testing API restful", function () {
    //Test case 1
    it("Test GET from Function", async function () {
        getMethod();
    });
    it("Test POST from Function", async function () {
        postMethod();
    });
    it("Test PUT from Function", async function () {
        putMethod();
    });
    it("Test PATCH from Function", async function () {
        pacthMethod();
    });
    it("Test Delete from Function", async function () {
        deleteMethod();
    });
});