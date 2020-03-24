import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
