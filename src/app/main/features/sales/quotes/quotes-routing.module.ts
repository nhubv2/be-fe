import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent, QuoteDetailComponent } from './containers';


const routes: Routes = [
  {
    path: '',
    component: QuotesComponent
  },
  {
    path: 'create',
    component: QuoteDetailComponent
  },
  {
    path: ':quoteId',
    component: QuoteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
