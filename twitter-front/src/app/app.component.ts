import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'twitter-front';
  logged = false;
  username: string = '';
  password: string = '';
  isLogin: boolean = true;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token){
      this.logged=true;
    }
  }
  login() {
    this.apiService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged=true;
      this.username = '';
      this.password = '';
    //   call functions
    })
  }
  logout(){
    localStorage.removeItem('token');
    this.logged=false;
  }
  // showSidebarAndSearchbar() {
  //   // Get the current route
  //   const route = this.authService.url;
  //
  //   // Return true if the current route is not the login page
  //   return route !== '/login';
  // }


  toggleForm() {
    this.isLogin=!this.isLogin;
  }
}
