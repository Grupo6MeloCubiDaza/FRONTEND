import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import { TaskController } from '../controllers/TaskController'; // Importa el controlador

export function AgregarTarea() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const taskController = new TaskController();

  const handleSave = async (e: Event) => {
    e.preventDefault();
    // Llamada al controlador para agregar una nueva tarea
    const success = await taskController.addTask({ name, description });
    if (success) {
      // Redirige a la página de bienvenida si se guarda correctamente
      route('/bienvenido');
    } else {
      console.error('Error al agregar la tarea');
    }
  };

  return (
    <div className="agregar-tarea-container">
      <h1>Agregar Tarea</h1>
      <form onSubmit={handleSave}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={description}
            onInput={(e) => setDescription((e.target as HTMLTextAreaElement).value)}
            required
          ></textarea>
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

