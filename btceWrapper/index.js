const Order = require('./Order');

module.exports = (apiKey, apiSecret) => Object.assign( //TODO object spread polyfill
	{},
	Order(apiKey, apiSecret)
);
