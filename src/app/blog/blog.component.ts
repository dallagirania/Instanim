import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Blog } from '../Model/Blog.model';
import { CrudService } from '../Service/crud.service';
import { CommentBlog } from '../Model/CommentBlog.model';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id: any;
  mydate=new Date()
  currentBlog=new Blog()
  user:any;
  liste : Blog[]=[]
  liste3 : Blog[]=[]
  liste4: Blog[]=[]
  liste8:CommentBlog[]=[]
  nbVet:number=0
  page:number=1
  nbranim=0
  ajoutForm: FormGroup
  currentuser:any
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute)
      { 
      this.user=this.service.userDetail()
      let formControls = {
         msg: new FormControl('', [
           Validators.required,
   
         ]),
       
       }
       this.ajoutForm= this.fb.group(formControls)
   
     }
     get msg() { return this.ajoutForm.get('msg') }
   


   ngOnInit(): void {
    this.user=localStorage.getItem("user")
    if(this.user=='proprietaire')
    {  this.service.getPropById(this.service.userDetail().id).subscribe(user=>{
       this.currentuser=user
   })}

    this.id=this.rout.snapshot.params["id"]
    this.getBlog(this.id);
    // console.log(this.currentOffre.entreprise)
    this.service.getBlog().subscribe(vet=>{
      this.liste3=vet 
      this.liste4=this.liste3.reverse()
      })

      this.service.getBlogById(this.id).subscribe(blog=>{
        this.liste8=blog.commentBlog
        this.nbranim= this.liste8.length
        console.log(this.liste8)
       
      })
   }
   getBlog(id:number)
   {
     this.service.getBlogById(id).subscribe(data=>{
       this.currentBlog=data
 
     })
   }

   ajouterContact() {
    let data = this.ajoutForm.value;
    if(this.user!=null)
    {
     data.prenom=this.currentuser.prenom,
     data.nom=this.currentuser.nom,
     data.email=this.currentuser.email
     data.image=this.currentuser.photo
    }
    console.log(data);
    let contact = new CommentBlog(
       undefined ,this.mydate.toISOString().slice(0,19),data.email, data.image, data.msg,data.nom,data.prenom,JSON.parse(JSON.stringify(this.currentBlog)));
       console.log(contact);
     
   
    if(data.msg==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.addCommentBlog(contact).subscribe(


      res => {
        console.log(res);
        
        this.router.navigate(["/blog",this.currentBlog.id]).then(()=>{
         window.location.reload();
       })
   
       
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'verifier votre formulaire !'
        });

      }

    )
  }

  }
}


