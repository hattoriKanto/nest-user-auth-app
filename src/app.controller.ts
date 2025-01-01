import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public appService: AppService) {}

  @Get()
  getApiDocumentation() {
    console.log('AppController is handling the request right now...');
    return this.appService.getApiDocumentation();
  }
}
