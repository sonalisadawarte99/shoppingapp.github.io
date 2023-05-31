import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { Product } from './Components/products/product.model';
import { CartComponent } from './Components/cart/cart.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:id',component:CartComponent},
{
  path:'addProduct' , component: AddProductComponent
},
{
  path: 'sidebar' , component : SidebarComponent
},
{
  path: 'trash' , component: TrashComponent
}
  // {path:'',redirectTo:'Product' ,pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
