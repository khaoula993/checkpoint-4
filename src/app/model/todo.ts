import { Content } from '@angular/compiler/src/render3/r3_ast';

export class Todo {
    id: number;
    name:string;
    content:string;

constructor(
    id:number=0,
    name:string=" ",
    content:string=" "
){
    this.id=id;
    this.name=name;
    this.content=content;
}
    
}
