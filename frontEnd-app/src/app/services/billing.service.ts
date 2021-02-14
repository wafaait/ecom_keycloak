import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KeycloakSecurityService} from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  constructor(private http: HttpClient,
              private keycloakSecurityService:KeycloakSecurityService) { }

  public getBilling(){
    return this.http.get("http://localhost:8085/fullBill/1");


  }
}
