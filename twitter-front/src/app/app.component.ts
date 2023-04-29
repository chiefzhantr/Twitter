import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";
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
  email: string ='';
  isLogin: boolean = true;
  want_to_register: boolean = false;
  code : string | null ='';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private http: HttpClient,) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token){
      this.logged=true;
    }
    this.code = this.route.snapshot.queryParamMap.get('code');
    this.verify();
  }
  login() {
    this.apiService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged=true;
      this.username = '';
      this.password = '';
      this.email=''
    //   call functions
    })
  }
  logout(){
    localStorage.removeItem('token');
    this.logged=false;
  }
  pushedRegister(){
    this.apiService.register(this.username, this.password, this.email).subscribe((data:any)=>{
      this.username=''
      this.password=''
      this.want_to_register=!this.want_to_register
    })
  }
  verify(){
    this.apiService.verify(this.code).subscribe(
      response => {
        if (response['success']) {
          console.log('Account confirmed');
        } else {
          console.log('Wrong verification code');
        }
      },
      error => console.log('Error')
    );
  }

  toggleForm() {
    this.isLogin=!this.isLogin;
  }
}
