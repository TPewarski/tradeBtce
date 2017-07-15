const request = require('request');

const makeTradeHeaders = (apiKey, signature) => ({
	"Content-type": "application/x-www-form-urlencoded",
    "Key": apiKey,
    "Sign": signature
});

const makeRequest = (reqOptions) => {
	return new Promise((resolve, reject) => {
		request(reqOptions, (err, response, body)  => {
			if(err || response.statusCode !== 200) {
			  return reject(new Error(err || response.statusCode));
			}

			let result;
			try {
			  result = JSON.parse(body);
			} catch(error) {
			  return reject(error);
			}

			if(result.error) {
			  return reject(new Error(result.error));
			}

			return resolve(result);
		});
	});
};

module.exports = {
	makeTradeHeaders,
	makeRequest
}