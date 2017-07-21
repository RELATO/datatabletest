import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo4Component } from './demo4.component';

const routes: Routes = [
 /*
  {
     path: '', component: Demo4Component
  }
*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo4RoutingModule { }
