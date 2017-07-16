import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demo3RoutingModule } from './demo3-routing.module';
import { Demo3Component } from './demo3.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ServerPagingComponent } from '../demo/paging/paging-server.component';

@NgModule({
  imports: [
    CommonModule,
    Demo3RoutingModule,
   NgxDatatableModule,
  ],
  declarations: [Demo3Component, ServerPagingComponent,],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Demo3Module { }
