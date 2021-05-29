import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PackageModel } from './models/package.model';
import { PackagesService } from './packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: PackageModel[];
  constructor(
    private packagesService: PackagesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getAllPackages();
  }

  public async getAllPackages() {
    this.spinner.show();

    this.packages = await this.packagesService.getAllPackages();

    this.spinner.hide();
  }


}