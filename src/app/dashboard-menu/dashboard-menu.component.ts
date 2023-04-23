import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Animal } from '../Model/Animal.model';
import { Proprietaire } from '../Model/Proprietaire.model';
import { Publication } from '../Model/Publication.model';
@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {
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
  
 
  
  }}