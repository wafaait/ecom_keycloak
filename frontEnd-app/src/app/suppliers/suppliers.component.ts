import { Component, OnInit } from '@angular/core';
import {SuppliersService} from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  public suppliers:any;
  public errorMessage: any;

  constructor(private suppliersService:SuppliersService) { }

  ngOnInit(): void {
    this.suppliersService.getSuppleirs()
      .subscribe(data=>{
        this.suppliers=data;
      },err=>{
        this.errorMessage=err.error.message;
      })
  }

}
