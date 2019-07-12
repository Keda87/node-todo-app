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

export function getDownload(req, res) {
  Download.findById(req.params.id, (error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}

export function updateDownload(req, res) {
  Download.findByIdAndUpdate({ _id: req.params.id }, res.Body, { new: true }, (error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}

export function deleteDownload(req, res) {
  Download.remove({ _id: req.params.id }, (error, download) => {
    if (error) { res.json(error) }
    res.json(download)
  })
}