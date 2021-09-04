import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules';

import { APP_PORT } from './settings';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(APP_PORT);
}
bootstrap();
