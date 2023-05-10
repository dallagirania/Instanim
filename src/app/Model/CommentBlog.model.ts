import { Blog } from "./Blog.model";

export class CommentBlog{
    constructor(
        public id?:number,
        public date?:string ,
        public email?:string ,
        public image?:string ,
        public msg?:string ,
        public nom?:String ,
        public prenom?:String ,
        public blog?:Blog,
        ){

    }
}