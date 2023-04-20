import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../Model/Veterinary.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nbVet:number=0
  page:number=1
  liste : Veterinary[]=[]
  constructor(
    private service:CrudService,
    private route:Router,
    private scroller: ViewportScroller
  ) { }
  ngOnInit(): void {
    this.service.getVet().subscribe(vet=>{
      this.liste=vet
      this.nbVet=vet.length
    })
  }

  goToAbout(){
    this.scroller.scrollToAnchor("about");
  }
}