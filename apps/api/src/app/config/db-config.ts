import 'reflect-metadata';
import { TypeormConnector } from './typeorm-connector';

export interface DBConnector<TInstance> {
  initialize: () => Promise<TInstance>;
}

export type DBConfig = {
  host: string;
  port?: number | undefined;
  username: string;
  password: string;
  name: string;
};

export const initDatabase = async () => {
  try {
    return await new TypeormConnector().initialize();
  } catch (error) {
    console.error({ dbError: error });
  }
};
