const express = require('express')
require('dotenv').config()
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

// Middlewares
app.use(express.json())
app.use(express.static('./public'))

// Routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

const start = async () => {
	const port = process.env.PORT || 5000
	
	try {
		await connectDb()
		app.listen(port, console.log(`Server is listening on port ${port}...`))
	} catch (err) {
		console.log(err)
	}
}

start()
