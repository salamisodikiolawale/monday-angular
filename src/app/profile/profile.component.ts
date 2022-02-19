import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserSignup } from '../shares/models/user.model';
import { UserService } from '../shares/services/user.service';
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

  public userdatas:BehaviorSubject<UserSignup> = new BehaviorSubject<any>({});

  
  constructor(
    private userService:UserService
  ) { }


  public findOne(email:string){
    this.userService.findOne(email).subscribe((userdata:UserSignup) => {      
        this.userdatas.next(userdata);
    });
  }


  ngOnInit(): void {
    this.findOne("salamisodikiolawale@gmail.com");
  }


}
