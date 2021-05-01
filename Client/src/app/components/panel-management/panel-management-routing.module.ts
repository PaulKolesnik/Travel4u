import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "src/app/helpers/admin.guard";
import { AgentGuard } from "src/app/helpers/agent.guard";
import { PanelManagementComponent } from "./panel-management.component";
import { ReservationsComponent } from "./reservations/reservations.component";
import { UsersComponent } from "./users/users.component";

export const portalChildrenRouts: Route[] = [
      { path: 'users', component: UsersComponent , canActivate: [AdminGuard]},
      { path: 'reservations', component: ReservationsComponent, canActivate: [AdminGuard] },
      {
            path: '', component: UsersComponent
      }
];

const routes: Routes = [
      {
            path: '',
            component: PanelManagementComponent,
            children: portalChildrenRouts,
      }
];

@NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
})
export class PanelRoutingModule { }
