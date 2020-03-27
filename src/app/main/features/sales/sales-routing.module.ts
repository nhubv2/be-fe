import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';


const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'quotes' },
      {
        path: 'quotes',
        loadChildren: () =>  import('./quotes/quotes.module').then(m => m.QuotesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
