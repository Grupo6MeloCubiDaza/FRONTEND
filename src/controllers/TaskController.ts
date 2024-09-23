import { TaskService } from '../services/TaskService';

export class TaskController {
  private taskService = new TaskService();

  async getAllTasks() {
    return await this.taskService.fetchAllTasks();
  }

  async getTaskById(id: number) {
    return await this.taskService.fetchTaskById(id); // Asegúrate de que `TaskService` tenga este método
  }

  async addTask(task: { name: string; description: string }) {
    return await this.taskService.createTask(task);
  }

  async editTask(id: number, task: { name: string; description: string }) {
    return await this.taskService.updateTask(id, task);
  }

  async deleteTask(id: number) {
    return await this.taskService.deleteTask(id);
  }
}


