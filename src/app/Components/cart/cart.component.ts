import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductService } from '../header/Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductNewService } from 'src/app/Services/product-new.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
product:Product | undefined;
  constructor(private productService:ProductNewService,private route:ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProductbyid(id);
  }
  goBack() {
    this.router.navigate(['/products']);
  }
}
