import { Controller, Post, Put, Body, Param, Get, Delete} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroup } from './group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  //Creating a group
  @Post()
  insertGroup(
    @Body('name') name:string,
    @Body('student_num') student_num:number,
  ){
    const groupId=this.groupService.insertGroup(name, student_num);
    return {
      id: groupId, 
      name: name,
      student_num:student_num
    }
  }

  //Reading
  @Get()
  getAllGroups(){
    return this.groupService.getGroups();
  }

  //Updating
  @Put(':groupId')
  updateGroup(
    @Param('groupId')groupId:number, 
    @Body('name')name:string, 
    @Body('student_num')student_num:number): CreateGroup{
      return this.groupService.updateGroup(groupId, name, student_num);
  }

  //Delete
  @Delete(`:GroupId`)
  delete(@Param(`:GroupId`) GroupId:number){
    this.groupService.deleteGroup(GroupId);
  }/*
  @Get()
  findAll(): string{
    return 
  }

  */
}
