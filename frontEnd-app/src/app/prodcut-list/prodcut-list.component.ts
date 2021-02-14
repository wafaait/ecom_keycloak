import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-prodcut-list',
  templateUrl: './prodcut-list.component.html',
  styleUrls: ['./prodcut-list.component.css']
})
export class ProdcutListComponent implements OnInit {
  public prodcuts:any;
  public errorMessage: any;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProdcuts()
      .subscribe(data=>{
        this.prodcuts=data;
        console.log(data);
      },err=>{
        this.errorMessage=err.error.message;
      })
  }

}
