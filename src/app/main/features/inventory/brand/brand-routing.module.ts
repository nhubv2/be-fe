import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent, BrandDetailComponent } from './containers';


const routes: Routes = [
  {
    path: '',
    component: BrandsComponent
  },
  {
    path: 'create',
    component: BrandDetailComponent
  },
  {
    path: ':brandId',
    component: BrandDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
