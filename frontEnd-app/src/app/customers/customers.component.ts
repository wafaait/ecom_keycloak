import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {CustomersService} from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public customers;
  public errorMessage: any;

  constructor(private customerService:CustomersService) { }

  ngOnInit(): void {
    this.customerService.getCustomers()
      .subscribe(data=>{
        this.customers=data;
        console.log(data);
      },err=>{
        this.errorMessage=err.error.message;
      })
  }


}
