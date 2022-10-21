import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/services/route-guard.service';
import { AmbienteComponent } from './pages/ambiente/ambiente.component';
import { ErrorComponent } from './pages/error/error.component';
import { GridAmbientiComponent } from './pages/grid-ambienti/grid-ambienti.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'welcome', component : WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'welcome/:userId', component : WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'ambienti', component : AmbienteComponent, canActivate:[RouteGuardService]},
  {path: 'ambienti/grid', component : GridAmbientiComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component : LogoutComponent},
  {path: '**', component : ErrorComponent},
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
