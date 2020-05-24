const express = require('express')
const router = express.Router()
const Tasks = require('../models/task')

/*
  GET  ALL TASKS
 */
router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.find()
        res.json(tasks)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

/*
  GET TASK
 */
router.get('/:id', getTask, (req, res) => {
    res.json(res.task)
})

/*
  CREATE TASK
 */
router.post('/', async (req, res) => {
    const task = new Tasks({
        description: req.body.description,
        date: req.body.date,
        progress: req.body.progress,
    })
    try {
        const newTask = await task.save()
        res.status(201).json(task)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

/*
  DELETE ROUTE
 */
router.delete('/:id', getTask, async (req, res) => {
    try {
        await res.task.remove()
        res.json({message: 'Deleted Task'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getTask(req, res, next) {
    let task
    try {
        task = await Tasks.findById(req.params.id)
        if (task == null) {
            return res.status(404).json({message: 'Cannot find task'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.task = task
    next()
}

module.exports = router
