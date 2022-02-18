import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shares/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
    
    this.authService.signup(this.form.value).subscribe();
    this.router.navigate(['/signin']);
    
  }


}
