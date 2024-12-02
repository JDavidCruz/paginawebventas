import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [

  {path:'gobmagdalena', component:PagesComponent, canActivate:[],

  children:[

    {path:'', component:InicioComponent},

 


  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
