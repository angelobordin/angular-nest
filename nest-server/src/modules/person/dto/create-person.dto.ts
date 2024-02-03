import { education, marital_state } from '@prisma/client';

export class CreatePersonDto {
  readonly cpf: string;
  readonly name: string;
  readonly birthday: Date;
  readonly marital_state: marital_state;
  readonly education: education;
}
