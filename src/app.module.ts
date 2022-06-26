import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@core/core.module';
import { BrandModule } from '@modules/brands/brands.module'

@Module({
  imports: [CoreModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
