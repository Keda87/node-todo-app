import { 
   addNewTask,
   getTasks,
   getTask,
   updateTask,
   deleteTask,
 } from '../controllers/task'

const routes = (app) => {
  app.route('/tasks')
     .get(getTasks)
     .post(addNewTask)

  app.route('/tasks/:id')
     .get(getTask)
     .put(updateTask)
     .delete(deleteTask)
}

export default routes