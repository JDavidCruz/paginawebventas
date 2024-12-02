import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
]
})
export class PagesModule { }
