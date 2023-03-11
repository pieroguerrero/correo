import { IsString, IsNotEmpty, IsIn } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { EmailPriority } from '../entities/email-priority.entity';
import { EmailType } from '../entities/email-type.entity';
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
  @IsString()
  @IsNotEmpty()
  @IsIn([EmailPriority.HIGH, EmailPriority.LOW, EmailPriority.MEDIUM])
  priority: EmailPriority;
  @IsString()
  @IsNotEmpty()
  @IsIn([EmailType.TEXT])
  type: EmailType;
}

export class UpdateEmailDTO extends PartialType(CreateEmailDTO) {}
