import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {InfoComponent} from "./components/info/info.component";

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'landing'},
  { path : 'landing', component: LandingComponent},
  { path : 'info/:ref/:year', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
