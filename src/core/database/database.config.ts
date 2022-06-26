import { SEQUELIZE_MIGRATION_TABLE_NAME } from '@core/constants';
import { configuration } from '../config/configuration';

const connection = {
  username: configuration().DATABASE.USERNAME,
  password: configuration().DATABASE.PASSWORD,
  database: configuration().DATABASE.NAME,
  host: configuration().DATABASE.HOST,
  port: configuration().DATABASE.PORT,
  dialect: configuration().DATABASE.DIALECT,
  migrationStorageTableName: SEQUELIZE_MIGRATION_TABLE_NAME,
  pool: {
    max: configuration().DATABASE.MAX_POOL,
    min: configuration().DATABASE.MIN_POOL,
    acquire: 30000,
    idle: 10000,
  },
};

if (
  connection.dialect === 'postgres' &&
  process.env.NODE_ENV === 'production'
) {
  connection['dialectOptions'] = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

export const databaseConfig = {
  development: connection,
  test: connection,
  production: connection,
};
module.exports = databaseConfig;
