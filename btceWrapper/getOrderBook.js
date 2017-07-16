const {makeRequest} = require('./helpers');

const getOrderBook = (pair, limit) => makeRequest({
	timeout: 5000,
	strictSSL: true,
	qs: {limit},
	useQueryString: true,
	url: `https://btc-e.com/api/3/depth/${pair}`,
	method: 'GET'
});

module.exports = getOrderBook
