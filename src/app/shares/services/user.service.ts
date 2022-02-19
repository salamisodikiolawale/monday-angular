import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSignup } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private route:Router,
    private http:HttpClient
  ) { }

  public findOne(email:string):Observable<UserSignup>{
    return this.http.get<UserSignup>('http://localhost:3000/users/findOne', {
      params:{
        email:email
      },
    });
  }
}
