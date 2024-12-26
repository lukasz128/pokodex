import jwt, { Secret } from 'jsonwebtoken';
import { db } from '../../../../main';
import { User } from '../models/User';

type Credentials = {
  username: string;
  password: string;
};

export class LoginService {
  async login(credentials: Credentials) {
    const userId = await this._checkIfUserExists(credentials);

    if (userId === null) {
      throw new Error('Invalid credentials');
    }

    const accessToken = jwt.sign(
      { userId },
      process.env.TOKEN_SECRET as Secret,
      { expireIn: 86400 },
    );

    const refreshToken = jwt.sign(
      { userId },
      process.env.REFRESH_TOKEN_SECRET as Secret,
      { expiresIn: 525600 },
    );

    return { accessToken, refreshToken };
  }

  private async _checkIfUserExists(credentials: Credentials) {
    const manager = (await db).manager;
    const user = await manager.findOneBy(User, {
      userName: credentials.username,
    });

    return user.password === credentials.password ? user.id : null;
  }
}
