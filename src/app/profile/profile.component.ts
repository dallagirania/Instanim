import { Proprietaire } from '../Model/Proprietaire.model';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Publication } from '../Model/Publication.model';
import { Animal } from '../Model/Animal.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mydate=new Date()
  user:any
  total:number=0
  nbrpub:number=0
  // photoLink ="assets/images/h1-newsletter-bg.png";
  liste:Animal[]=[]
  liste1:Proprietaire[]=[]
  liste3:Publication[]=[]
  liste4:Publication[]=[]
  liste5:Publication[]=[]
  ajoutForm: FormGroup 
  nbranim=0;
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  currentProp=new Proprietaire();
  photoLink ="";
  post_img ="";
  profil_img="";
  gradientColorStyle="";
  colorful=false;
  id: any;
  currentAdmin=new Proprietaire()
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute,
    ) { 
      
      this.user=this.service.userDetail()

      let formControls = {
       text: new FormControl('', [
          Validators.required,
  
        ]),
       
        image: new FormControl('', [
          Validators.required,
  
        ]),
       
      
      
      }
      this.ajoutForm= this.fb.group(formControls)
    }

    get text() { return this.ajoutForm.get('text') }
    get image() { return this.ajoutForm.get('image') }
    onSelectFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
    
  
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Sauf les images sont acceptés.';
          return;
        }
  
        var reader = new FileReader();
  
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
        };
      }
    }

    ajouterPublication() {
      console.log("hi")
      let data = this.ajoutForm.value;
      console.log(data);
      let pub = new Publication(
         undefined,data.aime,this.mydate.toISOString().slice(0,10), data.etat,this.imgURL,data.text,JSON.parse(JSON.stringify(this.currentProp)));
         console.log(pub); 
         this.currentProp.publication.push(pub);
         console.log(55)
         this.service.updateProp(this.currentProp.id!, this.currentProp)
         console.log(22222222)
      if(data.text==0||this.imgURL==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });
    }else {    
      this.service.adddPub(pub).subscribe(
        res => {
          console.log(this.imgURL);
          // this.toast.success({
          //   detail:'success msg',
          //   summary:'Ajout avec Succés'
          // }); 
          this.router.navigate(['/dashboard']);
          window.location.reload();

        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre Publication !'
          });
  
        }
  
      )
      console.log(pub)
      console.log('hiiiiiiiiiiiiiiiii')
    
  
    }}
 
  onFileChanged(e:any) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.photoLink=event.target.result;
        this.currentProp.img=this.photoLink
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
        this.currentProp.photo=this.profil_img
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
  modifierProp(){
    this.id=this.rout.snapshot.params["id"];
     console.log(this.id);
     this.service.updateProp(this.id,this.currentProp).subscribe(entreprise=>{
      this.router.navigate(["/profile", this.currentProp.id]).then(()=>{
        window.location.reload();
      }) 
     })
   }
   ngOnInit(): void {
    // this.user=localStorage.getItem("user")
    this.service.getPropById(this.service.userDetail().id).subscribe(Proprietaire=>{
      this.currentProp=Proprietaire
    })
    this.service.getPropById(this.service.userDetail().id).subscribe(Proprietaire=>{
      this.liste3=Proprietaire.publication
      this.nbrpub=Proprietaire.publication.length
      console.log(this.nbrpub)
      this.total=this.liste3.length
      this.liste4=this.liste3.reverse()
      this.liste5=this.liste4.filter(ser=>ser.etat==true)
     
    })
    this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste=proprietaire.animal
      this.nbranim=proprietaire.animal.length
      console.log(this.nbranim)
     
    })
  }
  

}


 