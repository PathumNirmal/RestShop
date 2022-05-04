import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private _authService: AuthService, private _router: Router, private jwtService: JwtTokenService){ }

  // canActivate(): boolean {
  //   if (this._authService.loggedIn()) {
  //     return true
  //   } else {
  //     this._router.navigate(['login'])
  //     return false
  //   }
  // }

  canActivate(): boolean {
      if (this._authService.loggedIn()) {
        if (this.jwtService.isTokenExpired()) {
          this._authService.logoutUser();
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
      // } else {
      //   return new Promise((resolve) => {
      //     this._authService.loginUser().then((e) => {
      //        resolve(true);
      //     }).catch((e) => {
      //       // Should Redirect Sign-In Page
      //     });
      //   });
      // }
  }
}
