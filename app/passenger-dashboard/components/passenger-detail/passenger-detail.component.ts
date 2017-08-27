import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  templateUrl: './passenger-detail.component.html'
})
export class PassengerDetailComponent {
  @Input() detail: Passenger;
  @Output() remove: EventEmitter<Passenger> = new EventEmitter();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();

  editing: boolean = false;

  constructor() { }

  onNameChange(value: string): void {
    this.detail.fullname = value;
  }

  toggleEdit(): void {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove(): void {
    this.remove.emit(this.detail);
  }
}