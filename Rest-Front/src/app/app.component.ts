import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Rest-Front';

  constructor( public _authService: AuthService) { }

  userEmail = this._authService.user?.email;

  logout() {
    this._authService.logoutUser();
  }

  loggedIn() {
    return this._authService.loggedIn();
  }
}
