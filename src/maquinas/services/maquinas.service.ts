import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maquina } from '../models/maquina.model';
import { CreateMaquinaDto } from '../dtos/create-maquina.dto';
import { UpdateMaquinaDto } from '../dtos/update-maquina.dto';

@Injectable()
export class MaquinasService {
  constructor(
    @InjectRepository(Maquina)
    private maquinaRepository: Repository<Maquina>
  ) {}


  async getMaquinas(status?: string) {
    if(status) {
      return await this.maquinaRepository.find({
        where: { status }
      });
    }

    return await this.maquinaRepository.find();
  }

  async getMaquina(id: number) {
    return await this.maquinaRepository.findOne({
      where: { id }
    })
  }

  async createMaquina(createMaquinaDto: CreateMaquinaDto) {
    const maquina = await this.maquinaRepository.create(createMaquinaDto);
    return await this.maquinaRepository.save(maquina);
  }

  async updateMaquina(id: number, updateMaquinaDto: UpdateMaquinaDto) {
    await this.maquinaRepository.update(id, updateMaquinaDto);
    return this.maquinaRepository.findOne({
      where: { id }
    });
  }
}
