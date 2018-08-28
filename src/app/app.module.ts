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
import { LaunchListComponent } from './components/launches/launch-list/launch-list.component';
import { LaunchItemComponent } from './components/launches/launch-list/launch-item/launch-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DataStorageService } from './shared/services/data-storage.service';
import { LaunchesService } from './shared/services/launches.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LeftSideComponent,
    LaunchesComponent,
    DetailsComponent,
    LaunchListComponent,
    LaunchItemComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    HttpClientModule
  ],
  providers: [
    DataStorageService,
    LaunchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
