import { Injectable } from '@angular/core';

import 'rxjs';
import 'rxjs/add/operator/map';

import { Launch } from '../models/launch.model';
import { HttpClient } from '@angular/common/http';

export class DataStorageService {

  launchesUrl: string = 'https://api.spacexdata.com/v2/launches';

  constructor(private httpClient: HttpClient) { }

  fetchLaunches() {
    console.log("Entering fetch Launches...");
    // let headers1 = new Headers({'Content-Type': 'application/json'});
    this.httpClient.get<Launch[]>(this.launchesUrl)
      .map(
        (launches) => {
          // if needed, check that relevant json fields are present
          // for(let launch of launches) {
          //   console.log(launch);
          // }
          return launches;
        }
      )
      // .catch((e) => {
      //   return Observable.throw(
      //     new Error(`${ e.status } ${ e.statusText }`)
      //   );
      // })
      .subscribe(
        (launches: Launch[]) => {
          // this.launchesService.setLaunches(launches);
        }
      )
      ;


    // this.launchesService.setLaunches(this.listaDePrueba);
  }

  fetchLaunches2() {
    return this.httpClient.get<Launch[]>(this.launchesUrl)
      // .map(
      //   (launches) => {
          // if needed, check that relevant json fields are present
          // for(let launch of launches) {
          //   console.log(launch);
          // }
      //     return launches;
      //   }
      // )
      // Subscribe on the component itself
      ;
     
  }
}
