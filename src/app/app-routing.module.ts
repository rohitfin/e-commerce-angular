import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./index/index.module').then(m => IndexModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
