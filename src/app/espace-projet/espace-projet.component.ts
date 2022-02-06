import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { JwtToken } from '../shares/models/JwtToken.model';
import { AuthService } from '../shares/services/auth.service';

@Component({
  selector: 'app-espace-projet',
  templateUrl: './espace-projet.component.html',
  styleUrls: ['./espace-projet.component.scss']
})
export class EspaceProjetComponent implements OnInit {

  public mails:Array<{nom:string, jour:number}>=[
    {
      nom:"Danie",
      jour:2
    },
    {
      nom:"Danie",
      jour:2
    },
    {
      nom:"Danie",
      jour:2
    }
  ];

  public suggestions:Array<{nom:string, url:any}>=[
    {
      nom:"Danie",
      url: "backoffice1.png",
    },
    {
      nom:"Danie",
      url: "backoffice2.png",
    },
    {
      nom:"Danie",
      url: "backoffice1.png",
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

  public jwtToken: JwtToken ={isAuthenticated:null, token:null};
  public subscription!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
    this.getRecent()

    this.subscription = this.authService.jwtToken.subscribe( (jwtToken:JwtToken) => {
      this.jwtToken = jwtToken
    })
  }

  ngOndestroy():void{
    if(this.subscription){this.subscription.unsubscribe()}
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
