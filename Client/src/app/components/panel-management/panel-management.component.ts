import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-panel-management',
  templateUrl: './panel-management.component.html',
  styleUrls: ['./panel-management.component.css']
})
export class PanelManagementComponent implements OnInit {
  user: string;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.user = this.authService.currentUserValue.user.fullName;
    }
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
