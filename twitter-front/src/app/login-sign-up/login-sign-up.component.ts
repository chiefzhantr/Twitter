import { Component } from '@angular/core';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent {
  // constructor(private authService: AuthService) { }

  onLoginSubmit(username: string, password: string) {
    // this.authService.login({ username, password }).subscribe((response) => {
    //   localStorage.setItem('access_token', response.access_token);
    //   // Redirect to home page or other protected page
    // });
  }
  onSignupSubmit(username: string, password: string, email: string) {
    // this.authService.login({ username, password }).subscribe((response) => {
    //   localStorage.setItem('access_token', response.access_token);
    //   // Redirect to home page or other protected page
    // });
  }

  isLogin = true;

  toggleForm() {
    this.isLogin = !this.isLogin;
  }
}
