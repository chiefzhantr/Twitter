import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // @ts-ignore
  constructor(private router: Router, private apiService: ApiService) {
  }

  showNews() {
    this.router.navigate(['news'])
  }
  showProfile() {
    this.router.navigate(['profile'])
  }
  showSettings() {
    this.router.navigate(['settings'])
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    this.router.navigate([''])
  }
}
