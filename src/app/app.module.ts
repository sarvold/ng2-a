import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent }   from './components/common/header/header.component';
import { LeftSideComponent } from './components/common/left-side/left-side.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { SuiModule }         from 'ng2-semantic-ui';
import { DetailsComponent } from './components/details/details.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent,
    LaunchesComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
