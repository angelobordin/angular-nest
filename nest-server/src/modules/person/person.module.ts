import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PrismaModule } from 'nestjs-prisma';
import { PersonRepository } from './person.repository';

@Module({
  imports: [PrismaModule],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
})
export class PersonModule {}
