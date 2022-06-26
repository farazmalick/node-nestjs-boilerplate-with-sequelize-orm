import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';

import { SEQUELIZE } from '@core/constants';
import { configuration } from '@core/config/configuration';
import * as databaseConfig  from './database.config';
console.log(databaseConfig[configuration().ENVIRONMENT])
export const databaseProviders = [{
  provide: SEQUELIZE,
  useFactory: async () => {
    const environment = configuration().ENVIRONMENT;
    const sequelize = new Sequelize(databaseConfig[environment]);
    console.log(join(__dirname, '../../', '/modules/**/*.entity.js'))
    sequelize.addModels([join(__dirname, '../../', '/modules/**/*.entity.js')]);
    return sequelize;
  },
}];