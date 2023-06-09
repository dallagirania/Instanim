import { Component, OnInit } from '@angular/core';
import { Veterinary } from '../Model/Veterinary.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinary',
  templateUrl: './veterinary.component.html',
  styleUrls: ['./veterinary.component.css']
})
export class VeterinaryComponent implements OnInit {
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
