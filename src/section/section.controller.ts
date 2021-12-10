// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
//   Res,
// } from '@nestjs/common';
// import { SectionService } from './section.service';
// import { Section } from 'src/section/section.schema';

// @Controller('section')
// export class SectionController {
//   constructor(private readonly section: SectionService) {}

//   @Get()
//   async index() {
//     return await this.section.findAll();
//   }

//   @Get(':id')
//   async find(@Param('id') id: string) {
//     return await this.section.findOne(id);
//   }

//   @Post()
//   async create(@Body() section: SectionDto) {
//     return await this.section.create(section);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() section: SectionDto) {
//     return await this.section.update(id, section);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string) {
//     return await this.section.delete(id);
//   }
// }
