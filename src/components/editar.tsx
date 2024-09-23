import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
import { TaskController } from '../controllers/TaskController';

interface EditarTareaProps {
  id: string; // Asumimos que se pasa el ID de la tarea como prop
}

export function EditarTarea({ id }: EditarTareaProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const taskController = new TaskController();

  useEffect(() => {
    // Aquí obtenemos los datos de la tarea con el ID proporcionado usando el controlador
    const fetchData = async () => {
      const task = await taskController.getTaskById(Number(id)); // Llama al controlador para obtener la tarea
      if (task) {
        setName(task.name);
        setDescription(task.description);
      }
    };

    fetchData();
  }, [id]);

  const handleSave = async (e: Event) => {
    e.preventDefault();
    // Llamada al controlador para actualizar la tarea
    const success = await taskController.editTask(Number(id), { name, description });
    if (success) {
      // Redirige a la página de bienvenida si se guardan los cambios correctamente
      route('/bienvenido');
    } else {
      console.error('Error al guardar la tarea');
    }
  };

  return (
    <div className="editar-tarea-container">
      <h1>Editar Tarea</h1>
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
