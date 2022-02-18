import { Component, OnInit } from '@angular/core';
import { JwtToken } from '../shares/models/JwtToken.model';
import { AuthService } from '../shares/services/auth.service';
// import { tap } from  'rxjs/operators/tap'
// import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  isShowProfile:boolean=false

  public jwtToken: JwtToken ={
    isAuthenticated:null,
    token:null
  }
  constructor() { }

  ngOnInit(): void {}
}
