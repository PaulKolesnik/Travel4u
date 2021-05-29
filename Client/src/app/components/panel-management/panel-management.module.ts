import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelManagementComponent } from './panel-management.component';
import { PanelRoutingModule } from './panel-management-routing.module';
import { ReservationsComponent } from './reservations/reservations.component';
import { UsersComponent } from './users/users.component';
import { ManagementPackagesComponent } from './management-packages/management-packages.component';
import { NewPackageComponent } from './management-packages/new-package/new-package.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterInputComponent } from '../counter-input/counter-input.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    PanelManagementComponent,
    ReservationsComponent,
    CounterInputComponent,
    UsersComponent,
    ManagementPackagesComponent,
    NewPackageComponent,
    MessagesComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PanelRoutingModule,
    NgxSpinnerModule
  ]
})
export class PanelManagementModule { }
