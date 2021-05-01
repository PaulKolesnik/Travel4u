import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-logout',
  template: ""
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.logout();
    var notyf = new Notyf({ duration: 4000, ripple: false });
    notyf.success('Your logout successfully!');

    this.router.navigateByUrl("/home");
  }

}
