import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import * as fromContainers from './containers';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
