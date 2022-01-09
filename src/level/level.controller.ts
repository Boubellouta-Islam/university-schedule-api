import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelDto } from './level.dto';
@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get()
  async getAll() {
    return await this.levelService.getLevels();
  }

  @Get(':id')
  async getOneLevel(@Param('id') levelId: string) {
    return await this.levelService.getLevel(levelId);
  }

  @Post('/add')
  async create(@Body() createLevelDto: LevelDto) {
    return await this.levelService.insertLevel(createLevelDto);
  }

  @Put('/update/:id')
  async updateLevel(
    @Param('id') levelId: string,
    @Body() updateLevelDto: LevelDto,
  ) {
    return await this.levelService.updateLevel(levelId, updateLevelDto);
  }

  @Delete('/delete/:id')
  removeLevel(@Param('id') levelId: string) {
    return this.levelService.deleteLevel(levelId);
  }
}
