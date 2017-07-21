import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MdSidenavModule, MdNativeDateModule,
         MaterialModule } from '@angular/material';
import 'hammerjs';
import { Demo4RoutingModule } from './demo4-routing.module';
import { Demo4Component } from './demo4.component';



@NgModule({
  imports: [
    CommonModule,
    Demo4RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MdSidenavModule, MdNativeDateModule,
    MaterialModule,
  ],
  declarations: [
    Demo4Component
  ],
})
export class Demo4Module { }
