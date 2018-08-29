import { EventEmitter, Injectable } from '@angular/core';
import { Launch } from '../models/launch.model';
import 'rxjs';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
import { Rocket } from '../models/rocket.model';
import { Links } from '../models/links.model';
import { LaunchSite } from '../models/launch-site.model';

export class LaunchesService {
  launchesChanged = new Subject<Launch[]>();
  private launches: Launch[] = [];
  launchSelected = new EventEmitter<Launch>();

  constructor() { }

  setLaunches(launches: Launch[]) {
    for (let launch of launches) {
      this.launches.push(
        new Launch(launch.flight_number,
          launch.mission_name,
          launch.launch_year,
          new Rocket(launch.rocket.rocket_name, launch.rocket.rocket_type),
          new Links(launch.links.mission_patch),
          new LaunchSite(launch.launch_site.site_id,
            launch.launch_site.site_name,
            launch.launch_site.site_name_long)
        )
      )
    }
    // this.launches = launches;
    console.log(this.launches);
    console.log("Launches set.");
    this.launchesChanged.next(this.launches.slice());
  }

  getLaunches() {
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

}
