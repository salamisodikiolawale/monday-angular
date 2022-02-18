import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtToken } from '../shares/models/JwtToken.model';
import { AuthService } from '../shares/services/auth.service';
import { tap } from  'rxjs/operators/tap'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public jwtToken:JwtToken = {
    isAuthenticated:null,
    token:null
  }
  constructor(
    private route:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  //  this.logout();

    this.authService.jwtToken.pipe(
      tap( (jwtToken:JwtToken) => {
        // if(jwtToken){
        //   this.route.navigateByUrl('/espace-projet')
        // }
        this.jwtToken = jwtToken
      })
    )
  }




  logout():void{
    localStorage.setItem('jwt', '');
    this.route.navigateByUrl('/sigin');

  }
}
