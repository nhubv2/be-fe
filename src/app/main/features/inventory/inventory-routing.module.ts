import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';


const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'brands' },
      {
        path: 'brands',
        loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'warehouses',
        loadChildren: () => import('./warehouses/warehouses.module').then(m => m.WarehousesModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
