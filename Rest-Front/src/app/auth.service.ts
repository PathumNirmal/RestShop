import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { UserModel } from './models/user.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  
  user: UserModel | null;
  expire: any;
  
  constructor( private webReqService: WebRequestService, private _router: Router) {
    this._isLoggedIn$.next(!!this.getToken());
    this.user = this.getUser(this.getToken());
  }

  // role!: String[];
  // public userEmail!: string;

  registerUser(user: any) {
    return this.webReqService.post(`user/signup`, user);
  }

  loginUser(user: any) {
    return this.webReqService.post(`user/login`, user).pipe(
      tap((response: any) => {
        this.user = this.getUser(response.token);
      })
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate([ '/products' ]);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  private getUser(token: string): UserModel | null {
    if (!token) {
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }

  refresh(): void {
    window.location.reload();
  }
}
