import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { BaseController, Post } from '../../../shared/base-controller';
import { RegisterService } from '../services/register-service';

export class RegisterController extends BaseController {
  private static _registerSchema = {
    body: yup.object({
      username: yup.string().required(),
      password: yup.string().required(),
      mail: yup.string().email().required(),
    }),
    response: yup.object({
      accessToken: yup.string(),
      refreshToken: yup.string(),
    }),
  };

  @Post('/register')
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const userEntity = await new RegisterService().register(req.body);
      res.status(200).send(userEntity);
    } catch (err) {
      next(err);
    }
  }
}

export const registerController = new RegisterController();
