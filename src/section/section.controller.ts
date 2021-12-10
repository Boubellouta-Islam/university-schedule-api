import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SectionDto } from './section.dto';
import { SectionService } from './section.service';

@Controller('section')
export class SectionController {
  constructor(private readonly section: SectionService) {}

  @Get()
  async index() {
    return await this.section.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.section.findOne(id);
  }

  @Post('add')
  async create(@Body() section: SectionDto) {
    return await this.section.create(section);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() section: SectionDto) {
    return await this.section.update(id, section);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.section.delete(id);
  }
}
