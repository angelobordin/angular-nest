import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async registerPerson(createPersonDto: CreatePersonDto) {
    return await this.prismaService.person.create({
      data: createPersonDto,
    });
  }

  async getPersonList() {
    return await this.prismaService.person.findMany();
  }

  async getPersonById(id: number) {
    return await this.prismaService.person.findUnique({
      where: { id },
    });
  }

  async updatePersonById(id: number, updatePersonDto: UpdatePersonDto) {
    return await this.prismaService.person.update({
      where: { id },
      data: updatePersonDto,
    });
  }

  async deletePersonById(id: number) {
    return await this.prismaService.person.delete({
      where: { id },
    });
  }
}
