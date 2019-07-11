import mongoose from 'mongoose'
import downloadSchema from '../models/downloadModel'

const Download = mongoose.model('Download', downloadSchema)

export function addNewDownload(req, res) {
  let newDownload = new Download(req.Body)
  newDownload.save((error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}

export function getDownloads(req, res) {
  Download.find({}, (error, downloads) => {
    if (error) { res.json(error) }
    res.json(downloads)
  })
}
