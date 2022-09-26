import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Seccion1Component } from './seccion1/seccion1.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion3Component } from './seccion3/seccion3.component';
import { Seccion4Component } from './seccion4/seccion4.component';
import { UltimaSeccionComponent } from './ultima-seccion/ultima-seccion.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PanelDeControlComponent } from './panel-de-control/panel-de-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    UltimaSeccionComponent,
    ErrorComponent,
    PanelDeControlComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'Quien-soy',component:Seccion1Component},
      {path:'Experiencia-laboral',component:Seccion2Component},
      {path:'Logros-academicos',component:Seccion3Component},
      {path:'Por-que-contratarme',component:Seccion4Component},
      {path:'Contactarme',component:UltimaSeccionComponent},
      {path:'**',component:ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
