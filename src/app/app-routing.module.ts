import { SecretsComponent } from './dashboard/backlog/secrets/secrets.component';
import { AddSecretComponent } from './dashboard/backlog/add-secret/add-secret.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { BacklogComponent } from './dashboard/backlog/backlog.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'backlog', component: BacklogComponent, 
    children: [
      {path: 'add', component: AddSecretComponent},
      {path: 'secrets', component: SecretsComponent}
    ]},
    {path: 'profile', component: ProfileComponent},
    {path: 'about', component: AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
