"use strict";

const assert = require("assert");
const scanner = require("./scan-headers.js");

const TARGET_URL = "https://juice-shop.herokuapp.com"

describe("Header Scanner", () => {
    before(() => {
    });

    after(() => {
    });

    describe("Sanity tests", () => {
        it("should return the expected structure", function () {
            return scanner.checkHeaders(TARGET_URL)
                .then(res => {
                    assert.equal(res.status, 200);
                    assert.notEqual(res.messages.length, 0);
                    assert.notEqual(res.messages.headers, 0);
                });
        });

        it("should include a specific error", function () {
            const expectedFinding = { msg: "Missing field: content-security-policy", type: "error" }
            return scanner.checkHeaders(TARGET_URL)
                .then(res => {
                    assert(res.messages.some(msg => msg.msg === expectedFinding.msg && msg.type === expectedFinding.type))
                });
        });
    });

    describe("Negative tests", () => {
        it("should return an error for invalid urls", function () {
            return scanner.checkHeaders("qwerty")
                .then(res => assert.fail("It should have failed"))
                .catch(err => { });
        });

        it("should return an error for inexistent urls", function () {
            return scanner.checkHeaders("http://localhost:1234/it/should/really/not/exist")
                .then(res => assert.fail("It should have failed"))
                .catch(err => { });
        });
    });
});