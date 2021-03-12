import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegister: FormGroup = new FormGroup({ FullName: new FormControl('', Validators.required) });

  constructor() { }

  ngOnInit(): void {
  }
  public Submit() { console.log(this.formRegister); }

}
