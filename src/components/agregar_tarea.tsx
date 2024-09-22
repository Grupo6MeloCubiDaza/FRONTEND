import { useState } from 'preact/hooks';
import { route } from 'preact-router';
//import './agregar-tarea.css'; // Si deseas estilos personalizados

export function AgregarTarea() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = (e: Event) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para guardar la nueva tarea
    console.log('Guardar tarea:', { name, description });

    // Redirige a la página de bienvenida
    route('/bienvenido');
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
