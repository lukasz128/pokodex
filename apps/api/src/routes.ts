import { registerLoginController } from './app/domains/auth';
import { ExpressType } from './main';

export const registerRoutes = (app: ExpressType) => {
  registerLoginController(app);
};
