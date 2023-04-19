import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router) {
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
}
