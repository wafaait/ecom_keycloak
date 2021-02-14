import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import {KeycloakSecurityService} from './services/keycloak-security.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptorService} from './services/request-interceptor.service';
import { ProdcutListComponent } from './prodcut-list/prodcut-list.component';
import { CustomersComponent } from './customers/customers.component';
import { BillingComponent } from './billing/billing.component';

/*
export function kcFactoty(kcSecurity:KeycloakSecurityService) {
  return()=>kcSecurity.init();

}

 */
const SecService= new KeycloakSecurityService();

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent,
    ProdcutListComponent,
    CustomersComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:KeycloakSecurityService,useValue:SecService},
    /*{provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcFactoty,multi:true},*/
    {provide:HTTP_INTERCEPTORS,useClass:RequestInterceptorService,multi:true}
  ],
  entryComponents:[AppComponent]
  /*bootstrap: [AppComponent]*/
})
export class AppModule implements DoBootstrap{
  ngDoBootstrap(appRef: ApplicationRef): void {
    SecService.init()
      .then(res=>{
        console.log(res);
        appRef.bootstrap(AppComponent);

      }).catch(err=>{
         console.log(err);

    });
  } }
