import { 
  addNewTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
 } from '../controllers/task'

const routes = (app) => {
  app.get('/', (req, res) => res.send({message: 'Todo API'}))

  app.route('/tasks')
     .get(getTasks)
     .post(addNewTask)

  app.route('/tasks/:id')
     .get(getTask)
     .put(updateTask)
     .delete(deleteTask)
}

export default routes