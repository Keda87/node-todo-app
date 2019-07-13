import mongoose from 'mongoose'
import Task from '../models/task'

const TodoTask = mongoose.model('Task', Task)

export function addNewTask(req, res) {
  let newTask = new TodoTask(req.body)
  newTask.save((error, task) => {
    if (error) { res.json(error) }
    res.json(task)
  })
}

export function getTasks(req, res) {
  TodoTask.find({}, (error, tasks) => {
    if (error) { res.json(error) }
    res.json(tasks)
  })
}

export function getTask(req, res) {
  TodoTask.findById(req.params.id, (error, task) => {
    if (error) { res.json(error) }
    res.json(task)
  })
}

export function updateTask(req, res) {
  TodoTask.findByIdAndUpdate({ _id: req.params.id }, res.Body, { new: true }, (error, task) => {
    if (error) { res.json(error) }
    res.json(task)
  })
}

export function deleteTask(req, res) {
  TodoTask.remove({ _id: req.params.id }, (error, task) => {
    if (error) { res.json(error) }
    res.json(task)
  })
}