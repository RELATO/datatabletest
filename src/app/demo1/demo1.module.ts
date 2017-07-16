import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demo1RoutingModule } from './demo1-routing.module';
import { Demo1Component } from './demo1.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Demo1RoutingModule
  ],
  declarations: [Demo1Component]
})
export class Demo1Module { }
