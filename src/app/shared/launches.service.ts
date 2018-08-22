import { Injectable } from '@angular/core';
import { Launch } from './models/launch.model';

@Injectable()
export class LaunchesService {

  launches: Launch[];
  
  constructor() { }

  setLaunches(launches: Launch[]) {
    this.launches = launches;
    
  }
}
