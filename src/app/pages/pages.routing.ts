//! Rutas internas del directorio 'pages':

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        // path: '',                     component: PagesComponent,
        path: 'dashboard',               component: PagesComponent,
        children: [
            // { path: 'dashboard',      component: DashboardComponent },
            { path: '',                  component: DashboardComponent, data: { titulo: 'Dashboard'} },
            { path: 'progress',          component: ProgressComponent, data: { titulo: 'ProgressBar' } },
            { path: 'grafica1',          component: Grafica1Component, data: { titulo: 'Grafica #1' } },
            { path: 'account-settings',  component: AccountSettingsComponent, data: { titulo: 'Ajustes Cuenta' } },
            { path: 'promesas',          component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs',              component: RxjsComponent, data: { titulo: 'RxJs' } },
            // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
