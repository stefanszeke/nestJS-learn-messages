import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(3000, () => {
    console.log('\n*** Listening at http://localhost:3000 ***\n');
  });
}
bootstrap();
