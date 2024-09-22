import { useState, useEffect } from 'preact/hooks';
import { route } from 'preact-router';
//import './editar-tarea.css'; // Si deseas estilos personalizados

interface EditarTareaProps {
  id: string; // Asumimos que se pasa el ID de la tarea como prop
}

export function EditarTarea({ id }: EditarTareaProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Aquí podrías obtener los datos de la tarea con el ID proporcionado
    // Por simplicidad, usamos valores predeterminados
    const fetchData = async () => {
      // Simulamos una llamada a una API para obtener la tarea
      const task = { name: 'Tarea editada', description: 'Descripción editada' }; // Ejemplo
      setName(task.name);
      setDescription(task.description);
    };

    fetchData();
  }, [id]);

  const handleSave = (e: Event) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para guardar los cambios de la tarea
    console.log('Guardar tarea editada:', { id, name, description });

    // Redirige a la página de bienvenida
    route('/bienvenido');
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
