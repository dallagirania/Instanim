import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Animal } from '../Model/Animal.model';
import { Proprietaire } from '../Model/Proprietaire.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  liste : Animal[]=[]
  liste1 : Animal[]=[]
  nbranim=0;
  total=0;
 ajoutForm: FormGroup
 currentProp=new Proprietaire();
 user:any
 currentuser:any
 userFile:any
 message?:String
 imgURL:any
 imagePath:any
 offre2:Animal=new Animal();
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
   ) { 
      this.user=this.service.userDetail()

      let formControls = {
        nom: new FormControl('', [
          Validators.required,
  
        ]),
       
        race: new FormControl('', [
          Validators.required,
  
        ]),
        daten: new FormControl('', [
          Validators.required,
  
        ]),
        poids: new FormControl('', [
          Validators.required,
  
        ]),
        image: new FormControl('', [
          Validators.required,
  
        ]),
      
      }
      this.ajoutForm= this.fb.group(formControls)
    }
    
    get nom() { return this.ajoutForm.get('nom') }
    get race() { return this.ajoutForm.get('race') }
    get daten() { return this.ajoutForm.get('daten') }
    get poids() { return this.ajoutForm.get('poids') }
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
    ajouterAnimal() {
      let data = this.ajoutForm.value;
      console.log(data);
      let anim = new Animal(
         undefined ,data.nom, data.race,JSON.parse(JSON.stringify(this.currentProp)),data.poids, data.daten,this.imgURL);
         console.log(anim); 
         this.currentProp.animal.push(anim);
         console.log(55)
         this.service.updateProp(this.currentProp.id!, this.currentProp)
      if(data.nom==0||data.race==0||data.daten==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });}else {    
      this.service.addAnimal(anim).subscribe(

  
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
      this.currentuser=localStorage.getItem("user")
      this.service.getPropById(this.service.userDetail().id).subscribe(Proprietaire=>{
        this.currentProp=Proprietaire
      })
    }

   
  
  }