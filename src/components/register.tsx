import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import { UserController } from '../controllers/UserController';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userController = new UserController();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const success = await userController.registerUser({ name, email, password });
      if (success) {
        route('/bienvenido');
      } else {
        alert('Registro fallido');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
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
