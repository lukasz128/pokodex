import jwt, { Secret } from 'jsonwebtoken';
import { db } from '../../../../main';
import { CommonError } from '../../../middleware/error-handler';
import { User } from '../models/User';

type Credentials = {
  username: string;
  password: string;
};

export class LoginService {
  async login(credentials: Credentials) {
    const userId = await this._checkIfUserExists(credentials);

    if (userId === null) {
      throw new CommonError('Invalid credentials', 403);
    }

    const accessToken = jwt.sign(
      { userId },
      process.env.TOKEN_SECRET as Secret,
      { expiresIn: 86400 },
    );

    const refreshToken = jwt.sign(
      { userId },
      process.env.REFRESH_TOKEN_SECRET as Secret,
      { expiresIn: 525600 },
    );

    return { accessToken, refreshToken };
  }

  private async _checkIfUserExists(credentials: Credentials) {
    const user = await db.manager.findOneBy(User, {
      userName: credentials.username,
    });

    console.log(await user);

    return user?.password === credentials.password ? user.id : null;
  }
}
