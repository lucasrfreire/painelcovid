import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { CasoscovidComponent } from "./casoscovid/casoscovid.component";
import { CasocovidDetalhesComponent } from "./casoscovid/casocovid-detalhes/casocovid-datalhes.component";

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
