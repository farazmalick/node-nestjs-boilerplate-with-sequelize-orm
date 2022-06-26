import Brand from './brands.entity';
import { TABLE } from '@core/constants';
export const brandsProviders = [{
  provide: TABLE.BRAND,
  useValue: Brand,
}];
