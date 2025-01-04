import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../../openapiv3.json';
import { ExpressType } from '../../main';
import { Docs } from './docs-config';

export class SwaggerUiExpressDocs implements Docs {
  initialize(router: ExpressType) {
    router.use('/api/api-docs', swaggerUi.serve);
    router.use(
      '/api/api-docs/swagger.json',
      (_, res) => res.json(swaggerDocument) as any,
    );
    router.get('/api/api-docs', swaggerUi.setup(swaggerDocument));
  }
}
