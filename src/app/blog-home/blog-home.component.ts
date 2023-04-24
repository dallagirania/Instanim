import { Component, OnInit } from '@angular/core';
import { Blog } from '../Model/Blog.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  nbVet:number=0
  page:number=1
  liste : Blog[]=[]
  constructor(
    private service:CrudService,
    private route:Router
  ) { }
  ngOnInit(): void {
    this.service.getBlog().subscribe(vet=>{
      this.liste=vet
      this.nbVet=vet.length
    })
  }
}
