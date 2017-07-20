
const {stringify} = require('querystring');
const {createHmac} = require('crypto');
const {generateNonce} = require('./utils');
const {makeTradeHeaders, makeRequest} = require('./helpers');

//todo assert method? validate shit?
const placeOrder = (params, apiKey, apiSecret) => {
	const paramsWithNonce = Object.assign({nonce: generateNonce()}, params); //order matters nonce first?
	const hmac = createHmac('sha512', apiSecret);
	const urlParams = stringify(paramsWithNonce);
	const signature = hmac.update(new Buffer(urlParams)).digest('hex').toString();
	const headers = makeTradeHeaders(apiKey, signature);

	const reqOptions = {
		headers,
		timeout: 5000,
		strictSSL: true,
		form: urlParams,
		url: 'https://btc-e.com/tapi',
		method: "POST"
	};

	return makeRequest(reqOptions);

}

module.exports = (apiKey, apiSecret) => ({
	placeOrder: (params) => placeOrder(params, apiKey, apiSecret),
	cancelOrder: (orderID) => placeOrder({
		method: 'CancelOrder',
		order_id: orderID
	}, apiKey, apiSecret),
	getInfo: () => placeOrder({
		method: 'getInfo'
	}, apiKey, apiSecret)
});