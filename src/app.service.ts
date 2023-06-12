import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './entity/Aluno';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  async getAllAlunos(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  async createAluno(aluno: Aluno): Promise<Aluno> {
    console.log('Dados recebidos:', aluno);
    return this.alunoRepository.save(aluno);
  }

  async updateAluno(id: number, aluno: Aluno): Promise<Aluno> {
    const alunoToUpdate = await this.alunoRepository.findOne({ where: { id } });
    if (!alunoToUpdate) {
      console.log('Aluno não encontrado');
      return null;
    }
    const updatedAluno = { ...alunoToUpdate, ...aluno };
    return this.alunoRepository.save(updatedAluno);
  }

  async deleteAluno(id: number): Promise<void> {
    await this.alunoRepository.delete(id);
  }

  async getAlunoById(id: number): Promise<Aluno> {
    const aluno = await this.alunoRepository.findOne({ where: { id } });
    if (!aluno) {
      console.log('Aluno não encontrado');
      return null;
    }
    return aluno;
  }
}
