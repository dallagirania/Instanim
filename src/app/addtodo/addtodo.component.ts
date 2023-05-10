import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Animal } from '../Model/Animal.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Proprietaire } from '../Model/Proprietaire.model';
import { Tache } from '../Model/Tache.model';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  nbranim=0;
  total=0;
  liste:Animal[]=[]
 ajoutForm: FormGroup
 currentProp=new Proprietaire();
 user:any
 currentuser:any
 tache1:Tache[]=[];
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
   ) { 
      this.user=this.service.userDetail()

      let formControls = {
        titre: new FormControl('', [
          Validators.required,
  
        ]),
       
        description: new FormControl('', [
          Validators.required,
  
        ]),
        date: new FormControl('', [
          Validators.required,
  
        ]),
        anim: new FormControl('', [
          Validators.required,
  
        ]),
      
      }
      this.ajoutForm= this.fb.group(formControls)
    }
    
    get titre() { return this.ajoutForm.get('titre') }
    get description() { return this.ajoutForm.get('description') }
    get date() { return this.ajoutForm.get('date') }
    get anim() { return this.ajoutForm.get('anim') }


    ajouterTache() {
      let data = this.ajoutForm.value;
      console.log(data);
      
      let tache =new Tache(
         undefined ,data.titre,data.anim, data.date,data.description,JSON.parse(JSON.stringify(this.currentProp)));
         console.log(tache); 
         this.tache1=this.currentProp.tache
         this.tache1.push(tache);
         console.log(55)
         this.service.updateProp(this.currentProp.id!, this.currentProp)
      if(data.titre==0||data.date==0||data.description==0||data.anim==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });}else {    
      this.service.addTache(tache).subscribe(

  
        res => {
          console.log(res);
          this.toast.success({
            detail:'success msg',
            summary:'Ajout avec Succés'
          }); 
  
          this.router.navigate(['/todolists']);
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
      this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
        this.liste=proprietaire.animal
        this.nbranim=proprietaire.animal.length
        console.log(this.nbranim)
       
      })
    }

  
  }