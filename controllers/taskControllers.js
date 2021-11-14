const getAllTasks = (req, res) => {
	res.send('all items')
}

const getTask = (req, res) => {
	res.json({ id: req.params.id })
}

const createTask = (req, res) => {
	res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
	res.json({ id: req.params.id })
}

const deleteTask = (req, res) => {
	res.json({ id: req.params.id })
}

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
}
