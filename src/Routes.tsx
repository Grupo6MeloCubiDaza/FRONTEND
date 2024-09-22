import { Router, Route } from 'preact-router';
import { App } from './app.tsx';
import { Register } from './components/register.tsx';
import { Login } from './components/login.tsx';
import { Bienvenido } from './components/home.tsx';
import { AgregarTarea } from './components/agregar_tarea.tsx';
import { EditarTarea } from './components/editar.tsx';
import { EditarUsuario } from './components/editar_usuario.tsx';

export function Routes() {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/bienvenido" component={Bienvenido} />
      <Route path="/agregar-tarea" component={AgregarTarea} />
      <Route path="/editar-tarea/:id" component={EditarTarea} />
      <Route path="/editar-usuario" component={EditarUsuario} />
    </Router>
  );
}


