import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import { UserController } from '../controllers/UserController';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userController = new UserController();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const success = await userController.loginUser({ email, password });
      if (success) {
        route('/bienvenido');
      } else {
        alert('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
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

