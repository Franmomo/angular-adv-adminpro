import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';

// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { Grafica1Component } from './pages/grafica1/grafica1.component';
// import { PagesComponent } from './pages/pages.component';
// import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [

  //? path: '/dashboard'  => PagesRouting
  //? path: '/auth'       => AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**',                    component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
