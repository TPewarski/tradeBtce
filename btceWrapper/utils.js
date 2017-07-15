let _nonce = 0;

const generateNonce = () => {
	// incrementing the module's _nonce allows mulltiple reqs a second
	return Math.round(Date.now() / 1000) + _nonce++;
};

module.exports = {
	generateNonce
}
