import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }            from '@angular/router';
import 'rxjs';

import { Launch }            from '../../../shared/models/launch.model';
import { LaunchesService } from '../../../shared/services/launches.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit, OnDestroy {
  launches: Launch[] = [];
  subscription: Subscription;

  constructor(private router: Router,
              private launchService: LaunchesService,
              private httpClient: HttpClient) {
                console.log("Launch-list constructor...");
              }

  ngOnInit() {
    this.fetchData();
    this.subscription = this.launchService.launchesChanged
      .subscribe(
        (launches: Launch[]) => {
          this.launches = launches;
        }
      )
    this.launches = this.launchService.getLaunches();
    // The below does not work since we need to subscribe to the launches before assigning them from the LaunchService.
    // this.launchService.getApiLaunches()
    //   .map(
    //     (launches) => {
    //       return launches;
    //     }
    //   )
    //   .subscribe(
    //     (launches: Launch[]) => {
    //       this.launchService.setLaunches(launches);
    //       this.launches = this.launchService.getLaunches();
    //     }
    //   );
  }

  loadDetails(index: number) {
    // Calculations
    let launch : Launch;
    launch = this.launches[index];
    // Emmiting the event for the Launchdetails to access it through the LaunchService
    this.launchService.launchSelected.emit(launch);

    // Now navigating programatically
    this.router.navigate(['/launches', launch.flight_number]);
  }
  
  // To avoid error happenning with dataStorage, testing the call here...
  launchesUrl: string = 'https://api.spacexdata.com/v2/launches';
  fetchData() {
    console.log("Entering fetchData()...");
    // let headers1 = new Headers({'Content-Type': 'application/json'});
    this.httpClient.get<Launch[]>(this.launchesUrl)
      .map(
        (launches) => {
          return launches;
        }
      )
      .subscribe(
        (launches: Launch[]) => {
          this.launchService.setLaunches(launches);
        }
      );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
