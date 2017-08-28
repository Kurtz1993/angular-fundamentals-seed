import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  templateUrl: './passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Passenger) => this.passengerService
        .getPassenger(params.id))
      .subscribe(res => this.passenger = res);;
  }

  onPassengerUpdate(passenger: Passenger): void {
    this.passengerService
      .updatePassenger(passenger)
      .subscribe(res => {
        this.passenger = Object.assign({}, this.passenger, passenger);
      });
  }

  goBack(): void {
    this.router.navigate(['/passengers']);
  }
}