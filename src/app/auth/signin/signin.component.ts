import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shares/services/auth.service';
import { UserSignup, UserSignin } from 'src/app/shares/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form= new FormGroup({});
  public error:string=""

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  submit():void{
    
    this.authService.signin(this.form.value).subscribe( (token:string) => {
      
      this.router.navigate(['/espace-projet'])
    }, err => {this.error=err.error});
  }

}
