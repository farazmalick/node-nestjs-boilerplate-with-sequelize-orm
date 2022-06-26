import { Injectable, Inject, Logger } from '@nestjs/common';
import { TABLE } from '@core/constants';
import Brand from './brands.entity';
import {InjectModel} from "@nestjs/sequelize";
@Injectable()
export class BrandsService {

  private logger: Logger = new Logger(BrandsService.name);

  constructor(@Inject(TABLE.BRAND) private readonly brandRepository: typeof Brand) {}
  // async findById(): Promise<Brand> {
  //   return await this.brandRepository.findById('12345')
  // }

  findById(): any {
    // console.log("this.brandRepository", this.brandRepository.findOne({where: {
    //   store_id: 1234
    //   }}))
    return this.brandRepository.findOne({where: {
        store_id: 1234
      }})
  }

}