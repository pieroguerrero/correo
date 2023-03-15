import { IsEmail } from 'class-validator';

export class IListEmailsDTO {
  @IsEmail()
  email: string;
}
