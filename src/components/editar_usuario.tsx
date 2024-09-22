import { useState } from 'preact/hooks';
import { route } from 'preact-router';
//import './editar-usuario.css'; // Si deseas estilos personalizados

export function EditarUsuario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = (e: Event) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para guardar los cambios del usuario
    console.log('Guardar usuario:', { name, email, password });

    // Redirige a la página de bienvenida
    route('/bienvenido');
  };

  return (
    <div className="editar-usuario-container">
      <h1>Editar Usuario</h1>
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
          Correo:
          <input
            type="email"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            required
          />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
