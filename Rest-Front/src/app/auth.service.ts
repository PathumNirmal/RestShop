import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private webReqService: WebRequestService, private _router: Router) { }

  registerUser(user: any) {
    return this.webReqService.post(`user/signup`, user);
  }

  loginUser(user: any) {
    return this.webReqService.post(`user/login`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/products']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
