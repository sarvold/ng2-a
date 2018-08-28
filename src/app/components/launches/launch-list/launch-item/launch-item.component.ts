import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../../../../shared/models/launch.model';

@Component({
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.css']
})
export class LaunchItemComponent implements OnInit {
  @Input('launchItem') launch: Launch;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
