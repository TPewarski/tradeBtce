const {makeRequest} = require('./helpers');

/**
* Retrieves the active orders for a given pair
* @param {pair} is the currencyy pair to retrieve
* @param {depth} is the amount orders returned on each side of the order book
*/
const getOrderBook = (pair, depth) => makeRequest({
	timeout: 5000,
	strictSSL: true,
	qs: {limit: depth},
	useQueryString: true,
	url: `https://btc-e.com/api/3/depth/${pair}`,
	method: 'GET'
});

module.exports = getOrderBook
