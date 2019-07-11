import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DownloadSchema = new Schema({
  fileName: {
    type: String,
    required: 'File name is required'
  },
  path: {
    type: String,
    required: 'path is required'
  },
})

export default DownloadSchema
