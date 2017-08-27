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
    this.passengers = this.passengerService
      .getPassengers();
  }

  handleRemove(event: Passenger): void {
    this.passengers = this.passengers
      .filter(passenger => passenger.id !== event.id);
  }

  handleEdit(event: Passenger): void {
    this.passengers = this.passengers
      .map(passenger => {
        if (passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event);
        }

        return passenger;
      });
  }
}