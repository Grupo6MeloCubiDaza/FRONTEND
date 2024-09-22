import { useState } from 'preact/hooks';
import { route } from 'preact-router'; 
//import './register.css'; // Si deseas estilos personalizados

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Aquí puedes manejar el registro, por ejemplo, enviarlo a un servidor
    console.log('Registro:', { name, email, password });
    route('/bienvenido');
  };

  return (
    <div className="register-container">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
