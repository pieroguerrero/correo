import { Module } from '@nestjs/common';
import { IncomingEmailGatewayService } from './incoming-email-gateway.service';

@Module({
  providers: [IncomingEmailGatewayService],
  exports: [IncomingEmailGatewayService],
})
export class IncomingEmailGatewayModule {}
