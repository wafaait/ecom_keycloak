import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {ProdcutListComponent} from './prodcut-list/prodcut-list.component';
import {CustomersComponent} from './customers/customers.component';
import {BillingComponent} from './billing/billing.component';


const routes: Routes = [
  {path: "products",component:ProductsComponent},
  {path: "suppliers",component: SuppliersComponent},
  {path:"prodcutsList",component:ProdcutListComponent},
  {path:"customers",component:CustomersComponent},
  {path:"billing",component:BillingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
