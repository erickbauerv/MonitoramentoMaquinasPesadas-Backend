import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Maquina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  localizacao: string;

  @Column()
  status: string; // 'operando', 'manutenção', 'desligada'
}