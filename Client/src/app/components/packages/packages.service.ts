import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { PackageModel } from './models/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  public systemSettings;

  constructor(
    private http: HttpClient
  ) {
    this.systemSettings = AppConstants.systemSettings;
  }

  public async getAllPackages(): Promise<PackageModel[]> {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/packages';

      const packages = await this.http.get<PackageModel[]>(apiAddress).toPromise();

      return packages;
    } catch (e) {
      console.log(e);
    }
  }

  public async addNewPackage(_newPackage: PackageModel): Promise<PackageModel> {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/packages/new';

      const newPackage = await this.http.post<PackageModel>(apiAddress, _newPackage).toPromise();
      return newPackage;
    } catch (e) {
      console.log(e);
    }
  }

  public deletePackage(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const apiAddress = this.systemSettings.baseDomain + '/packages/delete/' + id;

      this.http.delete<PackageModel>(apiAddress).subscribe(() => {
        resolve(true);
      }, err => reject(err));
    });
  }

}