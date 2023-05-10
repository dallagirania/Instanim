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
  liste1 : Blog[]=[]
  liste2 : Blog[]=[]
  liste3 : Blog[]=[]
  liste4 : Blog[]=[]
  liste5 : Blog[]=[]
  liste6 : Blog[]=[]
  liste7 : Blog[]=[]
  titre:any
  searchTerm = '';

  term = '';
  constructor(
    private service:CrudService,
    private route:Router
  ) { }

  Search(){
    if(this.titre==""){
      this.liste2=this.liste1
    }else{
      this.liste2= this.liste2.filter(res =>{return res.titre!.toLocaleLowerCase().match(this.titre.toLocaleLowerCase());});   
    }
  }
  ngOnInit(): void {
    this.service.getBlog().subscribe(vet=>{
      this.liste=vet
      this.nbVet=vet.length
    })
    this.service.getBlog().subscribe(vet=>{
      this.liste3=vet 
      this.liste4=this.liste3.reverse()
      })
      // this.service.getBlog().subscribe(serv=>{
      //   this.liste5=serv
      //   this.nbVet=serv.length
      //   this.liste6=this.liste5.filter(serv=>serv.categorie=="Grooming")
      //   this.liste7=this.liste5.filter(serv=>serv.categorie=="DayCar")
        // this.liste4=this.liste.filter(serv=>serv.categorie=="DayCar")
        // this.liste5=this.liste4
        // this.liste6=this.liste.filter(serv=>serv.categorie=="Broading")
        // this.liste7=this.liste6
      // })
  }


}
