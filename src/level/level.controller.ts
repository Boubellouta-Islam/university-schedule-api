import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './level.dto';
import { Domain, LavelName } from 'src/utils/enum';
import { Filiere } from 'src/utils/enum';
import { Speciality } from 'src/utils/enum';


@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) { }

  @Post()
  async create(@Body() createLevelDto: CreateLevelDto) {
    const generatedId = await this.levelService.insertLevel(createLevelDto);
    return { id: generatedId };
  }

  @Get()
  async getAll() {
    return await this.levelService.getLevels();
  }

  @Get(':id')
  async getOneLevel(@Param('id') levelId: string) {
    return await this.levelService.getLevel(levelId);
  }

  @Patch(':id')
  update(@Param('id') levelId: string, @Body('name') name: LavelName, @Body('domain') domain: Domain, @Body('filiere') filiere: Filiere, @Body('sem_num') sem_num: number, @Body('speciality') speciality: Speciality) {
    this.levelService.updateLevel(levelId, name, domain, filiere, sem_num, speciality);
    return null;
  }

  @Delete(':id')
  removeLevel(@Param('id') levelId: string) {
    this.levelService.deleteLevel(levelId);
    return null;
  }
}


