import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../controllers/app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "List Emails service is up and running"', () => {
      expect(appController.getMessage()).toBe(
        'List Emails service is up and running',
      );
    });
  });
});
