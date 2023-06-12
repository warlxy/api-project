import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './entity/Aluno';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'Dirty1399',
      database: 'banco-api',
      entities: [Aluno],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Aluno]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
