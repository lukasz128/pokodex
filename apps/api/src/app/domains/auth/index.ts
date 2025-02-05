import { ExpressType } from '../../../main';
import { BaseController } from '../../shared/base-controller';
import { loginController } from './controllers/login-controller';
import { registerController } from './controllers/register-controller';

const authController = (app: ExpressType) => {
  BaseController.registerRoutes(loginController, app);
  BaseController.registerRoutes(registerController, app);
};

export { authController };
