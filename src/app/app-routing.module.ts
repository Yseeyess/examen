import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LibrosComponent} from '../app/components/libros/libros.component'
import {QuejasComponent} from '../app/components/quejas/quejas.component'
import {HomeComponent} from '../app/components/home/home.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'libros',component:LibrosComponent},
  {path:'quejas',component:QuejasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
