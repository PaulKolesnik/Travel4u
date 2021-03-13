import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegister: FormGroup = new FormGroup({
    FullName: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required), UserName: new FormControl('', Validators.required), Password: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('', Validators.required), BirthDate: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }
  public Submit() { console.log(this.formRegister); }

}
