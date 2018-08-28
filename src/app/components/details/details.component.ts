import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Launch } from '../../shared/models/launch.model';
import { Subscription } from 'rxjs';
import { LaunchesService } from '../../shared/services/launches.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  paramSubscription: Subscription;
  selectedLaunch: Launch;

  constructor(private route: ActivatedRoute,
              private launchService: LaunchesService) { }

  ngOnInit() {
    this.launchService.launchSelected.subscribe(
      (launch: Launch) => {
        alert('Accessing Details of Flight # ' + launch.flight_number)
        this.selectedLaunch = launch;
      }
    );
    // Not using the route.snapshot since we are using a service for cross-component communication
    // this.launch = {
    //   flight_number: this.route.snapshot.params['id']
    // };
    // Reactively fetching route parameters in case of changing route from within the component
    this.paramSubscription = this.route.params
      .subscribe(
          (params: Params) => {
            this.selectedLaunch.flight_number = params['id'];
          }
      );
  }

  ngOnDestroy() {
    // Not strictly required unless using custom observables
    this.paramSubscription.unsubscribe(); 
    this.launchService.launchSelected.unsubscribe();
  }
}
