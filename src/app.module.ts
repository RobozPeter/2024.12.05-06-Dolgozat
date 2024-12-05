import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KidModule } from './kid/kid.module';
import { ToyModule } from './toy/toy.module';

@Module({
  imports: [KidModule, ToyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
