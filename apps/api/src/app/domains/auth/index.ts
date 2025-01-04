import { ExpressType } from '../../../main';
import { BaseController } from '../../shared/base-controller';
import { loginController } from './controllers/login-controller';

const registerLoginController = (app: ExpressType) => {
  BaseController.registerRoutes(loginController, app);
};

export { registerLoginController };
