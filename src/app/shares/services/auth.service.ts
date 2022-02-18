import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//model
import { JwtToken } from '../models/JwtToken.model';
import { UserSignin,UserSignup } from '../models/user.model';

//rxj
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuthenticated:null,
    token:null
  });

  constructor(
    private http:HttpClient,
    private route:Router
  ) { 
    this.initToken();
  }

  /**
   * Verifie si le user est connecté ou par
   */
  private initToken():void{
    const token = localStorage.getItem('jwt');
    if(token){
      this.jwtToken.next({
        isAuthenticated: true,
        token: token
      });
    }else{
      this.jwtToken.next({
        isAuthenticated: false,
        token: null
      })
    }
    console.log(this.jwtToken.value)
  }

  public signup(credentials: UserSignup): Observable<UserSignup>{
    return this.http.post<UserSignup>('http://localhost:3000/auth/signup', credentials);
  }

  public signin(credentials: UserSignin): Observable<string>{
    
    return this.http.post<string>('http://localhost:3000/auth/signin', credentials).pipe(
      tap((token: string) => {
        token = JSON.stringify(token)
        this.jwtToken.next({
          isAuthenticated: true,
          token: token
        });
        localStorage.setItem('jwt', token);
      })
    );
  }
  

  logout():void{
    localStorage.setItem('jwt', '');
    this.jwtToken.next({
      isAuthenticated:null,
      token:null
    })
  }
  
}
