import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public formLogin: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])),
    password: new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }
  public Submit(){
    console.log(this.formLogin);
  }
}
