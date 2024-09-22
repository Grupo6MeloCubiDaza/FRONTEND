import { useState } from 'preact/hooks';
import { route } from 'preact-router';
//import './login.css'; // Si deseas estilos personalizados

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Aquí puedes manejar el inicio de sesión, por ejemplo, enviarlo a un servidor
    console.log('Inicio de sesión:', { email, password });
    route('/bienvenido'); 
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
