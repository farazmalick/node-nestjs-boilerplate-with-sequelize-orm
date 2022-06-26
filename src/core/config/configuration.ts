import * as dotenv from 'dotenv';
dotenv.config();

export const configuration = (): any => {
  return {
    API_URL_PREFIX: 'api/v1',
    ENVIRONMENT: process.env.NODE_ENV,
    HOSTNAME: process.env.ENV_HOSTNAME,
    DATABASE: {
      USERNAME: process.env.ENV_DB_USERNAME,
      PASSWORD: process.env.ENV_DB_PASSWORD,
      HOST: process.env.ENV_DB_HOST,
      PORT: process.env.ENV_DB_PORT,
      DIALECT: process.env.ENV_DB_DIALECT,
      NAME: process.env.ENV_DB_NAME,
      MAX_POOL: process.env.ENV_DB_MAX_POOL || 20,
      MIN_POOL: process.env.ENV_DB_MIN_POOL || 3,
    },
  }
}