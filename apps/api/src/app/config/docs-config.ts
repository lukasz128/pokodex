import { Router } from 'express';
import { ExpressType } from '../../main';
import { SwaggerUiExpressDocs } from './swagger-ui-express-docs';

export interface Docs {
  initialize: (router: Router) => void;
}

export const initDocs = (router: ExpressType) => {
  try {
    new SwaggerUiExpressDocs().initialize(router);
  } catch (error) {
    console.error({ docsError: error });
  }
};
