import { TaskServiceClient } from '../proto/TaskServiceClientPb'; // Ruta al archivo generado
import { TaskRequest } from '../proto/task_pb'; // Mensajes

import { Empty } from '../proto/task_pb'; // Si tienes un mensaje vacío como el definido en tu archivo .proto


const taskService = new TaskServiceClient('http://localhost:8000'); // URL del backend gRPC

export const createTask = (title: string, description: string) => {
  const request = new TaskRequest();
  request.setTitle(title);
  request.setDescription(description);

  taskService.createTask(request, {}, (err, response) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Task created successfully', response);
    }
  });
  
};

const listTasks = () => {
    const request = new Empty();

    taskService.listTasks(request, {}, (err, response) => {
        if (err) {
            console.error('Error listing tasks:', err);
        } else {
            console.log('Tasks list:', response.getTasksList());
        }
    });
};