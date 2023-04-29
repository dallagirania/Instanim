import { Proprietaire } from '../Model/Proprietaire.model';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  photoLink ="";
  post_img ="";
  profil_img="";
  gradientColorStyle="";
  colorful=false;
  id: any;
  currentAdmin=new Proprietaire()
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
 
  onFileChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.photoLink=event.target.result;
      }
    }
  }
  onNewPostChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.post_img =event.target.result;
      }
    }
  }

  onProfilChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.profil_img =event.target.result;
      }
    }
  }

  onClick(){
    if(this.colorful==false){
      this.colorful=true;
      this.gradientColorStyle="color: #F86CA7;"
    }
    else{
      this.colorful=false;
      this.gradientColorStyle="";
    }
   
  }
  modifierProp(){
    this.id=this.rout.snapshot.params["id"];
    console.log(this.id);
    this.service.updateProp(this.id,this.currentAdmin).subscribe(admin=>{
      this.service.loginproprietaire(this.currentAdmin).subscribe(res=>{
        let token=res.token;
        localStorage.setItem("mytoken",token)
      })
      this.router.navigate(["/profile"]).then(()=>{
        window.location.reload();
      })
    })
   }
   ngOnInit(): void {
    this.id=this.rout.snapshot.params["id"];
    this.getAdmin(this.id);
  }
  getAdmin(id:number)
  {
    this.service.getPropById(id).subscribe(data=>{
      this.currentAdmin=data

    })
  }

}


 