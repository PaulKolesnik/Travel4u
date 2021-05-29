import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserLoggedModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { PackageModel } from '../packages/models/package.model';
import { ReservationModel } from '../packages/models/reservation.model';
import { PackagesService } from '../packages/packages.service';
import { OrdersService } from './orders.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  package: PackageModel;
  reservations: ReservationModel[];

  constructor(
    private myActivatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private packagesService: PackagesService,
    private ordersService: OrdersService,
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = +this.myActivatedRoute.snapshot.params.packageID;
    await this.getPackage(id);
    await this.getAllReservations();


  }


  public async getPackage(packageID: number) {
    this.spinner.show();

    this.package = await this.packagesService.getOnePackage(packageID);

    this.spinner.hide();
  }

  public async getAllReservations() {
    this.reservations = await this.ordersService.getAllReservations();
  }


  public async makeReservation() {
    const answer = confirm("Are you sure you want to make Reservation?");
    if (!answer)
      return;

    this.spinner.show();
    var notyf = new Notyf({ duration: 4000, ripple: false });

    const userLogged: UserLoggedModel = this.authService.currentUserValue;
    const newIndexReservation = ++this.reservations[this.reservations.length - 1].orderID;

    const newReservation: ReservationModel = new ReservationModel(newIndexReservation, this.package[0], this.package[0].price, userLogged.user, 'Wait for confirm');

    const rs = await this.ordersService.addNewReservation(newReservation);

    if (rs) {
      notyf.success('Your have successfully make Reservation!!');
      this.router.navigateByUrl("/home");

    }
    else {
      notyf.error('Your Reservation cant invited!!');
    }
    this.spinner.hide();
  }

}
