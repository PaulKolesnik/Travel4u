import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PanelAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser.user.role == "Admin" || currentUser.user.role == "Agent") {
      // logged in 
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/not-found'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
