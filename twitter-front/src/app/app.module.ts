import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchbarComponent,
    NewsComponent,
    ProfileComponent,
    SettingsComponent,
    LoginSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
