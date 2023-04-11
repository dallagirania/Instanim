import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { Animal } from '../Model/Animal.model';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any
  currentuser:any
  liste:Animal[]=[]
  nbranim=0
    constructor(
      private service: CrudService,
      private router: Router,
      private toast:NgToastService,
    ) {
   
     }
  
    ngOnInit(): void {
      this.user=localStorage.getItem("user")
      if(this.user=='proprietaire')
     {  this.service.getPropById(this.service.userDetail().id).subscribe(user=>{
        this.currentuser=user
    })}
  }
    
    logOut(){
      localStorage.clear()
      this.router.navigate(["/home"])
      window.location.reload()
  
    }
    Continue(){
      this.user=localStorage.getItem("user")
    this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste=proprietaire.animal
      this.nbranim=proprietaire.animal.length
      console.log(this.nbranim)
      if(this.nbranim==0)
        {this.toast.info({
          detail:'error msg !!',
          summary:'Vous Devez Ajouter Votre Compagnant'
        });}
        else{
          this.router.navigate(["/dashboard"]).then(()=>{
            window.location.reload()
          })
      }
      // this.total=this.liste2.length
      
      // this.liste2=this.liste.filter(offre=>offre.etat==true)
      // this.liste3=this.liste2
     
    })
 
  
  }
  
}
