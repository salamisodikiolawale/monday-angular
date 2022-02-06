import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { DataUser } from '../shares/interfaces/dataUser.interface';
// import { ProfileService } from '../shares/services/profile.service';


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

  public currenteDataUser?: Observable<null>;
  
  constructor() { }

  ngOnInit(): void {
    // this.currenteDataUser = this.profileService.getCurrentDataUser();
  }


}
