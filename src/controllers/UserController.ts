import { UserService } from '../services/UserService';

export class UserController {
  private userService = new UserService();

  editUser(user: { name: string, email: string, password: string }) {
    return this.userService.updateUser(user);
  }

  deleteUser() {
    return this.userService.deleteAccount();
  }
}
