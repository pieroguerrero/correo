import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateEmailDTO, UpdateEmailDTO } from 'src/core';
import { EmailUseCases } from 'src/use-cases/email/email.use-case';

@Controller('api/emails')
export class EmailController {
  constructor(private emailUseCases: EmailUseCases) {}

  @Get()
  async getAll() {
    return this.emailUseCases.getAllEmails();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.emailUseCases.getEmailById(id);
  }

  @Post()
  createEmail(@Body() createEmailDto: CreateEmailDTO) {
    return this.emailUseCases.createEmail(createEmailDto);
  }

  @Put(':id')
  updateAuthor(
    @Param('id') emailId: string,
    @Body() updateEmailDto: UpdateEmailDTO,
  ) {
    return this.emailUseCases.updateEmail(emailId, updateEmailDto);
  }
}
