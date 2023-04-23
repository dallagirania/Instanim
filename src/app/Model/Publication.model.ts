import { Proprietaire } from "./Proprietaire.model";

export class Publication{
    constructor(
        public id?:number,
        public text?:String ,
        public image?:String ,
        public proprietaire?:Proprietaire,
        public etat?:boolean,
        public   datepub?:String ,
        ){

    }
}