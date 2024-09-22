import { useState } from 'preact/hooks';
import { route } from 'preact-router'; // Importa la función de redirección
//import './bienvenido.css';

export function Bienvenido() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Tarea 1', description: 'Descripción de tarea 1' },
    { id: 2, name: 'Tarea 2', description: 'Descripción de tarea 2' },
  ]);

  const handleEdit = (id: number) => {
    route(`/editar-tarea/${id}`);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    console.log('Borrar tarea con ID:', id);
  };

  const handleAdd = () => {
    route('/agregar-tarea');
  };

  const handleEditUser = () => {
    route('/editar-usuario');
  };

  const handleDeleteAccount = () => {
    // Aquí puedes agregar la lógica para eliminar la cuenta
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


