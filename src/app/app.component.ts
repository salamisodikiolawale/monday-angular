import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JwtToken } from './shares/models/JwtToken.model';
import { AuthService } from './shares/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'monday-angular';
  
  public jwtToken: JwtToken ={isAuthenticated:null, token:null};
  public subscription!: Subscription;

  constructor(private authService:AuthService, private route:Router){}

  ngOnInit(): void {
    this.subscription = this.authService.jwtToken.subscribe( (jwtToken:JwtToken) => {
      this.jwtToken = jwtToken
    })
  }

  logout():void{
    localStorage.setItem('jwt', '');
    this.route.navigateByUrl('/welcome');

  }

  ngOndestroy():void{
    if(this.subscription){this.subscription.unsubscribe()}
  }



}
