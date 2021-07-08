import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  validationMessage = '';
  isInvalidUser = false;

  constructor(private router: Router, private authenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  /**
   * This will validates the user credentials
   * 'Hardcoded Authentication'
   */
  validateLogin() {
    if(this.authenticationService.authenticate(this.username, this.password)) {
      
      this.validationMessage = 'Authentication Successful..!!';
      this.isInvalidUser = false;
      
      // Save user information into the session..
      this.doSession();

      // Navigate to Welcome Screen..
      this.router.navigate(['welcome']);

    } else {
      this.validationMessage = 'Authentication Failed..!!';
      this.isInvalidUser = true;
    }
  }

  /**
   * Clears the Login Form.
   */
  reset() {
    this.username = '';
    this.password = '';
  }

  /**
   * The username will be added to the sessionStorage.
   */
  doSession() {
    sessionStorage.setItem('username', this.username);
  }
}
