const {apiKey, apiSecret} = require('./config.json');
const btce = require('./btceWrapper')(apiKey, apiSecret);

const params = {
	method: "Trade",
	pair: "btc_usd",
	type: "sell",
	rate: 3000.999,
	amount: 0.1983138
};

const currentOrders = {};

btce.placeOrder(params)
	.then(tradeResp => {
		const {return: {order_id}} = tradeResp;
		console.log('Your Order', tradeResp.return);

		currentOrders[order_id] = params;
		return btce.cancelOrder(order_id)
			.then(cancelResp => console.log('Order Cancelled', cancelResp.return));
	})
	.catch(err => console.log('ERR', err));



