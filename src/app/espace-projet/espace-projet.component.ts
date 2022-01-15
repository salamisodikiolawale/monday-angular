import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-espace-projet',
  templateUrl: './espace-projet.component.html',
  styleUrls: ['./espace-projet.component.scss']
})
export class EspaceProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('dockBar') dockBar?: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '200px';
  public dockSize: string = '72px';
}
