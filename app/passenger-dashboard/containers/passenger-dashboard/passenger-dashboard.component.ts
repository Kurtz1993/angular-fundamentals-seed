import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService
      .getPassengers()
      .subscribe(passengers => {
        this.passengers = passengers;
      });
  }

  handleRemove(event: Passenger): void {
    this.passengerService
      .removePassenger(event)
      .subscribe(res => {
        this.passengers = this.passengers
          .filter(passenger => passenger.id !== event.id);
      });
  }

  handleEdit(event: Passenger): void {
    this.passengerService
      .updatePassenger(event)
      .subscribe(res => {
        this.passengers = this.passengers
          .map(passenger => {
            if (passenger.id === res.id) {
              passenger = Object.assign({}, passenger, res);
            }

            return passenger;
          });
      });
  }
}