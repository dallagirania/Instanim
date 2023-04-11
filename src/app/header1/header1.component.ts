import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  user:any
  currentuser:any
    constructor(
      private service: CrudService,
      private router: Router,
    ) {
   
     }
  
    ngOnInit(): void {
      this.user=localStorage.getItem("user")
      if(this.user=='proprietaire')
     {  this.service.getPropById(this.service.userDetail().id).subscribe(user=>{
        this.currentuser=user
    })}
  }
    
    logOut(){
      localStorage.clear()
      this.router.navigate(["/home"])
      window.location.reload()
  
    }
  
}
