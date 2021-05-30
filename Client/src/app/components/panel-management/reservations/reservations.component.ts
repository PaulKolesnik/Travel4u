import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrdersService } from '../../orders/orders.service';
import { ReservationModel } from '../../packages/models/reservation.model';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: ReservationModel[];

  constructor(
    private spinner: NgxSpinnerService,
    private ordersService: OrdersService,
  ) { }

  async ngOnInit() {
    await this.getAllReservations();
  }

  public async getAllReservations() {
    this.spinner.show();

    this.reservations = await this.ordersService.getAllReservations();

    this.spinner.hide();
  }


  public async confirmReservations(reservation: ReservationModel) {
    const answer = confirm("Are you sure you want to approve Reservation?");
    if (!answer)
      return;

    reservation.status = "approve";

    await this.ordersService.approveReservation(reservation._id, reservation);
  }

  public async deleteReservations(reservation: ReservationModel) {
    try {
      const answer = confirm("Are you sure you want to delete?");
      if (!answer)
        return;

      await this.ordersService.deleteReservation(reservation.orderID);
      var notyf = new Notyf({ duration: 4000, ripple: false });

      notyf.success('Reservation has been deleted!');

    } catch (e) {
      console.log(e)
    }
  }
}


