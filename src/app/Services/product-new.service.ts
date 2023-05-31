import { Injectable } from '@angular/core';
import { Product } from '../Components/products/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductNewService {
  trash: Product[] = [];
  // public search: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.product);
products:Product[]=[
  new Product(
    1,
    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    'Your perfect pack for everyday use and walks in the forest.',
    109.95,
    5,
    ['../assets/bag.jpg'],
    
    
        // ***,
        // GoodProduct
    // https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg
    // "category":"men's clothing",
    // "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120
  ),
  new Product(
    2,
    'Mens Casual Premium Slim Fit T-Shirts',
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket.',
    22.3,
    6,
    ['../assets/t-shirt.jpeg']
    ),

]

public search = new BehaviorSubject<string>("");

  constructor() { }
  getProduct(){
    return this.products;
  }
  getProductbyid(id:number){
    return this.products.find(product =>
      product.id === id)
  }

  getTrash(): Product[] {
    return this.trash;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  searchProducts(searchTerm: string): void {
    this.search.next(searchTerm);
  }
}
