import { TaskServiceClient } from './proto/TaskServiceClientPb'; // Importa tu cliente gRPC
import { TaskRequest, TaskResponse, Empty } from './proto/task_pb'; // Importa los mensajes correspondientes

export class TaskService {
  private client: TaskServiceClient;

  constructor() {
    this.client = new TaskServiceClient('http://localhost:8080'); // Cambia la URL si es necesario
  }

  async fetchAllTasks() {
    return new Promise((resolve, reject) => {
      const request = new Empty();

      this.client.listTasks(request, {}, (err, response) => {
        if (err) {
          console.error('Error obteniendo las tareas:', err);
          reject(err);
        } else {
          const tasks = response.getTasksList().map(task => ({
            id: task.getId(),
            name: task.getTitle(),
            description: task.getDescription(),
          }));
          resolve(tasks);
        }
      });
    });
  }

  async createTask(task: { name: string; description: string }) {
    return new Promise((resolve, reject) => {
      const request = new TaskRequest();
      request.setTitle(task.name);
      request.setDescription(task.description);

      this.client.createTask(request, {}, (err, response: TaskResponse) => {
        if (err) {
          console.error('Error creando tarea:', err);
          reject(err);
        } else {
          resolve(response.getSuccess());
        }
      });
    });
  }

  // Método para actualizar una tarea
  async updateTask(id: number, task: { name: string; description: string }) {
    return new Promise((resolve, reject) => {
      const request = new TaskRequest();
      request.setId(id);
      request.setTitle(task.name);
      request.setDescription(task.description);

      this.client.updateTask(request, {}, (err, response: TaskResponse) => {
        if (err) {
          console.error(`Error actualizando tarea ${id}:`, err);
          reject(err);
        } else {
          resolve(response.getSuccess());
        }
      });
    });
  }

  // Método para eliminar una tarea
  async deleteTask(id: number) {
    return new Promise((resolve, reject) => {
      const request = new TaskRequest();
      request.setId(id);

      this.client.deleteTask(request, {}, (err, response: TaskResponse) => {
        if (err) {
          console.error(`Error eliminando tarea ${id}:`, err);
          reject(err);
        } else {
          resolve(response.getSuccess());
        }
      });
    });
  }
}
