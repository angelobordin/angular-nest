import { level_education, marital_status } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';

export class CreatePersonDto {
  @Exclude()
  readonly id: string;

  @IsString()
  @MaxLength(11)
  readonly cpf: string;

  @IsString()
  @MaxLength(60)
  readonly name: string;

  readonly birthday: Date;

  readonly marital_status: marital_status;

  readonly level_education: level_education;
}
