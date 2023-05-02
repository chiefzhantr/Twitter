import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logged = false;
  currentUserId = -1;
  constructor(private apiService: ApiService,) {
  }
  ngOnInit() {
    this.apiService.getCurrentUserId()
    this.logged = this.apiService.currentUserId!= -1;
  }

}
