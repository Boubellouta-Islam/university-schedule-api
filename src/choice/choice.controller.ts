import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { VoeuxType } from 'src/utils/enum';
import { CreateChoiceDto } from './choice.dto';
import { TeacherService } from 'src/teacher/teacher.service';


@Controller('choice')
export class ChoiceController {
  constructor(private readonly choiceService: ChoiceService, private readonly teacherService: TeacherService) { }

  @Post()
  async create(@Body() createChoiceDto: CreateChoiceDto) {

    const generatedId = await this.choiceService.insertChoice(createChoiceDto);
    return { id: generatedId };

  }

  @Get()
  async getAll() {
    return await this.choiceService.getChoices();
  }

  @Get(':id')
  async getOneChoice(@Param('id') choiceId: string) {
    return await this.choiceService.getChoice(choiceId);
  }

  @Patch(':id')
  update(@Param('id') choiceId: string, @Body('type') choiceType: VoeuxType, @Body('index') choiceIndex: number, @Body('course') course: boolean, @Body('td') td: boolean, @Body('tp') tp: boolean) {
    this.choiceService.updateChoice(choiceId, choiceType, choiceIndex, course, td, tp);
    return null;
  }

  @Delete(':id')
  removeChoice(@Param('id') choiceId: string) {
    this.choiceService.deleteChoice(choiceId);
    return null;
  }
}
