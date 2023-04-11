import { Component, OnInit } from '@angular/core';
import { Services } from '../Model/Services.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listb',
  templateUrl: './listb.component.html',
  styleUrls: ['./listb.component.css']
})
export class ListbComponent implements OnInit {
  nbg:number=0
  page:number=1
  liste3 : Services[]=[]
  liste4 : Services[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  ngOnInit(): void {
    this.service.getSer().subscribe(ser=>{
      this.liste3=ser
    this.liste4=this.liste3.filter(serv=>serv.categorie=='Broading')
    this.nbg=this.liste4.length
    // this.liste5=this.liste3.filter(serv=>serv.categorie=='DayCare')
    // this.nbd=this.liste5.length
    // this.liste6=this.liste3.filter(serv=>serv.categorie=='Broading')
    // this.nbb=this.liste6.length
    })
  }
}