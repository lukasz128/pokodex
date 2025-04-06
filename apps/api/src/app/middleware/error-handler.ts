import { NextFunction, Request, Response } from 'express';

export const INTERNAL_SERVER_ERROR = {
  status: 500,
  message: 'Internal Server Error',
} as const;

export class CommonError extends Error {
  readonly status: number | undefined;

  constructor(message: string, status?: number) {
    super(message);

    this.status = status;
  }
}

export const errorHandler = (
  err: CommonError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack, err.message);

  const statusCode = err.status || INTERNAL_SERVER_ERROR.status;

  res.status(statusCode).json({
    success: false,
    message: err.message || INTERNAL_SERVER_ERROR.message,
  });
};
