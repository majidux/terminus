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
    new FastifyAdapter(),
    { bodyParser: true, snapshot: true },
  );

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
  app.listen(configModule.get('PORT') || 3000);
}

bootstrap();
