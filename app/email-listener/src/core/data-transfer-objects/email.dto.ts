import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateEmailDTO {
  @IsString()
  @IsNotEmpty()
  from: string;
  @IsString()
  @IsNotEmpty()
  to: string;
  @IsString()
  @IsNotEmpty()
  subject: string;
  @IsString()
  @IsNotEmpty()
  body: string;
}

export class UpdateEmailDTO extends PartialType(CreateEmailDTO) {}
