export class Contact{
    constructor(
        public id?:number,
        public nom?:String ,
        public prenom?:String ,
        public email?:String ,
        public sujet?:String,
        public msg ?:String,
        public etat?:boolean,
        ){

    }
}