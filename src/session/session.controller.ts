import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SessionDto } from './session.dto';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('')
  async getAllSessions() {
    return await this.sessionService.getAll();
  }

  @Get('/:id')
  async getSessionById(@Param('id') id: String) {
    return await this.sessionService.findOne(id);
  }

  @Post('/add')
  async addNewSession(@Body() sessionDto: SessionDto) {
    return await this.sessionService.addNewsession(sessionDto);
  }

  @Put('/update/:id')
  async updatSession(@Param('id') id: string, @Body() sessionDto: SessionDto) {
    try {
      return await this.sessionService.updateSession(id, sessionDto);
    } catch (error) {
      console.log(error);
      throw new HttpException('', HttpStatus.NOT_FOUND);
    }
  }
}
