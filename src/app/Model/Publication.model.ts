import { Proprietaire } from "./Proprietaire.model";

export class Publication{
    constructor(
        public id?:number,
        public datepub?:String ,
        public etat?:boolean,
        public image?:String ,
        public text?:String ,
        public proprietaire?:Proprietaire,
        
      
        ){

    }
}