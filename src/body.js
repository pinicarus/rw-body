"use strict";

const P         = require("bluebird");
const facies    = require("facies");
const ravenwood = require("ravenwood");

/**
 * A factory for a ravenwood middleware to read bodies.
 *
 * @param {String} name - The name to register to body on the DI container with.
 * @param {String} type - The middleware type in the target pipeline.
 *
 * @returns {Function}  - A ravenwood middleware class to read bodies.
 * @throws  {TypeError} - Whenever the name is not a string.
 * @throws  {TypeError} - Whenever the type is not a string.
 */
const Body = function Body(name, type) {
	facies.match(arguments, [
		new facies.TypeDefinition(String),
		new facies.TypeDefinition(String),
	], true);

	return class Body extends ravenwood.Middleware(type) {
		/**
		 * Reads the body of an incoming request.
		 *
		 * @param {ravenwood.Request} request - The incoming request.
		 *
		 * @returns {Promise<ravenwood.DI.Value>} - The body wrapped for DI registering under the given name.
		 */
		enter(request) {
			const body = request.body;

			return new P((resolve, reject) => {
				const chunks = [];
				let   length = 0;

				body.once("error", reject);

				body.on("data", (chunk) => {
					chunks.push(chunk);
					length += chunk.length;
				});

				body.once("end", () => {
					const buffer = Buffer.concat(chunks, length);

					resolve(new ravenwood.DI.Value(name, buffer));
				});
			});
		}
	};
};

module.exports = {Body};
