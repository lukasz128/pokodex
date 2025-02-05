import { NextFunction, Request, Response } from 'express';
import { BaseController, Post } from '../../../shared/base-controller';
import { RegisterService } from '../services/register-service';

export class RegisterController extends BaseController {
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
