import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  templateUrl: './passenger-form.component.html'
})
export class PassengerFormComponent {
  @Input() detail: Passenger;
}