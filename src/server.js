import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/downloadRoutes'
import bodyParser from 'body-parser'


const app = express()
const PORT = 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://user:password@127.0.0.1:27017/db_name')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.listen(PORT, () =>{
  console.log(`your server is running on ${PORT}`)
})
