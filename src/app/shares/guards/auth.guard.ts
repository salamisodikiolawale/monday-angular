import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/JwtToken.model';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators/map'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.jwtToken.pipe(
        map( (jwtToken:JwtToken) => {
          return jwtToken.isAuthenticated
        })
      )
  }
  
}
