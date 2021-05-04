import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PackageModel } from 'src/app/components/packages/models/package.model';
import { PackagesService } from 'src/app/components/packages/packages.service';
import { createCounterRangeValidator } from '../../../counter-input/counter-input.component';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-new-package',
  templateUrl: './new-package.component.html',
  styleUrls: ['./new-package.component.css']
})
export class NewPackageComponent implements OnInit {
  counterValue: number = 3;
  minValue = 0;
  maxValue = 999;
  packages: PackageModel[];

  packageForm: FormGroup = new FormGroup({
    packageName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])),
    //quantity: new FormControl('0', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])),
    price: new FormControl('', Validators.compose([Validators.required, Validators.min(10), Validators.max(1000)])),
    description: new FormControl('', Validators.compose([Validators.required, Validators.min(20), Validators.max(1000)])),
    location: new FormControl('', Validators.required),
    quantity: new FormControl(this.counterValue)
  });

  constructor(
    private myRouter: Router,
    private packagesService: PackagesService
  ) { }



  async ngOnInit() {
    await this.getAllPackages();

  }

  public async getAllPackages() {
    this.packages = await this.packagesService.getAllPackages();
  }

  public async addNewPackage() {

  }
  get f() { return this.packageForm.value; }

  async onSubmit() {
    var notyf = new Notyf({ duration: 4000, ripple: false });

    // stop here if form is invalid
    if (this.packageForm.invalid) {
      return;
    }

    const newIndexPackage = ++this.packages[this.packages.length - 1].packageID;
    const newPackage: PackageModel = {
      packageID: newIndexPackage,
      packageName: this.f.packageName,
      price: this.f.price,
      description: this.f.description,
      location: this.f.location,
      quantity: this.f.quantity,
    }
    await this.packagesService.addNewPackage(newPackage).then(_package => {
      if (_package) {
        notyf.success('Your have successfully add package!');
      }
      else {
        notyf.error('Wrong details, try again!');
      }
    });
    setTimeout(() => {
      this.myRouter.navigateByUrl("/panel/packages");
    }, 2000);


  }

}
