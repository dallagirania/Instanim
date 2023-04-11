import { Animal } from "./Animal.model";

export class Proprietaire{
    constructor(
        public id?:number,
        public nom?:String ,
        public prenom?:String ,
        public email?:String,
        public mdp?:String,
        public img?:String ,
        public animal:Animal[]=[]
        
        ){

    }
}