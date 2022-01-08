const mongoose = require('mongoose')

const connectDb = () => {
	mongoose.connect(process.env.MONGODB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}

module.exports = connectDb
