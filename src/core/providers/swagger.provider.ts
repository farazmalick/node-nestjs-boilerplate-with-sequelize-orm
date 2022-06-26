import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swaggerSetup = (app: any, config: ConfigService) => {
  const builder = new DocumentBuilder()
    .setTitle(config.get('npm_package_name'))
    .setDescription(config.get('npm_package_description'))
    .setVersion(config.get('npm_package_version'))
    .build();
  const document = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('/', app, document);
}