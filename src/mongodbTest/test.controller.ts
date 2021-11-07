import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  add(@Body('attribute') attribute: String){
    return this.testService.add(attribute);
  }
}
