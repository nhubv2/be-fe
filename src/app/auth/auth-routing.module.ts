import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent, AuthRegsiterComponent } from './containers';


const routes: Routes = [
  {
    path: 'register',
    component: AuthRegsiterComponent
  },
  {
    path: 'login',
    component: AuthLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
