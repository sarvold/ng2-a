import { EventEmitter, Injectable } from '@angular/core';
import { Launch } from '../models/launch.model';
import { DataStorageService } from './data-storage.service'
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LaunchesService {

  private launches: Launch[] = [];
  launchSelected = new EventEmitter<Launch>();

  constructor(
    private dataStorage: DataStorageService
  ) { }

  setLaunches(launches: Launch[]) {
    for (let launch of launches) {
      this.launches.push(
        new Launch(launch.flight_number,
          launch.mission_name,
          launch.launch_year,
          launch.rocket,
          launch.links,
          launch.launch_site)
      );
      // console.log(launch);
    }
    // this.launches = launches;
    console.log(this.launches);
    console.log("Launches set.");
  }

  getLaunches() {
    // this.dataStorage.fetchLaunches2()
    // .map(
    //   (response: Response) => {
    //     const launches: Launch[] = response.json();
    //     // if needed, check that relevant json fields are present
    //     // for(let launch of launches) {
    //     //   console.log(launch);
    //     // }
    //     return launches;
    //   }
    // )
    // .subscribe(
    //   (launches: Launch[]) => {
    //     this.launches=launches;
    //     console.log("Lista de Launches observada: " + this.launches);
    //   }
    // );
    return this.launches
      // .slice() in order to return a new array which is an exact copy of this one
      .slice();
  }

  getLaunch(flightN: string) {
    const launch = this.launches.find(
      (l) => {
        return l.flight_number === flightN;
      }
    );
    return launch;
  }

  getApiLaunches() {
    return this.dataStorage.fetchLaunches2();
  }
}
