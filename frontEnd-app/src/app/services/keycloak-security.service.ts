import { Injectable } from '@angular/core';
import{KeycloakInstance} from "keycloak-js";
declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc;

  constructor() { }

  public  init(){
    return new Promise((resolve, reject)=>{
      console.log("Security Initialisation ......");
      this.kc=new Keycloak({
        url:"http://localhost:8080/auth",
        realm:"my-ebillingManagement-realm",
        clientId:"AngularProductsApp"
      });
      this.kc.init({
        // onLoad:'login-required'
        // au demmarage il va verifier c'st l'utilisateyr est deja autentifié
        onLoad:'check-sso',
        //promiseType:'native'

      }).then((authenticated)=>{
        resolve({auth:authenticated,token:this.kc.token});

      }).catch(err=>{
        reject(err);
      });

    })



  }


}
