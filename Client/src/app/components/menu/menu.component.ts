import { Component, OnInit } from '@angular/core';
import { UserLoggedModel, UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  greetings = this.getGreetings();

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  private getGreetings(): string {
    const userLogged: UserLoggedModel = this.authService.currentUserValue;
    const user = userLogged?.user;
    return "Hello " + (user ? user.fullName : "Guest");
  }

  userLogged(): boolean {
    return this.authService.currentUserValue ? true : false;
  }

  havePermissions(): boolean {
    const userLogged: UserLoggedModel = this.authService.currentUserValue;
    const user = userLogged?.user
    if (!user)
      return null;
    return user?.role == 'Agent' || user?.role == 'Admin' ? true : false;
  }

}
