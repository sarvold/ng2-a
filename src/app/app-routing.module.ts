import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'launches', pathMatch: 'full' }, 
      { path: 'home', component: HomeComponent },
      { path: 'launches', component: LaunchesComponent },   
      { path: 'details', component: DetailsComponent },      
    ], { useHash: true })
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
