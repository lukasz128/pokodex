import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { RouterMiddleware, ValidationSchema } from '../shared/base-controller';
import { CommonError } from './error-handler';

export function createValidationMiddleware(
  schema: ValidationSchema,
): RouterMiddleware {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      try {
        if (schema.query) {
          req.query = await schema.query.validate(req.query, {
            abortEarly: false,
          });
        }

        if (schema.body) {
          req.body = await schema.body.validate(req.body, {
            abortEarly: false,
          });
        }

        // TODO
        // if (schema.response) {
        //   const originalSend = res.send;
        //   res.send = function (data: any) {
        //     try {
        //       schema.response.validateSync(JSON.parse(data), {
        //         abortEarly: false,
        //       });
        //       return originalSend.call(this, data);
        //     } catch (error) {
        //       throw new CommonError(error.toString(), 500);
        //     }
        //   };
        // }

        next();
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          throw new CommonError(error.errors.toString(), 400);
        }
      }
    } catch (error) {
      next(error);
    }
  };
}
