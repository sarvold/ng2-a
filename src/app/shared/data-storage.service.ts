import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';

@Injectable()
export class DataStorageService {

  launchesUrl: string = 'https://api.spacexdata.com/v2/launches';

  constructor(private http: Http) { }

  getLaunches() {
    this.http.get(this.launchesUrl)
        
        .subscribe(
          (response: Response) => {
            const fullLaunches = response.json();
          }
        );
  }
}
