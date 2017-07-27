import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module'
import { Demo5RoutingModule } from './demo5-routing.module';
import { Demo5Component } from './demo5.component';
import { InlineEditComponent } from './inline.component';
import { NotificationService } from '../shared/services/notification.service'

@NgModule({
  imports: [
    CommonModule,
    Demo5RoutingModule,
    NgxDatatableModule,
    SharedModule
  ],
  declarations: [Demo5Component, InlineEditComponent],
  providers: [
  
    NotificationService
    
  ]
})
export class Demo5Module { }
