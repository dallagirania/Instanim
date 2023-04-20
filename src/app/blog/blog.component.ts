import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  goToBlogList(){
    this.router.navigate(["/dashboard"]).then(()=>{
      window.location.reload()
    })
  }
}
