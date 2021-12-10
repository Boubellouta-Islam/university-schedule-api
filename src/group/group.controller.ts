import {
  Controller,
  Post,
  Put,
  Body,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from './group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  //Reading
  @Get()
  async getAllGroups() {
    return await this.groupService.getGroups();
  }

  @Get(':id')
  async getOneGroup(@Param('id') id: string) {
    return await this.groupService.getGroupById(id);
  }

  @Post('add')
  async addNewGroup(@Body() createGroupDto: GroupDto) {
    return await this.groupService.addGroup(createGroupDto);
  }

  //Updating
  @Put('update/:id')
  async updateGroup(@Param('id') id: string, @Body() updateGroupDto: GroupDto) {
    return await this.groupService.updateGroup(id, updateGroupDto);
  }

  //Delete
  @Delete(`delete/:id`)
  delete(@Param(`:id`) id: string) {
    this.groupService.deleteGroup(id);
  }
}
