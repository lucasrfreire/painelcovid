import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { CasoscovidComponent } from "./casoscovid/casoscovid.component";
import { CasocovidDetalhesComponent } from "./casoscovid/casocovid-detalhes/casocovid-datalhes.component";

const ROUTES = RouterModule.forRoot([
  {
    path: 'casoscovid',
    component: CasoscovidComponent
  }
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CasoscovidComponent,
    CasocovidDetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
