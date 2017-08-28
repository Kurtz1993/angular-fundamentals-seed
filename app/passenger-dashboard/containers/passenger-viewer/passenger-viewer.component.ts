import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  templateUrl: './passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe(res => this.passenger = res);
  }

  onPassengerUpdate(passenger: Passenger): void {
    this.passengerService
      .updatePassenger(passenger)
      .subscribe(res => {
        this.passenger = Object.assign({}, this.passenger, passenger);
      });
  }
}