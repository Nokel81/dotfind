const dotfind = require("./index");
const assert = require("assert");

describe("Tests", function() {
    it("should find a field on the first level", function() {
        const obj = {
            a: 5
        };
        assert.equal(dotfind("a", obj), 5);
    });

    it("should find a field on the second level", function() {
        const obj = {
            a: {
                b: 5
            }
        };
        assert.equal(dotfind("a.b", obj), 5);
    });

    it("should find a field on the third level", function() {
        const obj = {
            a: {
                b: {
                    c: 5
                }
            }
        };
        assert.equal(dotfind("a.b.c", obj), 5);
    });

    it("should find a field when the name is of dot notation", function () {
        const obj = {
            "a.b": 5
        };
        assert.equal(dotfind("a.b", obj), 5);
    });

    it("should find a field when the name is of dot notation through onto a second level", function () {
        const obj = {
            a: {
                "b.c": 5
            }
        };
        assert.equal(dotfind("a.b.c", obj), 5);
    });

    it("should find a field even if the sub field is under a differnet path", function () {
        const obj = {
            a: {
                c : 6
            },
            "a.b": 5
        };
        assert.equal(dotfind("a.b", obj), 5);
    });
});
