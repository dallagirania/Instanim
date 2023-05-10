import { Proprietaire } from "./Proprietaire.model";


export class Animal{
    constructor(
        public id?:number,
        public nom?:String ,
        public race?:String ,
        public proprietaire?:Proprietaire,
        public poids?:number ,
        public daten?:string ,
        public image?:string ,
       
        ){

    }
}