import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceProjetComponent } from './espace-projet/espace-projet.component';
import { EspaceTravailComponent } from './espace-travail/espace-travail.component';

const routes: Routes = [
  { path: 'espace-travail', component: EspaceTravailComponent },
  { path: 'espace-projet', component: EspaceProjetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
