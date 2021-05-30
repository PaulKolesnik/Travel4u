import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { ReservationModel } from '../packages/models/reservation.model';


@Injectable({
      providedIn: 'root'
})
export class OrdersService {
      public systemSettings;

      constructor(
            private http: HttpClient
      ) {
            this.systemSettings = AppConstants.systemSettings;
      }

      public async getAllReservations(): Promise<ReservationModel[]> {
            try {
                  const apiAddress = this.systemSettings.baseDomain + '/orders';

                  const orders = await this.http.get<ReservationModel[]>(apiAddress).toPromise();

                  return orders;
            } catch (e) {
                  console.log(e);
            }
      }

      public async addNewReservation(_newReservation: ReservationModel): Promise<ReservationModel> {
            try {
                  const apiAddress = this.systemSettings.baseDomain + '/orders/new';

                  const newReservation = await this.http.post<ReservationModel>(apiAddress, _newReservation).toPromise();
                  return newReservation;
            } catch (e) {
                  console.log(e);
            }
      }

      public approveReservation(id: number, updatedReservation: ReservationModel): Promise<boolean> {
            return new Promise((resolve, reject) => {
                  const apiAddress = this.systemSettings.baseDomain + '/orders/approve/' + id;

                  this.http.patch<ReservationModel>(apiAddress, updatedReservation).subscribe(() => {
                        resolve(true);
                  }, err => reject(err));
            });
      }


      public deleteReservation(id: number): Promise<boolean> {
            return new Promise((resolve, reject) => {
                  const apiAddress = this.systemSettings.baseDomain + '/orders/delete/' + id;

                  this.http.delete<ReservationModel>(apiAddress).subscribe(() => {
                        resolve(true);
                  }, err => reject(err));
            });
      }

}