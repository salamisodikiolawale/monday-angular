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

  { path: '', component: WelcomeComponent },
  { path: 'espace-travail', component: EspaceTravailComponent },
  { path: 'espace-projet', canActivate:[AuthGuard], component: EspaceProjetComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sigin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
