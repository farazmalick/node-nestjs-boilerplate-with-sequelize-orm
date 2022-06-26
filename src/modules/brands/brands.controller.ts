import { Body, Controller, Get, Param, ParseIntPipe, Post ,Put, Req ,Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BrandsService } from '@modules/brands/brands.service';
import { TABLE } from '@core/constants';
@ApiTags('Brands')
@Controller('/brands')
export class BrandsController {
  constructor(private readonly brandService: BrandsService) {}

  @Get('/')
  @ApiOperation({
    summary: 'List of brands',
    description: 'A successful request returns a paginated list of brands.'
  })
   list(): any {
    return this.brandService.findById();
  }
}
