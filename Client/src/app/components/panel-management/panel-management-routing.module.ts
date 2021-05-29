import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { PanelAuthGuard } from "src/app/helpers/panel-auth.guard";
import { ManagementPackagesComponent } from "./management-packages/management-packages.component";
import { NewPackageComponent } from "./management-packages/new-package/new-package.component";
import { MessagesComponent } from "./messages/messages.component";
import { PanelManagementComponent } from "./panel-management.component";
import { ReservationsComponent } from "./reservations/reservations.component";
import { UsersComponent } from "./users/users.component";

export const portalChildrenRouts: Route[] = [
      { path: 'users', component: UsersComponent, canActivate: [PanelAuthGuard] },
      { path: 'packages', component: ManagementPackagesComponent, canActivate: [PanelAuthGuard]  },
      { path: 'packages/new', component: NewPackageComponent , canActivate: [PanelAuthGuard] },
      //{ path: 'packages/update', component: NewPackageComponent },
      { path: 'reservations', component: ReservationsComponent, canActivate: [PanelAuthGuard] },
      { path: 'messages', component: MessagesComponent, canActivate: [PanelAuthGuard] },
      {
            path: '', component: UsersComponent, canActivate: [PanelAuthGuard] 
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
