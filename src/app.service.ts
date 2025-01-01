import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiDocumentation() {
    console.log('AppService is handling the request right now...');
    const documentationObj = {
      title: 'UserAuth API',
      description: 'Here will be a description',
      endpoints: 'Here will be endpoints',
    };
    return documentationObj;
  }
}
