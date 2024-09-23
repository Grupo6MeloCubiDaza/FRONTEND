import { TaskService } from '../services/TaskService';

export class TaskController {
  private taskService = new TaskService();

  // Método para obtener todas las tareas
  async getAllTasks() {
    try {
      const tasks = await this.taskService.fetchAllTasks();
      return tasks; // Devuelve la lista de tareas al componente que lo llame
    } catch (error) {
      console.error('Error obteniendo las tareas:', error);
      return [];
    }
  }

  // Método para agregar una nueva tarea
  async addTask(task: { name: string; description: string }) {
    try {
      const success = await this.taskService.createTask(task);
      return success; // Devuelve el estado del éxito (true/false)
    } catch (error) {
      console.error('Error agregando tarea:', error);
      return false;
    }
  }

  // Método para editar una tarea existente
  async editTask(id: number, task: { name: string; description: string }) {
    try {
      const success = await this.taskService.updateTask(id, task);
      return success; // Devuelve el estado del éxito (true/false)
    } catch (error) {
      console.error('Error actualizando tarea:', error);
      return false;
    }
  }

  // Método para eliminar una tarea
  async deleteTask(id: number) {
    try {
      const success = await this.taskService.deleteTask(id);
      return success; // Devuelve el estado del éxito (true/false)
    } catch (error) {
      console.error('Error eliminando tarea:', error);
      return false;
    }
  }
}

