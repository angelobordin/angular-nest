import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { level_education, marital_status } from '@prisma/client';

@Injectable()
export class PersonRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async registerPerson(createPersonDto: CreatePersonDto) {
    return await this.prismaService.person.create({
      data: {
        cpf: createPersonDto.cpf,
        name: createPersonDto.name,
        birthday: new Date(createPersonDto.birthday),
        marital_status: marital_status[createPersonDto.marital_status],
        level_education: level_education[createPersonDto.level_education],
      },
    });
  }

  async getPersonList() {
    return await this.prismaService.person.findMany();
  }

  async getPersonByCpf(cpf: string) {
    return await this.prismaService.person.findUnique({
      where: { cpf },
    });
  }

  async getPersonById(id: number) {
    return await this.prismaService.person.findUnique({
      where: { id },
    });
  }

  async updatePersonById(id: number, updatePersonDto: UpdatePersonDto) {
    return await this.prismaService.person.update({
      where: { id },
      data: {
        cpf: updatePersonDto.cpf,
        name: updatePersonDto.name,
        birthday: new Date(updatePersonDto.birthday),
        marital_status: marital_status[updatePersonDto.marital_status],
        level_education: level_education[updatePersonDto.level_education],
      },
    });
  }

  async deletePersonById(id: number) {
    return await this.prismaService.person.delete({
      where: { id },
    });
  }
}
