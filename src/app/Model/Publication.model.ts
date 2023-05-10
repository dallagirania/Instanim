import { Proprietaire } from "./Proprietaire.model";
export class Publication{
    constructor(
        public id?:number,
        public aime?:boolean,
        public datepub?:String ,
        public etat?:boolean,
        public image?:String ,
        public text?:String ,
        public proprietaire?:Proprietaire,
        ){

    }
}