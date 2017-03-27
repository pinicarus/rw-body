"use strict";

const assert = require("assert");
const stream = require("stream");

const ravenwood = require("ravenwood");

const {Body} = requireSrc("body");

describe("body", function () {
	it("should conform", function () {
		assert(Body instanceof Function);
		assert(Body("foo", "bar") instanceof Function);
		assert(Body("foo", "bar") instanceof Function);
		assert(new (Body("foo", "bar"))() instanceof ravenwood.Middleware("bar"));
	});

	it("should pump body stream", function () {
		const body    = new stream.PassThrough();
		const payload = Buffer.from("payload", "utf8");

		body.end(payload);
		return new (Body("foo", "bar"))()
			.enter({body})
			.then((di) => {
				assert(di instanceof ravenwood.DI.Value);
				assert.deepEqual(payload, di.value);
			});
	});
});
