import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'monday-angular';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000', {
      responseType: 'text' as 'json'
    }
    ).subscribe( v => console.log(v))
  }


  @ViewChild('dockBar') dockBar?: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '70px';
  
  toggleClick() {
      this.dockBar?.toggle();
  }




}
