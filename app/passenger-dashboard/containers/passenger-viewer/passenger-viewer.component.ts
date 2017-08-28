import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  templateUrl: './passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit() {

  }
}