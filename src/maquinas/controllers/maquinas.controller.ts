import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MaquinasService } from '../services/maquinas.service';
import { CreateMaquinaDto } from '../dtos/create-maquina.dto';
import { UpdateMaquinaDto } from '../dtos/update-maquina.dto';

@Controller('maquinas')
export class MaquinasController {
    constructor(
        private readonly maquinasService: MaquinasService
    ) {}

    @Get()
    getMaquinas(@Query('status') status?: string) {
        return this.maquinasService.getMaquinas(status);
    }

    @Get(':id')
    getMaquina(@Param('id')  id: number) {
        return this.maquinasService.getMaquina(id);
    }

    @Post()
    createMaquina(@Body() createMaquinaDto: CreateMaquinaDto) {
        return this.maquinasService.createMaquina(createMaquinaDto);
    }

    @Put(':id')
    updateMaquina(@Param('id') id: number, @Body() updateMaquinaDto: UpdateMaquinaDto) {
        return this.maquinasService.updateMaquina(+id, updateMaquinaDto);
    }
}
