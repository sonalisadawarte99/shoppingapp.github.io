import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Product } from '../products/product.model';
import { ProductService } from '../header/Services/product.service';
import { ProductNewService } from 'src/app/Services/product-new.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
productForm !: FormGroup ;
productList: Product[] = [];
selectedLocations: string[] = [];
  constructor(private formbuilder : FormBuilder,private productService: ProductNewService) { }

  ngOnInit(): void {
 this.productForm = this.formbuilder.group({
  name :['', [Validators.required,Validators.maxLength(50)]],
  decs : ['',[Validators.required]],
  price:['',[Validators.required]],
  Qty : ['' , [Validators.required]],
  location1 :['',[Validators.required]],
  stock : ['',[Validators.required]],
  imgUrls : ['' ,[Validators.required]]

 })
  }

  addP(){
    console.log(this.productForm.value);
    const product = this.productForm.value;
    this.productService.addProduct(product)
    console.log(product);
    localStorage.setItem('product' ,JSON.stringify(this.productForm.value));
    // if (this.productForm.valid) {
    //   const product = this.productForm.value;
    //   console.log(product);
    //   this.productService.addProduct(product); // Call a service method to add the product
    //   this.productForm.reset(); 
    // product: Product
    
    // this.productList.push(product);
  }

  updateSelectedLocations(location: any,e : any) {
    if (e.target.checked) {
      this.selectedLocations.push(location);
    } else {
      const index = this.selectedLocations.indexOf(location);
      if (index !== -1) {
        this.selectedLocations.splice(index, 1);
      }
    }
  }
  // checkValue(data, e) {

  //   if (e.target.checked) {
  //     this.disqArr.push(data);
  //   } else {
  //     this.disqArr.splice(this.disqArr.indexOf(data), 1);
  //   }

  // }
}
// }
