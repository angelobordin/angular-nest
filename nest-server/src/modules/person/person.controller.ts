import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { create } from 'domain';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  registerPerson(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.registerPerson(createPersonDto);
  }

  @Get()
  getPersonList() {
    return this.personService.getPersonList();
  }

  @Get(':id')
  getPersonById(@Param('id') id: string) {
    return this.personService.getPersonById(parseInt(id));
  }

  @Patch(':id')
  updatePersonById(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.updatePersonById(parseInt(id), updatePersonDto);
  }

  @Delete(':id')
  deletePersonById(@Param('id') id: string) {
    return this.personService.deletePersonById(+id);
  }
}
