import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaquinasModule } from './maquinas/modules/maquinas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maquina } from './maquinas/models/maquina.model';

@Module({
  imports: [
    MaquinasModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Maquina],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
