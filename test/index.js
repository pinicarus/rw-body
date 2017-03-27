"use strict";

const assert = require("assert");

const index = requireSrc("index");

describe("API", function () {
	it("should conform", function () {
		assert(index.Body instanceof Function);
	});

	it("should be immutable", function () {
		assert.throws(() => { index.x = true; }, TypeError);
	});
});
