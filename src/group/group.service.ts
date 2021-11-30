import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group, GroupeDecument } from './group.schema';
import { CreateGroup } from './group.dto';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class GroupService {
  private groups: CreateGroup[]=[];
  constructor(
    @InjectModel(Group.name) private groupModel: Model<GroupeDecument>,
  ) {}
  
  insertGroup(name:string, student_num:number){
    const id=uuidv4()
    const newGroup=new CreateGroup(id, name, student_num);
    this.groups.push(newGroup);
    return [id, name, student_num];
  }

  getGroups(){
    return [...this.groups];
  }

  updateGroup(
    id:number,
    name:string, 
    student_num:number,
    ): CreateGroup{
    const [targetGroup, index]= this.getGroupById(id);
    const ngp={ ...targetGroup, name, student_num };
    const newGroup=new CreateGroup(id, name, student_num);
    this.groups[index]=newGroup;
    return newGroup;
  }

  private getGroupById(id:number):[CreateGroup, number]{
    const index=this.groups.findIndex((g)=>g.id == id);
    return [this.groups[index], index]
  }

  deleteGroup(id:number){
    const[_, index]=this.getGroupById[id];
    this.groups.splice(index, 1);
  }
}
