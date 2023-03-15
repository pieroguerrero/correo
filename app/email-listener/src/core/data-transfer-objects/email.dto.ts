import { IsString, IsNotEmpty, IsIn, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { EmailPriority } from '../entities/email-priority.entity';
import { EmailType } from '../entities/email-type.entity';
export class CreateEmailDTO {
  @IsEmail()
  @IsNotEmpty()
  from: string;
  @IsString()
  @IsNotEmpty()
  to: string;
  @IsString()
  @IsNotEmpty()
  senderName: string;
  @IsString()
  @IsNotEmpty()
  subject: string;
  @IsString()
  subjectDetails: string;
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

  @IsString()
  cc: string;

  @IsString()
  bcc: string;
}

export class UpdateEmailDTO extends PartialType(CreateEmailDTO) {}
