import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'welcome/:userId', component : WelcomeComponent},
  {path: 'ambienti', component : AmbienteComponent},
  {path: '**', component : ErrorComponent},
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
