export class TaskService {
    fetchAllTasks() {
      // Llamada gRPC para obtener todas las tareas
      console.log('Llamada gRPC para obtener tareas');
      return [
        { id: 1, name: 'Tarea 1', description: 'Descripción de tarea 1' },
        { id: 2, name: 'Tarea 2', description: 'Descripción de tarea 2' },
      ];
    }
  
    createTask(task: { name: string, description: string }) {
      // Llamada gRPC para crear una nueva tarea
      console.log('Llamada gRPC para crear tarea:', task);
      return true;
    }
  
    updateTask(id: number, task: { name: string, description: string }) {
      // Llamada gRPC para actualizar tarea
      console.log(`Llamada gRPC para actualizar tarea ${id}:`, task);
      return true;
    }
  
    deleteTask(id: number) {
      // Llamada gRPC para eliminar una tarea
      console.log(`Llamada gRPC para eliminar tarea ${id}`);
      return true;
    }
  }
  