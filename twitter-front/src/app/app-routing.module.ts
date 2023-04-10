import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginSignUpComponent} from "./login-sign-up/login-sign-up.component";

const routes: Routes = [
  { path: 'login', component: LoginSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
