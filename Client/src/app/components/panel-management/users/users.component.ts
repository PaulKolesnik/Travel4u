import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Notyf } from 'notyf';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[];
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.getAllUsers();
    console.log(this.users)
  }

  public async getAllUsers() {
    this.spinner.show();
    this.users = await this.authService.LoadUsers();
    this.spinner.hide();
  }

  public async deletePackage(id: number) {
    try {
      const answer = confirm("Are you sure you want to delete?");
      if (!answer)
        return;

      let succses = await this.authService.DeleteUser(id);
      let notyf = new Notyf({ duration: 4000, ripple: false });
      if (succses)
        notyf.success('User has been deleted!');
      else{
        notyf.error('User Not deleted!');

      }
    } catch (e) {
      console.log(e)
    }
  }
}
