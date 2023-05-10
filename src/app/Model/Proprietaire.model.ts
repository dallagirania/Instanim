import { Animal } from "./Animal.model";
import { Publication } from "./Publication.model";
import { Tache } from "./Tache.model";

export class Proprietaire{
    constructor(
        public id?:number,
        public nom?:String ,
        public prenom?:String ,
        public email?:String,
        public mdp?:String,
        public img?:String ,
        public photo?:String ,
        public animal:Animal[]=[],
        public tache:Tache[]=[],
        public publication:Publication[]=[],
        ){

    }
}