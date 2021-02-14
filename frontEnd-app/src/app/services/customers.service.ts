import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KeycloakSecurityService} from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient,
              private keycloakSecurityService:KeycloakSecurityService) { }

  public getCustomers(){
    return this.http.get("http://localhost:8081/costumers");


  }
}
