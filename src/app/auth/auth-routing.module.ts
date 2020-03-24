import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent, AuthRegsiterComponent } from './containers';


const routes: Routes = [
  {
    path: 'register',
    component: AuthRegsiterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'login',
    component: AuthLoginComponent,
    data: { title: 'Login' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
