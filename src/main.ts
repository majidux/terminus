import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      trustProxy: true,
    }),
    { bodyParser: true, snapshot: true },
  );
  // app.enableCors({
  //   origin: '*',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // });
  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('Terminus')
    .setDescription('The terminus crm API description')
    .setVersion('1.0')
    .addSecurityRequirements('JWT')
    .addSecurity('JWT', {
      type: 'http',
      scheme: 'Bearer',
    })
    .addTag('terminus api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  const configModule = app.get(ConfigService);
  await app.listen(configModule.get('PORT') || 3500, '0.0.0.0');
}

bootstrap()
  .then((success) => console.log('success', success))
  .catch((error) => console.log('error', error));
