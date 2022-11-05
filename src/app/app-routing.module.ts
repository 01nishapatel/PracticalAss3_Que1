import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispBasicComponent } from './disp-basic/disp-basic.component';

import { UserComponent } from './user/user.component';


const routes: Routes = [
 {
  path:"dispbasic",
  component:DispBasicComponent
 },
 
 {
  path:"User",
  component:UserComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
