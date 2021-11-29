import { Controller, Post, Put, Body, Param, Get, Delete} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroup } from './group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post()
  create(@Body()createGroup: CreateGroup): string{
    return `Name: ${createGroup.name}`;
  }
  @Get()
  findAll(): string{
    return 
  }

  @Put(':id')
  update(@Body()updateGroup: CreateGroup, @Param('id') id): string{
    return `Update ${id} - Name ${updateGroup.name}`;
  }

  @Delete(`:id`)
  delete(@Param(`:id`) id):string{
    return `Delete ${id}`;
  }
}
