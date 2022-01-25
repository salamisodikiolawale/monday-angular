import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  menus:string[]=[
    "infos personnelles",
    "Statut de travail",
    "Mot de passe",
    "Préférences",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
