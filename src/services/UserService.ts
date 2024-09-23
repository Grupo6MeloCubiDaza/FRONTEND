import { grpc } from '@improbable-eng/grpc-web';
import { UserRequest, UserResponse } from './proto/user_pb';
import { UserServiceClient } from './proto/UserServiceClientPb';

export class UserService {
  private client = new UserServiceClient('http://localhost:8000');

  async login(user: { email: string, password: string }) {
    const request = new UserRequest();
    request.setEmail(user.email);
    request.setPassword(user.password);

    return new Promise((resolve, reject) => {
      this.client.loginUser(request, {}, (err, response: UserResponse) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.getSuccess());
        }
      });
    });
  }

  async register(user: { name: string, email: string, password: string }) {
    const request = new UserRequest();
    request.setName(user.name);
    request.setEmail(user.email);
    request.setPassword(user.password);

    return new Promise((resolve, reject) => {
      this.client.registerUser(request, {}, (err, response: UserResponse) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.getSuccess());
        }
      });
    });
  }
}
