import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import 'rxjs';

import { Launch }           from './models/launch.model';
import { LaunchesService }    from './launches.service';

@Injectable()
export class DataStorageService {

  launchesUrl: string = 'https://api.spacexdata.com/v2/launches';

  constructor(private http: Http, private launchesService: LaunchesService) { }

  getLaunches() {
    this.http.get(this.launchesUrl)
        .map(
          (response: Response) => {
            const launches : Launch[] = response.json();
            // if needed, check that relevant json fields are present
            // for(let launch of launches) {
            //   console.log(launch);
            // }
            return launches;
          }
        )
        .subscribe(
          (launches: Launch[] ) => {
            this.launchesService.setLaunches(launches);
          }
        );
  }
}
