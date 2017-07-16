import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MdSidenavModule, MdNativeDateModule,
         MaterialModule } from '@angular/material';
import 'hammerjs';
import { Demo2RoutingModule } from './demo2-routing.module';
import { Demo2Component } from './demo2.component';
import { FormsComponent, PasswordMatcher } from '../forms/forms.component';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { SwitchControlComponent } from '../switch-control/switch-control.component';

@NgModule({
  imports: [
    CommonModule,
    Demo2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MdSidenavModule, MdNativeDateModule,
    MaterialModule,
  ],
  declarations: [Demo2Component,
    FormsComponent,
    ReactiveFormsComponent,
    SwitchControlComponent,
    PasswordMatcher
  ],
})
export class Demo2Module { }
