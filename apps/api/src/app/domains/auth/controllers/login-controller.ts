import { NextFunction, Request, Response } from 'express';
import { BaseController, Post } from '../../../shared/base-controller';
import { LoginService } from '../services/login-service';

class LoginController extends BaseController {
  @Post('/login')
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const userEntity = await new LoginService().login(req.body);
      res.status(200).send(userEntity);
    } catch (err) {
      next(err);
    }
  }
}

export const loginController = new LoginController();
