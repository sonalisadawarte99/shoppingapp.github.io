import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductNewService } from 'src/app/Services/product-new.service';
import { Router } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { TrashServiceService } from 'src/app/Services/trash-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]= [];
  filteredProducts: Product[] = [];
  searchKey : string="";
  searchText: string="";
  searchTerm : string="" ;
  filterPrice: boolean = false;
  filterRating: boolean = false;
  filterLocation: boolean = false;
  constructor(private productService:ProductNewService , private router: Router,private trashService: TrashServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.getProduct();
    this.productService.search.subscribe((val: any)=>{
      this.searchKey = val;
    })

    this.productService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

   let AddedProd = localStorage.getItem('product')
   if (Array.isArray(AddedProd)) {
    this.products = JSON.parse(AddedProd)as Product[];
  }
  }
  redirectToDetails(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      this.router.navigate(['/products', product.id]);
    }
  }
  addProduct() {
    this.router.navigate(['/addProduct']);
    // this.products.push()
  }

  confirmDelete(id: number) {
    if (confirm("Are you sure you want to delete this product?")) {

      const productIndex = this.products.findIndex(p => p.id === id);
      if (productIndex !== -1) {
        const deletedProduct = this.products.splice(productIndex, 1)[0];
        this.trashService.addToTrash(deletedProduct);
        // this.trashComponent.trash.push(deletedProduct);
        // deletedProduct.status = "deleted";
        // this.products.push(deletedProduct);
        
      // Perform soft delete logic here
      // Update the product's status or flag it as deleted
    }
  }
}

// filterProducts() {
//   // Apply filters based on selected checkboxes
//   this.filteredProducts = this.products.filter(product =>
//     (this.filterPrice ? product.price > 0 : true) &&
//     (this.filterRating ? product.rating > 0 : true) &&
//     (this.filterLocation ? product.location !== '' : true)
//     // Add more conditions for other filter checkboxes
//   );
// }

searchProducts(searchTerm: string): void {
  // Perform the search logic here, based on your specific requirements
  this.filteredProducts = this.products.filter((product: any) => {
    // Adjust the conditions based on the properties you want to search within the product object
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
}
}
