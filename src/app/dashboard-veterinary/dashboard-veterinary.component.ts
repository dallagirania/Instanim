import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../Model/Veterinary.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-veterinary',
  templateUrl: './dashboard-veterinary.component.html',
  styleUrls: ['./dashboard-veterinary.component.css']
})
export class DashboardVeterinaryComponent implements OnInit {
  nbVet:number=0
  page:number=1
  liste : Veterinary[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  ngOnInit(): void {
    this.service.getVet().subscribe(vet=>{
      this.liste=vet
      this.nbVet=vet.length
    })
  }
}
