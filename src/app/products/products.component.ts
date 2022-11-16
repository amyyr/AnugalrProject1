import { Component, OnInit } from '@angular/core';
import { Product } from '../core/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products : Product[]=[]
  constructor() { }

  ngOnInit(): void {
    this.products=[
      {id:'1',title:'t-shit1',quantity:10,price:100,like:12,picture:'https://webplus.tn/wp-content/uploads/2021/07/tshirt-2.jpg'},
      {id:'2',title:'t-shit2',quantity:100,price:299,like:1,picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrps9KwwlmiRwdK8LAdlzxUvwYRAOt9KGLUMhs3xQ&s'},
      {id:'3',title:'t-shit3',quantity:47,price:399,like:8,picture:'http://cache.mrporter.com/variants/images/3633577411310822/in/w2000_q60.jpg'},
      {id:'4',title:'t-shit4',quantity:29,price:499,like:10,picture:'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg'}
    ]
  }
  buy(id:string){
    this.products.map((Product)=>Product.id.match(id)?Product.quantity--:'product not fund')
  }

}
