import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import * as yup from 'yup';
import { createValidationMiddleware } from '../middleware/validation';

type HttpMethod = 'get' | 'post' | 'put' | 'delete';
export type RouterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

export type ValidationSchema = {
  query?: yup.AnySchema;
  body?: yup.AnySchema;
  response?: yup.AnySchema;
};

type RouteDefinition = {
  method: HttpMethod;
  path: string;
  handler: string;
  middlewares: RouterMiddleware[];
  validationSchema?: ValidationSchema;
};

type RouteConfig = Pick<RouteDefinition, 'middlewares' | 'validationSchema'>;

const routeConfigDefaultValue: RouteConfig = {
  middlewares: [],
  validationSchema: undefined,
} as const;

interface ControllerClass {
  new (): any;
  routes: RouteDefinition[];
}

function createRouteDecorator(method: HttpMethod) {
  return (
      path: string,
      config: Partial<RouteConfig> = routeConfigDefaultValue,
    ) =>
    (target: InstanceType<ControllerClass>, propertyKey: string | symbol) => {
      const { middlewares, validationSchema } = {
        ...routeConfigDefaultValue,
        ...config,
      };

      if (!target.constructor.routes) {
        target.constructor.routes = [];
      }

      if (validationSchema) {
        middlewares.unshift(createValidationMiddleware(validationSchema));
      }

      target.constructor.routes.push({
        method,
        path,
        handler: propertyKey as string,
        middlewares,
        validationSchema,
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
