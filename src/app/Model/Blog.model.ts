import { CommentBlog } from "./CommentBlog.model";

export class Blog{
    constructor(
        public id?:number,
        public description?:String,
        public img?:String ,
        public text?:String ,
        public titre?:String ,
        public categorie?:String,
        public comment:CommentBlog[]=[],
        ){

    }
}