import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => UserModule) },
      { path: 'product', component: ProductComponent },
      { path: 'product-detail', component: ProductDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
