import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { BaseController, Post } from '../../../shared/base-controller';
import { LoginService } from '../services/login-service';

class LoginController extends BaseController {
  private static _loginSchema = {
    body: yup.object({
      username: yup.string().required(),
      password: yup.string().required(),
    }),
    response: yup.object({
      accessToken: yup.string(),
      refreshToken: yup.string(),
    }),
  };

  @Post('/login')
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const userEntity = await new LoginService().login(req.body);
      res.status(200).send(userEntity);
    } catch (err) {
      next(err);
    }
  }
}

export const loginController = new LoginController();
