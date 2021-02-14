import { Component, OnInit } from '@angular/core';

import {BillingService} from '../services/billing.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  public billings:any;
  public errorMessage: any;

  constructor(private billingService:BillingService) { }

  ngOnInit(): void {
    this.billingService.getBilling()
      .subscribe(data => {
        this.billings = data
        ;
        console.log(data);
      }, err => {
        this.errorMessage = err.error.message;
      })
  }
}
