import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehousesComponent, WarehouseDetailComponent } from './containers';


const routes: Routes = [
  {
    path: '',
    component: WarehousesComponent
  },
  {
    path: 'create',
    component: WarehouseDetailComponent
  },
  {
    path: ':warehouseId',
    component: WarehouseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousesRoutingModule { }
