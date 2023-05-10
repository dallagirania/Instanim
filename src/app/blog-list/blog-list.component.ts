import { Component, OnInit } from '@angular/core';
import { Blog } from '../Model/Blog.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  nbVet:number=0
  nbblog:number=0
  page:number=1
  liste : Blog[]=[]
  liste3 : Blog[]=[]
  liste4: Blog[]=[]
  liste1: Blog[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  ngOnInit(): void {
    this.service.getBlog().subscribe(vet=>{
      this.liste=vet
      this.liste1=this.liste.reverse()
      this.nbVet=vet.length
    })
    this.service.getBlog().subscribe(vet1=>{
      this.liste3=vet1
      this.liste4=this.liste3.reverse()
      this.nbblog=vet1.length
      })
    

}}
