import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  /**
   * Supplied credentials are compared against hardcoded values. 
   *  
   * @param username
   * @param password 
   * @returns 
   */
  authenticate(username:string, password:string): boolean {
    if(username === 'dineshb1710' && password === 'Janvi@123') {
      return true;
    }
    return false;
  }

    /**
   * This will remove the current user from the session & redirects back to login page. 
   */
     logout() {
      sessionStorage.removeItem('username');
    }

    /**
     * This method specifies whether we have a user in the session or not.
     * 
     * @returns 
     */
    isUserLoggedIn() : boolean {
      return sessionStorage.getItem('username') === null ? true : false;
    }
}
