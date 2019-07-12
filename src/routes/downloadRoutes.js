import { 
    addNewDownload, 
    getDownloads,
    getDownload,
    updateDownload,
    deleteDownload,
 }from '../controllers/downloadController'

const routes = (app) => {
  app.route('/download')
     .get(getDownloads)
     .post(addNewDownload)

  app.route('/download/:id')
     .get(getDownload)
     .put(updateDownload)
     .delete(deleteDownload)
}

export default routes