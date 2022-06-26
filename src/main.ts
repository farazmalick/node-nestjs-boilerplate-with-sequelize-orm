import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter, ValidationExceptionFilter } from '@core/filters';
import { ValidationException } from '@core/exceptions';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from '@core/providers/swagger.provider';


async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  //global settings
  app.setGlobalPrefix(config.get('API_URL_PREFIX'))
  app.useGlobalFilters(new HttpExceptionFilter(), new ValidationExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (errors: ValidationError[] | any[]) => new ValidationException(errors),
    }),
  );

  //Swagger Integration
  swaggerSetup(app, config)

  await app.listen(port, () => {
    console.log(`server started on port ${port}`)
  });
}
bootstrap();
