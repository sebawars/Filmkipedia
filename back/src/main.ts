import { NestFactory, Reflector } from '@nestjs/core';
import { INestApplication, ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger.config';

async function bootstrap(): Promise<any> {
  const app: INestApplication = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ transform: true, skipMissingProperties: true }));
  app.use(helmet());
  app.enableCors();
  app.listen(process.env.API_PORT);
}

bootstrap();
