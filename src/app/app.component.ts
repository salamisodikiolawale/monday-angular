import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from './shares/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'monday-angular';
  

  constructor(private authService:AuthService){}

  ngOnInit(): void {
  }


}
