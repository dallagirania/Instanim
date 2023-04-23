import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Animal } from '../Model/Animal.model';
import { Proprietaire } from '../Model/Proprietaire.model';
import { Publication } from '../Model/Publication.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
mydate=new Date()
  user:any
  liste:Animal[]=[]
  liste1:Proprietaire[]=[]
  ajoutForm: FormGroup
  nbranim=0;
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  currentProp=new Proprietaire();
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
   ) { 
      this.user=this.service.userDetail()

      let formControls = {
       text: new FormControl('', [
          Validators.required,
  
        ]),
       
        image: new FormControl('', [
          Validators.required,
  
        ]),
        datepub: new FormControl('', [
          Validators.required,
  
        ]),
      
      }
      this.ajoutForm= this.fb.group(formControls)
    }

    get text() { return this.ajoutForm.get('text') }
   
    get datepub() { return this.ajoutForm.get('datepub') }
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
      let data = this.ajoutForm.value;
      console.log(data);
      let pub = new Publication(
         undefined ,data.text,this.imgURL,JSON.parse(JSON.stringify(this.currentProp)), data.etat,this.mydate.toISOString().slice(0,10));
         console.log(pub); 
         this.currentProp.animal.push(pub);
         console.log(55)
         this.service.updateProp(this.currentProp.id!, this.currentProp)
      if(data.petName==0||data.petType==0||data.petBirth==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });
    }else {    
      this.service.adddPub(pub).subscribe(

  
        res => {
          console.log(res);
          this.toast.success({
            detail:'success msg',
            summary:'Ajout avec Succés'
          }); 
          this.router.navigate(['/dashboard']);
        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre formulaire !'
          });
  
        }
  
      )
    
  
    }}
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste=proprietaire.animal
      this.nbranim=proprietaire.animal.length
      console.log(this.nbranim)
     
    })
    this.service.getProp().subscribe(anim=>{
      this.liste1=anim
      // this.nbprop=anim.length
    })
  
 
  
  }
}