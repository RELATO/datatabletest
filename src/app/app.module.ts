import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { Demo1Module } from './demo1/demo1.module';
import { Demo2Module } from './demo2/demo2.module';
import { Demo3Module } from './demo3/demo3.module';
import { Demo4Module } from './demo4/demo4.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Demo1Module,
    Demo2Module,
    Demo3Module,
    Demo4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
