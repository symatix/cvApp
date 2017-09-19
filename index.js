const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/docs');
require('./models/contact');
require('./models/services');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoUri)

const app = express();
require('./routes/commandRoutes')(app);

// check if dev or production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("/*** SERVER STARTED ***/")
