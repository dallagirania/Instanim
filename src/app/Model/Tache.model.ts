import { Proprietaire } from "./Proprietaire.model";


export class Tache{
    constructor(
        public id?:number,
        public titre?:String ,
        public anim?:String ,
        public date?:string ,
        public description?:string ,
        public proprietaire?:Proprietaire,
        ){

    }
}