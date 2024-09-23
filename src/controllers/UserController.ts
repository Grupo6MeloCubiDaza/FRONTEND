import { UserService } from '../services/UserService';

export class UserController {
  private userService = new UserService();

  async loginUser(user: { email: string, password: string }) {
    return await this.userService.login(user);
  }

  async registerUser(user: { name: string, email: string, password: string }) {
    return await this.userService.register(user);
  }
}

