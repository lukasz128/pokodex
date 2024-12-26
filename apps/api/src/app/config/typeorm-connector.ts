import { DataSource } from 'typeorm';
import { User } from '../domains/auth/models/User';
import { DBConnector } from './db-config';

export class TypeormConnector implements DBConnector<DataSource> {
  async initialize() {
    const { dbHost, dbPort, dbUsername, dbPassword, dbName } = process.env;
    if (this._areInvalidEnvVars()) {
      throw new Error('Invalid environment variables');
    }

    const AppDataSource = new DataSource({
      type: 'mysql',
      host: dbHost,
      port: dbPort ? Number.parseInt(dbPort) : undefined,
      username: dbUsername,
      password: dbPassword,
      database: dbName,
      synchronize: true,
      logging: false,
      entities: [User],
      migrations: [],
      subscribers: [],
    });

    return await AppDataSource.initialize();
  }

  private _areInvalidEnvVars() {
    const { dbHost, dbUsername, dbPassword, dbName } = process.env;
    return !dbHost || !dbUsername || !dbPassword || !dbName;
  }
}
