import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { ChoiceDto } from './choice.dto';
import { TeacherService } from 'src/teacher/teacher.service';

@Controller('choice')
export class ChoiceController {
  constructor(private readonly choiceService: ChoiceService) {}

  @Get()
  async getAllChoices() {
    return await this.choiceService.getChoices();
  }

  @Get(':id')
  async getChoiceById(@Param('id') choiceId: string) {
    return await this.choiceService.getChoice(choiceId);
  }

  @Post('add')
  async addChoice(@Body() createChoiceDto: ChoiceDto) {
    return await this.choiceService.insertChoice(createChoiceDto);
  }

  @Put('update/:id')
  async update(@Param('id') choiceId: string, @Body() updateChoice: ChoiceDto) {
    return await this.choiceService.updateChoice(choiceId, updateChoice);
  }

  @Delete('delete/:id')
  async removeChoice(@Param('id') choiceId: string) {
    return await this.choiceService.deleteChoice(choiceId);
  }
}
