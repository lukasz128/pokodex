import { db } from '../../../../main';
import { User } from '../models/User';

export type UserRequest = Omit<User, 'id'>;

export class RegisterService {
  async register(credentials: UserRequest) {
    const userRepo = db.getRepository(User);
    const newUser = await userRepo.insert(credentials);

    return newUser;
  }
}
