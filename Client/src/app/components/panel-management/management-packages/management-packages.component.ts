import { Component, OnInit } from '@angular/core';
import { PackageModel } from '../../packages/models/package.model';
import { PackagesService } from '../../packages/packages.service';
import { Notyf } from 'notyf';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-management-packages',
  templateUrl: './management-packages.component.html',
  styleUrls: ['./management-packages.component.css']
})
export class ManagementPackagesComponent implements OnInit {

  packages: PackageModel[];
  constructor(
    private packagesService: PackagesService,
    private spinner: NgxSpinnerService
  ) { }

  async ngOnInit() {
    await this.getAllPackages();
  }

  public async getAllPackages() {
    this.spinner.show();
    this.packages = await this.packagesService.getAllPackages();
    this.spinner.hide();
  }

  public async deletePackage(id: number) {
    try {
      const answer = confirm("Are you sure you want to delete?");
      if (!answer)
        return;

      await this.packagesService.deletePackage(id);
      var notyf = new Notyf({ duration: 4000, ripple: false });

      notyf.success('Package has been deleted!');

    } catch (e) {
      console.log(e)
    }
  }
}
