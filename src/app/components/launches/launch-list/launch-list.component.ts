import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import 'rxjs';

import { Launch }            from '../../../shared/models/launch.model';
import { LaunchesService } from '../../../shared/services/launches.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  launches: Launch[] = [
    // this was for testing only
    // new Launch('1111', 'aaaapossible', '1996', 'Rock n Roll', 'Standard type', 
    //   'https://images2.imgbox.com/40/e3/GypSkayF_o.png',
    //   'Area 31'
    // ),
    // new Launch('2222', 'qqq impossible II', '1998', 'Rolling Stones', 'Spacial type', 
    //   'https://images2.imgbox.com/be/e7/iNqsqVYM_o.png',
    //   'Area 33'
    // )
  ];

  constructor(private router: Router,
              private launchService: LaunchesService) {
                console.log("Launch-list constructor...");
              }

  ngOnInit() {
    // The below does not work since we need to subscribe to the launches before assigning them from the LaunchService.
    this.launchService.getApiLaunches()
      .subscribe(
        (launches: Launch[]) => {
          this.launchService.setLaunches(launches);
          this.launches = this.launchService.getLaunches();
        }
      );
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
}
