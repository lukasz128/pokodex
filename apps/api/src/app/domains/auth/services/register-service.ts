import { db } from '../../../../main';
import { User } from '../models/User';

export type UserRequest = Omit<User, 'id'>;

export class RegisterService {
  async register(credentials: UserRequest) {
    const userRepo = db.getRepository(User);
    const a = await userRepo.insert(credentials);
    console.log({ a });
    return a;
  }
}
