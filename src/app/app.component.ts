import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'monday-angular';
  isShowProfile:boolean=false

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000', {
      responseType: 'text' as 'json'
    }
    ).subscribe( v => console.log(v))
  }


}
