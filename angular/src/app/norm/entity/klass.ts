import { Teacher } from "./teacher";

export class Klass {
    id : any;
    name : string;
    teacher : Teacher; 

    constructor( id : any, name : string, teacher : Teacher) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
    }
}