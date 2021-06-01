import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }



  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let result = false;
    let userdata = this._authService.getUserDetails()
    if (userdata) {
      result = true;
    }
    else {
      this._router.navigate(['/']);
    }
    return result;
  }

  canActivateAdmin(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let result = false;
    let userdata = this._authService.getUserDetails()
    if (userdata){
    if (userdata["is_admin"] || userdata["is_superadmin"]) {
      result = true;
    }
    }
    else {
      this._router.navigate(['/']);
    }
    return result;
  }

}