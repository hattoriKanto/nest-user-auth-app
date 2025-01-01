import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.listen(env.PORT || 3000);
};
bootstrap();
