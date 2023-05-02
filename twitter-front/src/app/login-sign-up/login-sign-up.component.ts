import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent {
  constructor(private apiService: ApiService, private router : Router) { }
  logged = false;
  username: string = '';
  password: string = '';
  email: string ='';
  isLogin: boolean = true;
  want_to_register: boolean = false;
  code: string = ''
  codeTyped : string = '';
  firstname : string ='';
  lastname: string ='';
  phone : string = '';
  random4DigitString(){
    const min = 1000;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber.toString();
  };
  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token){
      this.logged=true;
    }
    // this.verify();
  }
  login() {
    this.apiService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      localStorage.setItem('username', data.username)
      this.logged=true;
      this.username = '';
      this.password = '';
      this.email=''
    })
    this.router.navigate(['news'])
  }
  pushedRegister(){
    this.want_to_register=!this.want_to_register
    this.sendCode()
    // this.isLogin=!this.isLogin;
  }
  // @ts-ignore
  sendCode() {
    this.code = this.random4DigitString()
    this.apiService.sendCode(this.email, this.code).subscribe((data: any) => {
      console.log("Success")
    })
  }
  verify(){
    if (this.code == this.codeTyped){
      this.apiService.register(this.username, this.password, this.email, this.firstname, this.lastname, this.phone).subscribe((data:any)=>{
        this.username = '';
        this.password = '';
        this.email=''
        this.isLogin=!this.isLogin
      })
    }
    else{
      alert("Error")
    }
  }

  toggleForm() {
    this.isLogin=!this.isLogin;
  }

}
