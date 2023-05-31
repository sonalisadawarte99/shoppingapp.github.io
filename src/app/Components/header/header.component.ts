import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductNewService } from 'src/app/Services/product-new.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public searchTerm : string ="";
showsidebar : boolean= false ;
// public search = new BehaviorSubject<string>("");
  constructor(private  productService:ProductNewService ,private router: Router ) { }

  ngOnInit(): void {
  }

  // search(event: any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.productService.search.next(this.searchTerm);
  // }

  
  search(): void {
    this.productService.searchProducts(this.searchTerm); // Call the searchProducts method in the product service
  }

  sidebar(){
    this.router.navigate(['/sidebar']);
    this.showsidebar = !this.showsidebar
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  goToTrash(): void {
    this.router.navigate(['/trash']);
  }

  // searchProducts(searchTerm: string): void {
  //   // Perform the search logic here, based on your specific requirements
  //   this.filteredProducts = this.products.filter((product: any) => {
  //     // Adjust the conditions based on the properties you want to search within the product object
  //     return (
  //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       product.description.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });
  // }
}
