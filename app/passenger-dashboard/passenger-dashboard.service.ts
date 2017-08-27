import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Passenger } from './models/passenger.interface';

const passengerApi = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(passengerApi)
      .map(res => res.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put(`${passengerApi}/${passenger.id}`, passenger)
      .map(res => res.json());
  }
}