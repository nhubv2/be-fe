import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

// Main conponent & layout
import { MainComponent } from './main.component';
import * as fromLayout from './layout';


@NgModule({
  declarations: [
    MainComponent,
    ...fromLayout.layout
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
