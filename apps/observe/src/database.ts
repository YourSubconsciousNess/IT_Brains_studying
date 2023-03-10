import { DatabaseConfig } from './config/database.config';
import { getConnectionManager } from 'typeorm';

export const initDatabaseConnection = async () => {
  const connectionManager = getConnectionManager();
  const connection = connectionManager.create(DatabaseConfig);
  await connection.connect();
};
