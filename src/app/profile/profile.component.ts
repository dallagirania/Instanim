import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  photoLink ="";
  post_img ="";
  profil_img="";
  gradientColorStyle="";
  colorful=false;

  constructor() { }

  ngOnInit(): void {
  }
  onFileChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.photoLink=event.target.result;
      }
    }
  }
  onNewPostChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.post_img =event.target.result;
      }
    }
  }

  onProfilChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.profil_img =event.target.result;
      }
    }
  }

  onClick(){
    if(this.colorful==false){
      this.colorful=true;
      this.gradientColorStyle="color: #F86CA7;"
    }
    else{
      this.colorful=false;
      this.gradientColorStyle="";
    }
   
  }


}


 