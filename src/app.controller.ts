import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Aluno } from './entity/Aluno';

@Controller('alunos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllAlunos(): Promise<Aluno[]> {
    return this.appService.getAllAlunos();
  }

  @Post()
  createAluno(@Body() aluno: Aluno): Promise<Aluno> {
    return this.appService.createAluno(aluno);
  }

  @Put(':id')
  updateAluno(@Param('id') id: number, @Body() aluno: Aluno): Promise<Aluno> {
    return this.appService.updateAluno(id, aluno);
  }

  @Delete(':id')
  deleteAluno(@Param('id') id: number): Promise<void> {
    return this.appService.deleteAluno(id);
  }

  @Get(':id')
  getAlunoById(@Param('id') id: number): Promise<Aluno> {
    return this.appService.getAlunoById(id);
  }
}
