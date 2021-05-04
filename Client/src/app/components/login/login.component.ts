import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CredentialsModel } from 'src/app/models/credentialsModel';
import { AuthService } from 'src/app/services/auth.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: CredentialsModel;
  returnUrl: string;

  public formLogin: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
    password: new FormControl('', Validators.required)
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
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public async login() {
    var notyf = new Notyf({ duration: 4000, ripple: false });

    // stop here if form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    this.credentials = new CredentialsModel(this.formLogin.value.userName, this.formLogin.value.password)
    const userLogged = await this.authService.login(this.credentials);

    if (userLogged) {
      notyf.success('Your have successfully login!');
      console.log("User is logged in");
      setTimeout(() => {
        //this.router.navigateByUrl('/home');
        this.router.navigate([this.returnUrl]);
      }, 1500)
    }
    else {
      notyf.error('Wrong details, try again!');
    }
  }



  public Submit() {
    console.log(this.formLogin);
  }
}
