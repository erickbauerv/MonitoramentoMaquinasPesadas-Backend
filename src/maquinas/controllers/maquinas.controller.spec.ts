import { Test, TestingModule } from '@nestjs/testing';
import { MaquinasController } from './controllers/maquinas.controller';

describe('MaquinasController', () => {
  let controller: MaquinasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaquinasController],
    }).compile();

    controller = module.get<MaquinasController>(MaquinasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
