import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { PanelManagementComponent } from "./panel-management.component";
import { ReservationsComponent } from "./reservations/reservations.component";
import { UsersComponent } from "./users/users.component";

export const portalChildrenRouts: Route[] = [
      { path: 'reservations', component: ReservationsComponent },
      { path: 'users', component: UsersComponent },
      {
            path: '', component: UsersComponent
      }
];

const routes: Routes = [

      {
            path: '',
            component: PanelManagementComponent,
            children: portalChildrenRouts
      }
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class PanelRoutingModule { }
