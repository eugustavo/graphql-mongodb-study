import Task from '../../../models/Task';
import User from '../../../models/User';

export default {
  Task: {
    user: (task) => User.findById(task.user)
  },

  Query: {
    tasks: () => Task.find(),
    task: (_, { id }) => Task.findById(id)
  },

  Mutation: {
    createTask: (_, { data }) => Task.create(data),
    updateTask: (_, { id, data }) => Task.findByIdAndUpdate(id, data, { new: true }),
    deleteTask: async (_, { id }) => !!(await Task.findByIdAndDelete(id))
  }
}