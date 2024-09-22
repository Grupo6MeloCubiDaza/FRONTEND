export class UserService {
    updateUser(user: { name: string, email: string, password: string }) {
      // Aquí va la llamada gRPC al backend para editar el usuario
      console.log('Llamada gRPC para editar usuario:', user);
      return true; // Simulación de respuesta exitosa
    }
  
    deleteAccount() {
      // Aquí va la llamada gRPC al backend para eliminar la cuenta
      console.log('Llamada gRPC para eliminar cuenta');
      return true; // Simulación de respuesta exitosa
    }
  }
  