import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  matricula: string;
}

//  npm run start:dev para startar o server
