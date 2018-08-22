import { Component, OnInit } from '@angular/core';

import { Launch }            from '../../../shared/models/launch.model';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  launches: Launch[] = [];
  constructor() { }

  ngOnInit() {
  }

}
