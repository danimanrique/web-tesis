import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {
  public authToken;
  public url: string;

  constructor(private _router: Router, public _http: HttpClient) {
    this.url = environment.url;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated()) {
      return true;
    }
    this._router.navigate(['/sessions/signin']);
    return false;
  }

  isAuthenticated(): boolean {
    // return true; /* descomentar esta linea para hacer pruebas sin login */
    return this.getToken() != null ? true : false; /* descomentar esta linea para activar login */
  }

  getToken() {
    const tokenIn = localStorage.getItem('token');
    if (tokenIn) {
      this.authToken = tokenIn;
    } else {
      this.authToken = null;
    }
    return this.authToken;
  }
}