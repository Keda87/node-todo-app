import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Task = new Schema({
  name: {
    type: String,
    required: 'Name name is required'
  },
  is_finished: {
    type: Boolean,
    default: false,
  },
})

export default Task
