import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { DataUser } from '../interfaces/dataUser.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public currentUser: BehaviorSubject<DataUser|null> = new BehaviorSubject<DataUser|null>(null)
  constructor(private http: HttpClient) { }

  public getCurrentDataUser():Observable<DataUser|null>{

    if(this.currentUser.value){
      return this.currentUser
    }else{
      return this.http.get<DataUser|null>('http://localhost:3000/profile',{
        responseType: 'text' as 'json'
      // headers: new HttpHeaders
    }).pipe(
        tap( (user:DataUser|null) => {
          this.currentUser.next(user);
        }),
        switchMap(() => {
          return this.currentUser;
        })
      );
    }
    // return new BehaviorSubject({
    //     name:"salami",
    //     email:"salamisodikiolawale@gmail.com",
    //     phone:"0758954217",
    //     skype:"salamisodikiolawale@gmail.com",
    //     lieu:"Evry",
    //     fuseau:"GMT 12:PM",
    //     anniversaire:"23-12-1995",
    //   })
    }
}
