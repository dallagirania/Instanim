import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Blog } from '../Model/Blog.model';
import { CrudService } from '../Service/crud.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id: any;
  currentBlog=new Blog()
  user:any;
  liste : Blog[]=[]
  liste3 : Blog[]=[]
  liste4: Blog[]=[]
  nbVet:number=0
  page:number=1
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute)
      { 
      this.user=this.service.userDetail()
     }

   

   ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.id=this.rout.snapshot.params["id"]
    this.getBlog(this.id);
    // console.log(this.currentOffre.entreprise)
    this.service.getBlog().subscribe(vet=>{
      this.liste3=vet 
      this.liste4=this.liste3.reverse()
      })
   }
   getBlog(id:number)
   {
     this.service.getBlogById(id).subscribe(data=>{
       this.currentBlog=data
 
     })
   }
}


