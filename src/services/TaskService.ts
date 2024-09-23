import { TaskServiceClient } from '../proto/TaskServiceClientPb'; // Importa tu cliente gRPC
import { Empty, TaskRequest } from '../proto/task_pb'; // Importa los mensajes proto

export class TaskService {
  private client = new TaskServiceClient('http://localhost:8000'); // Configura el cliente

  async fetchAllTasks() {
    const request = new Empty();
    try {
      const response = await this.client.listTasks(request, {});
      return response.getTasksList().map(task => ({
        id: task.getId(),
        name: task.getTitle(),
        description: task.getDescription(),
      }));
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
  }

  async fetchTaskById(id: number) {
    // Aquí haces la llamada gRPC o fetch al backend para obtener la tarea por ID
    const response = await fetch(`/api/tasks/${id}`);
    if (response.ok) {
      return await response.json(); // Suponiendo que el backend retorna JSON
    } else {
      throw new Error('Error al obtener la tarea');
    }
  }

  async createTask(task: { name: string; description: string }) {
    const request = new TaskRequest();
    request.setTitle(task.name);
    request.setDescription(task.description);

    try {
      const response = await this.client.createTask(request, {});
      return response.getSuccess();
    } catch (error) {
      console.error('Error creating task:', error);
      return false;
    }
  }

  async updateTask(id: number, task: { name: string; description: string }) {
    const request = new TaskRequest();
    request.setTitle(task.name);
    request.setDescription(task.description);

    try {
      const response = await this.client.updateTask(request, {});
      return response.getSuccess();
    } catch (error) {
      console.error(`Error updating task ${id}:`, error);
      return false;
    }
  }

  async deleteTask(id: number) {
    const request = new TaskRequest();
    request.setId(id);

    try {
      const response = await this.client.deleteTask(request, {});
      return response.getSuccess();
    } catch (error) {
      console.error(`Error deleting task ${id}:`, error);
      return false;
    }
  }
}

  