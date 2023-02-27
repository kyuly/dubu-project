import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './boards/entity/board.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dubu.sqlite',
      entities: [Board],
      synchronize: true,
    }),
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
