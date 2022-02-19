import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imported syncfusion sidebar module from navigations package
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import {MatIconModule} from '@angular/material/icon'
import {MatRadioModule} from '@angular/material/radio';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

// import { ProfileService } from './shares/services/profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspaceProjetComponent } from './espace-projet/espace-projet.component';
import { EspaceTravailComponent } from './espace-travail/espace-travail.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

//Service
import { AuthService } from './shares/services/auth.service';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

//guards
import { AuthGuard } from './shares/guards/auth.guard';
import { BtnAuthenticateComponent } from './shares/components/btn-authenticate/btn-authenticate.component';
import { UserService } from './shares/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    EspaceProjetComponent,
    EspaceTravailComponent,
    ProfilePopupComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent,
    LeftSidebarComponent,
    BtnAuthenticateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    MatIconModule,
    MatRadioModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports:[
    SidebarModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [AuthService, AuthGuard, UserService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

