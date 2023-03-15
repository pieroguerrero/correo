import { Test, TestingModule } from '@nestjs/testing';
import { IncomingEmailGatewayService } from './incoming-email-gateway.service';

describe('IncomingEmailServiceGateway', () => {
  let gateway: IncomingEmailGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomingEmailGatewayService],
    }).compile();

    gateway = module.get<IncomingEmailGatewayService>(
      IncomingEmailGatewayService,
    );
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
