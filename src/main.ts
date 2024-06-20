import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require('cors');
  app.setGlobalPrefix('api');
  const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  app.use([cookieParser(), cors(corsOptions)]);
  app.enableCors({
    origin: ['http://localhost:3001/'],
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(4200);
}
bootstrap();
