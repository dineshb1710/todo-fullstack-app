import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authenticationService: HardcodedAuthenticationService, private router: Router) { }

  /**
   * With this users with proper authentication can only visit routes directly.
   * @param route 
   * @param state 
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }

    // Redirect to Login Page, in-case user is not logged-in..
    this.router.navigate(['login']);
    return false;
  }

  
}
