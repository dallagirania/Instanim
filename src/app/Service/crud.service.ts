import { Injectable } from '@angular/core';
import { Proprietaire } from '../Model/Proprietaire.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";


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
 


}