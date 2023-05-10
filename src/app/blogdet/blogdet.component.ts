import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Blog } from '../Model/Blog.model';
import { CrudService } from '../Service/crud.service';
import { CommentBlog } from '../Model/CommentBlog.model';

@Component({
  selector: 'app-blogdet',
  templateUrl: './blogdet.component.html',
  styleUrls: ['./blogdet.component.css']
})
export class BlogdetComponent implements OnInit {
  token:any  
  mydate=new Date()
  id: any;
  currentBlog=new Blog()
  user:any;
  page:number=1
  nbVet:number=0
  liste : Blog[]=[]
  liste1 : Blog[]=[]
  liste2 : Blog[]=[]
  liste3 : Blog[]=[]
  liste4 : Blog[]=[]
  liste5 : Blog[]=[]
  liste6 : Blog[]=[]
  liste7 : Blog[]=[]
  liste8 : CommentBlog[]=[]
  nbranim=0;
  currentuser:any
  ajoutForm: FormGroup
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute)
     { 
 
      let formControls = {
       nom: new FormControl('', [
          Validators.required,
  
        ]),
        prenom: new FormControl('', [
         Validators.required,
 
       ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
  
        ]),
      
        msg: new FormControl('', [
          Validators.required,
  
        ]),
      
      }
      this.ajoutForm= this.fb.group(formControls)
  
    }
    get nom() { return this.ajoutForm.get('nom') }
    get prenom() { return this.ajoutForm.get('nom') }
    get email() { return this.ajoutForm.get('email') }
    get msg() { return this.ajoutForm.get('msg') }

    
   ngOnInit(): void {
    this.user=localStorage.getItem("user")
    if(this.user=='proprietaire')
     {  this.service.getPropById(this.service.userDetail().id).subscribe(user=>{
        this.currentuser=user
    })}

    this.id=this.rout.snapshot.params["id"]
    this.getBlog(this.id);
    this.service.getBlog().subscribe(vet=>{
      this.liste3=vet 
      this.liste4=this.liste3.reverse()
      })

      // this.service.getCommentByBlog(this.id).subscribe(proprietaire=>{
      //   this.liste8=proprietaire
      //   console.log(this.liste8)

      // })
      
      this.service.getBlogById(this.id).subscribe(blog=>{
        this.liste8=blog.commentBlog
        this.nbranim=this.liste8.length
        console.log(this.liste8)
       
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
       
     
      if(data.nom==0||data.prenom==0||data.email==0||data.sujet==0||data.msg==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });}else{
        
      this.service.addCommentBlog(contact).subscribe(

  
        res => {
          console.log(res);
          
          this.router.navigate(["/blogDet",this.currentBlog.id]).then(()=>{
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
    // 
  

   getBlog(id:number)
   {
     this.service.getBlogById(id).subscribe(data=>{
       this.currentBlog=data
     })
   } 
 }