// check if app is running in dev or production mode
// and supply keys from correct source
if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod')
} else {
	module.exports = require('./dev')
}
