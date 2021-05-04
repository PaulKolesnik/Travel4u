import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser.user.role == "Agent") {
      // logged in with agent 
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/not-found'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
