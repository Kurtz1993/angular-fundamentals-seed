import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form'
})
export class PassengerFormComponent {
  @Input() detail: Passenger;
}