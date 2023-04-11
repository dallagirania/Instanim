import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Animal } from '../Model/Animal.model';
import { Proprietaire } from '../Model/Proprietaire.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
  liste:Animal[]=[]
  liste1:Proprietaire[]=[]
  nbranim=0;
  constructor(
    private service: CrudService,
   private router: Router,
   private fb: FormBuilder,
   private toast:NgToastService,
  ) {}
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste=proprietaire.animal
      this.nbranim=proprietaire.animal.length
      console.log(this.nbranim)
     
    })
    this.service.getProp().subscribe(anim=>{
      this.liste1=anim
      // this.nbprop=anim.length
    })
  
 
  
  }
}