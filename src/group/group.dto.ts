export class CreateGroup{
    readonly id:number;
    readonly name:string;
    readonly student_num:number;
    constructor(id:number, name:string, student_num:number){
        this.id=id;
        this.name=name;
        this.student_num=student_num;
    }
}