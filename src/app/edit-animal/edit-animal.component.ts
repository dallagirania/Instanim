import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Animal } from '../Model/Animal.model';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {
  id: any;
  currentAnim=new Animal()
  userFile:any
   message?:String
   imgURL:any
   imagePath:any
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute) { 
   
     }
 
      
     onSelectFile(event: any) {
       if (event.target.files.length > 0) {
         const file = event.target.files[0];
         this.userFile = file;
     
   
         var mimeType = event.target.files[0].type;
         if (mimeType.match(/image\/*/) == null) {
           this.message = 'Sauf les images sont acceptés.';
           return;
         }
   
         var reader = new FileReader();
   
         this.imagePath = file;
         reader.readAsDataURL(file);
         reader.onload = (_event) => {
           this.imgURL = reader.result;
           this.currentAnim.image=this.imgURL
         };
       }
     }
    modifierSer(){
     this.id=this.rout.snapshot.params["id"];
     console.log(this.id);
     this.service.updateAnim(this.id,this.currentAnim) .subscribe(admin=>{
       this.router.navigate(["/dashboard"]).then(()=>{
         window.location.reload();
       })
     })
    }
     
   ngOnInit(): void {
     this.id=this.rout.snapshot.params["id"];
     this.getService(this.id);
   }
   getService(id:number)
   {
     this.service.getAnimById(id).subscribe(data=>{
       this.currentAnim=data
 
     })
   }
 }
 
