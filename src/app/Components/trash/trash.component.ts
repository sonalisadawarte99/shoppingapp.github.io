import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductNewService } from 'src/app/Services/product-new.service';
import { TrashServiceService } from 'src/app/Services/trash-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trash: Product[] = [];

  constructor(private productService: ProductNewService,private trashService: TrashServiceService) { }

  ngOnInit(): void {
    // this.trash = this.productService.getTrash();
  this.trash = this.trashService.getTrashItems();

  // restoreProduct(id: number) {
  //   const productIndex = this.trash.findIndex(p => p.id === id);
  //   if (productIndex !== -1) {
  //     const restoredProduct = this.trash.splice(productIndex, 1)[0];
  //     // restoredProduct.status = 'active';
  //     this.trash.push(restoredProduct);
  //     // this.productService.addProduct(restoredProduct);
  //   }
  }
}
