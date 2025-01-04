import { authenticate } from '../../../middleware/authentication';
import { BaseController, Get } from '../../../shared/base-controller';
import { LoginService } from '../services/login-service';

class LoginController extends BaseController {
  @Get('/login', [authenticate])
  async login(req, res, next) {
    try {
      const userEntity = await new LoginService().login(req.body);
      res.status(200).send(userEntity);
    } catch (err) {
      next(err);
    }
  }
}

export const loginController = new LoginController();
