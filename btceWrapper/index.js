const Order = require('./Order');
const getOrderBook = require('./getOrderBook');

module.exports = (apiKey, apiSecret) => Object.assign( //TODO object spread polyfill
	{},
	Order(apiKey, apiSecret),
	{getOrderBook}
);
