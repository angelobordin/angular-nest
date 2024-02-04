import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from './person.repository';
import { successReponse } from 'src/utils/functions/response';
import { ErrorPersonAlreadyExists } from 'src/utils/error/person-register';

@Injectable()
export class PersonService {
  constructor(private readonly repository: PersonRepository) {}

  async registerPerson(createPersonDto: CreatePersonDto) {
    const personAlreadyExists = await this.repository.getPersonByCpf(
      createPersonDto.cpf,
    );

    if (personAlreadyExists)
      throw new ErrorPersonAlreadyExists(`Cpf já cadastrado`);

    const result = await this.repository.registerPerson({
      ...createPersonDto,
      name: createPersonDto['name'].toUpperCase(),
    });
    return successReponse(result, 'Registro cadastrado com sucesso');
  }

  async getPersonList() {
    const result = await this.repository.getPersonList();
    return successReponse(result);
  }

  async getPersonById(id: number) {
    const result = await this.repository.getPersonById(id);
    return successReponse(result);
  }

  async updatePersonById(id: number, updatePersonDto: UpdatePersonDto) {
    const result = await this.repository.updatePersonById(id, {
      ...updatePersonDto,
      name: updatePersonDto['name'].toUpperCase(),
    });

    return successReponse(result, 'Registro atualizado com sucesso!');
  }

  async deletePersonById(id: number) {
    const result = await this.repository.deletePersonById(id);
    return successReponse(result, 'Registro deletado com sucesso!');
  }
}
