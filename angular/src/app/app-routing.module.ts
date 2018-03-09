import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {RouterModule} from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailsComponent }      from './hero-details/hero-details.component';
import { AboutComponent }      from './about/about.component';
import { HomeComponent }      from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: HeroDetailsComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
