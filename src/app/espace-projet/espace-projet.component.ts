import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-espace-projet',
  templateUrl: './espace-projet.component.html',
  styleUrls: ['./espace-projet.component.scss']
})
export class EspaceProjetComponent implements OnInit {

  public mails:Array<{nom:string, url:any, jour:number}>=[
    {
      nom:"Danie",
      url: "backoffice1.png",
      jour:2
    },
    {
      nom:"Danie",
      url: "backoffice2.png",
      jour:2
    }
  ];

  public recents:Array<{titre:string, cocher:boolean}>=[]

  public listeActionProfil:Array<{titre:string, active:boolean}>=[
    {
      titre:"Paramétrer le Compte",
      active:true
    },
    {
      titre:"Importer votre photo",
      active:true
    },
    {
      titre:"Activer les notifications",
      active:false
    },
    {
      titre:"Inviter des collaborateurs",
      active:true
    },
    {
      titre:"Compléter Profil",
      active:false
    },
    {
      titre:"Installer notre Appli Mobile",
      active:true
    },
  ]
  constructor() { }

  ngOnInit(): void {
    this.getRecent()
  }

  public getRecent():void{
      this.recents = [
        {
          titre: "Projet client",
          cocher:true
        },
        {
          titre: "Nouveau  tableau",
          cocher:false
        },
        {
          titre: "Partie de zero",
          cocher:true
        },
    ]
  }


}
