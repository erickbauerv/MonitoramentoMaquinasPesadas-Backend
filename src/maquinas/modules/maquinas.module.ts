import { Module } from '@nestjs/common';
import { MaquinasController } from './controllers/maquinas.controller';
import { MaquinasService } from './services/maquinas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maquina } from './models/maquina.model';

@Module({
  imports: [TypeOrmModule.forFeature([Maquina])],
  controllers: [MaquinasController],
  providers: [MaquinasService]
})
export class MaquinasModule {}
