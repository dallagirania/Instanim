import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Tache } from '../Model/Tache.model';
import { Proprietaire } from '../Model/Proprietaire.model';
import { Animal } from '../Model/Animal.model';

@Component({
  selector: 'app-important-todo',
  templateUrl: './important-todo.component.html',
  styleUrls: ['./important-todo.component.css']
})
export class ImportantTodoComponent implements OnInit {

  down=false;
  styleDown='display:none;'
  
  user:any
  liste:Tache[]=[]
  liste1:Proprietaire[]=[]
  liste2:Animal[]=[]
  liste3:Tache[]=[]
  liste4:Tache[]=[]
  listetache:Tache[]=[]
  nbranim=0;
  nbrtache=0;
  constructor(
    private service: CrudService,
   private router: Router,
   private fb: FormBuilder,
   private toast:NgToastService,
  ) {}
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste=proprietaire.tache
      this.nbranim=proprietaire.tache.length
      console.log(this.nbranim)
     
    })
    this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste2=proprietaire.animal
      console.log(this.liste2)
      for(let anima of this.liste2)
          {
            this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
              this.liste3=proprietaire.tache
              this.liste4=this.liste3.filter(serv=>serv.anim==anima.nom)
              this.nbrtache=this.liste4.length
              console.log(this.liste4)
            })
          }
    })
      //   this.service.getPostulationByFor(this.service.userDetail().id).subscribe(postulation=>{
  //     this.list=postulation
  //     console.log(this.list)
  //     for(let post of this.list)
  //     {
  //       this.service.getOffreById(post.offre.id).subscribe(offre=>{
  //         this.listOffre.push(offre) 
  //       })
  //     }
  //     console.log(this.listOffre)

  // })
    this.service.getProp().subscribe(anim=>{
      this.liste1=anim
      // this.nbprop=anim.length
    })
  
 
  
  }
  toDown(){
    if(this.down==false){
      this.down= true;
      this.styleDown='display:block;'
    }
    else{
      this.down= false;
      this.styleDown='display:none;'
    }
  }

}

