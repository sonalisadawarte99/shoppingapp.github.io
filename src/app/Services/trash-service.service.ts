import { Injectable } from '@angular/core';
import { Product } from '../Components/products/product.model';

@Injectable({
  providedIn: 'root'
})
export class TrashServiceService {
  private trashItems: Product[] = [];
  constructor() { }

  getTrashItems(): Product[] {
    return this.trashItems;
  }

  addToTrash(item: Product) {
    this.trashItems.push(item);
  }

  removeFromTrash(item: Product) {
    const index = this.trashItems.indexOf(item);
    if (index !== -1) {
      this.trashItems.splice(index, 1);
    }
  }
}
