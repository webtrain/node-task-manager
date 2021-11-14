const express = require('express')
require('dotenv').config()
const app = express()
const tasks = require('./routes/tasks')

// Middlawares
app.use(express.json())

// Routes
app.get('/', (req, res) => {
	res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server is listening on port ${port}...`))
