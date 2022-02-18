import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { EspaceProjetComponent } from './espace-projet/espace-projet.component';
import { EspaceTravailComponent } from './espace-travail/espace-travail.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './shares/guards/auth.guard';



const routes: Routes = [

  { path: 'espace-travail',canActivate:[AuthGuard], component: EspaceTravailComponent },
  { path: 'espace-projet', canActivate:[AuthGuard], component: EspaceProjetComponent },
  { path: 'profile', canActivate:[AuthGuard], component: ProfileComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
