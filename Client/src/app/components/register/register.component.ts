import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegister: FormGroup = new FormGroup({
    FullName: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    UserName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
    Password: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('', Validators.required),
    BirthDate: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }


  ngOnInit(): void {
  }
  get f() { return this.formRegister.value; }


  public async register() {
    var notyf = new Notyf({ duration: 4000, ripple: false });

    // stop here if form is invalid
    if (this.formRegister.invalid) {
      return;
    }
    const user = new UserModel(this.f.Role, this.f.FullName, this.f.UserName, this.f.Password, this.f.BirthDate, this.f.Email, this.f.PhoneNumber)
    const registerdUser = await this.authService.register(user).then(user => {
      if (user) {
        notyf.success('Your have successfully registered!');
        return user;
      }
      return;
    });
    if (!registerdUser)
      notyf.error('Wrong details, try again!');
    else
      this.router.navigate['/login'];

  }

}
