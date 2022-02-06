import { EmailValidator } from "@angular/forms";

export interface UserSignup{
    email:string;
    password?:string;
    name?:string;
    phone?:string;
    skype?:string;
    lieu?:string;
    fuseau?:string;
    anniversaire?:string;
}


export interface UserSignin{
    email:string;
    password?:string;
}