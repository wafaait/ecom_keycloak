import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id:1,name:"Computer HP 54",price:1000},
      {id:2,name:"Printer  ER ",price:1000},
      {id:3,name:"Smart Phone Sumsung 59",price:1000},



  ]
  }

}
