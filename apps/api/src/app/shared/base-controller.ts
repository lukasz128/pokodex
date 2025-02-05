import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';
export type RouterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

type RouteDefinition = {
  method: HttpMethod;
  path: string;
  handler: string;
  middlewares: RouterMiddleware[];
};

interface ControllerClass {
  new (): any;
  routes: RouteDefinition[];
}

function createRouteDecorator(method: HttpMethod) {
  return (path: string, middlewares: RouterMiddleware[] = []) =>
    (target: InstanceType<ControllerClass>, propertyKey: string | symbol) => {
      if (!target.constructor.routes) {
        target.constructor.routes = [];
      }

      target.constructor.routes.push({
        method,
        path,
        handler: propertyKey as string,
        middlewares,
      });
    };
}

const Get = createRouteDecorator('get');
const Post = createRouteDecorator('post');
const Put = createRouteDecorator('put');
const Delete = createRouteDecorator('delete');

class BaseController {
  static routes: RouteDefinition[];

  static registerRoutes(
    controller: InstanceType<ControllerClass>,
    app: Application,
  ) {
    const router: Router = express.Router();

    if (controller.constructor.routes) {
      controller.constructor.routes.forEach((route: RouteDefinition) => {
        router[route.method](
          route.path,
          ...route.middlewares,
          controller[route.handler].bind(controller),
        );
      });
    }

    app.use(router);
  }
}

export { BaseController, Delete, Get, Post, Put };
