import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import { TaskController } from '../controllers/TaskController';

export function Bienvenido() {
  const [tasks, setTasks] = useState<{ id: number; name: string; description: string }[]>([]);
  const taskController = new TaskController();

  useEffect(() => {
    // Llamada al controlador para obtener las tareas
    const fetchTasks = async () => {
      const tasksFromServer = await taskController.getAllTasks();
      setTasks(tasksFromServer);
    };
    fetchTasks();
  }, []);

  const handleEdit = (id: number) => {
    route(`/editar-tarea/${id}`);
  };

  const handleDelete = async (id: number) => {
    await taskController.deleteTask(id); // Llama al controlador para eliminar
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAdd = () => {
    route('/agregar-tarea');
  };

  const handleEditUser = () => {
    route('/editar-usuario');
  };

  const handleDeleteAccount = () => {
    console.log('Eliminar cuenta');
    route('/');
  };

  return (
    <div className="bienvenido-container">
      <h1>
        BIENVENIDO
        <button onClick={handleEditUser} className="edit-user-button">Editar Usuario</button>
        <button onClick={handleDeleteAccount} className="delete-account-button">Eliminar Cuenta</button>
      </h1>

      <table className="tasks-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>
                <button onClick={() => handleEdit(task.id)}>Editar</button>
                <button onClick={() => handleDelete(task.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-task-button" onClick={handleAdd}>Agregar Tarea</button>
    </div>
  );
}



