import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { CasocovidDetalhesComponent } from "./casoscovid/casocovid-detalhes/casocovid-datalhes.component";
import { CasoscovidComponent } from "./casoscovid/casoscovid.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CasocovidService } from "./casoscovid/shared/casoscovid.service";

const ROUTES = RouterModule.forRoot([
  {
    path: 'dashboard/:uf',
    component: DashboardComponent
  },
  {
    path: 'casoscovid/:uf',
    component: CasocovidDetalhesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'casoscovid',
    component: CasoscovidComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
])

@NgModule({
  declarations: [
    AppComponent,
    CasoscovidComponent,
    CasocovidDetalhesComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule,
    ROUTES
  ],
  providers: [
    CasocovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
