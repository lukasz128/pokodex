import { LoginService } from '../services/login-service';

export class LoginController {
  async login(req, res, next) {
    try {
      const userEntity = await new LoginService().login(req.body);
      res.status(200).send(userEntity);
    } catch (err) {
      next(err);
    }
  }
}
