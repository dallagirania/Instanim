import { Injectable } from '@angular/core';
import { Proprietaire } from '../Model/Proprietaire.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Animal } from '../Model/Animal.model';
import { Veterinary } from '../Model/Veterinary.model';
import { Contact } from '../Model/Contact.model';
import { Services } from '../Model/Services.model';
import { Publication } from '../Model/Publication.model';


const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/Json'})
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  registerProprietaireUrl = "http://localhost:8081/api/proprietaire/registerproprietaire"
  loginProprietaireUrl="http://localhost:8081/api/proprietaire/loginproprietaire"
  apiUrl="http://localhost:8081/api"
  helper=new JwtHelperService();
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  addProprietaire(proprietaire: Proprietaire) {
    return this.http.post<any>(this.registerProprietaireUrl, proprietaire);
  }
  
  loginproprietaire(proprietaire: Proprietaire) {
    return this.http.post<any>(this.loginProprietaireUrl, proprietaire);
  }
  getVet():Observable<Veterinary[]>{
    return this.http.get<Veterinary[]>(this.apiUrl+"/vet");
  }
  getProp():Observable<Proprietaire[]>{
    return this.http.get<Proprietaire[]>(this.apiUrl+"/proprietaire");
  }
  userDetail(){
    let token:any=localStorage.getItem('mytoken');
    let decotoken=this.helper.decodeToken(token);
    return decotoken.data
  }
  getPropById(id : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/proprietaire/${id}`);
  }
  updateProp(id:number,proprietaire:Proprietaire):Observable<Proprietaire>{
    const Url=`${this.apiUrl+"/proprietaire"}/${id}`
    return this.http.put<Proprietaire>(Url,proprietaire,httpOption)
  }
  addAnimal(animal:Animal){
    return this.http.post<any>(this.apiUrl+"/animal", animal);
  }
  getAnimalByProp(id:number):Observable<any[]>{
    return this.http.get<any>(`${this.apiUrl}/animal/list-animal-by-prop/${id}`)  
  }
  getAnimal():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl+"/animal");
  }

  addContact(contact:Contact){
    return this.http.post<any>(this.apiUrl+"/contact", contact);
  }
  adddPub(publication:Publication){
    return this.http.post<any>(this.apiUrl+"/publication", publication);
  }

  getSer():Observable<Services[]>{
    return this.http.get<Services[]>(this.apiUrl+"/service");
  }
}