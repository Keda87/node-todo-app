import { addNewDownload, getDownloads }from '../controllers/downloadController'

const routes = (app) => {
  app.route('/download')
     .get(getDownloads)
     .post(addNewDownload)
}

export default routes