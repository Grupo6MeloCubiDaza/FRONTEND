import { Link } from 'preact-router/match';
import './app.css';

export function App() {
  

  return (
    <>
      <h1>Tareas.com</h1>
      <div>
        <Link href="/register">
          <button>Registro</button>
        </Link>
        <Link href="/login">
          <button>Inicio de sesión</button>
        </Link>
      </div>
    </>
  );
}

