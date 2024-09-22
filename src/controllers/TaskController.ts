import { TaskService } from '../services/TaskService';

export class TaskController {
  private taskService = new TaskService();

  getAllTasks() {
    return this.taskService.fetchAllTasks();
  }

  addTask(task: { name: string, description: string }) {
    return this.taskService.createTask(task);
  }

  editTask(id: number, task: { name: string, description: string }) {
    return this.taskService.updateTask(id, task);
  }

  deleteTask(id: number) {
    return this.taskService.deleteTask(id);
  }
}
