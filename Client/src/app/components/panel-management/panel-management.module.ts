import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelManagementComponent } from './panel-management.component';
import { PanelRoutingModule } from './panel-management-routing.module';
import { ReservationsComponent } from './reservations/reservations.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    PanelManagementComponent,
    ReservationsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelManagementModule { }
