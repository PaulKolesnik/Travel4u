import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConstants } from '../app-constants';
import { CredentialsModel } from '../models/credentialsModel';
import { UserLoggedModel, UserModel } from '../models/userModel';
import { DatesService } from './dates.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public systemSettings;
  private currentUserSubject: BehaviorSubject<UserLoggedModel>;
  public currentUser: Observable<UserLoggedModel>;


  constructor(
    private http: HttpClient,
    private datesService: DatesService
  ) {
    this.systemSettings = AppConstants.systemSettings;
    this.currentUserSubject = new BehaviorSubject<UserLoggedModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserLoggedModel {
    return this.currentUserSubject.value;
  }

  public async register(user: UserModel): Promise<UserModel> {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/users/register';

      const registeredUser = await this.http.post<UserModel>(apiAddress, user).toPromise();

      return registeredUser;
    }
    catch (e) {
      console.log(e);
    }
  }

  public async login(credentials: CredentialsModel): Promise<UserLoggedModel> {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/users/login';
      const loggedUser = await this.http.post<UserLoggedModel>(apiAddress, credentials).pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
      return loggedUser.toPromise();
    }
    catch (e) {
      console.log(e);
    }
  }
  public async logout() {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/users/logout';
      await this.http.post<UserModel>(apiAddress, this.currentUser).toPromise();
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
    catch (e) {
      console.log(e);
    }
  }

  public async me(): Promise<UserModel> {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/users/me';
      return await this.http.get<UserModel>(apiAddress).toPromise();
    }
    catch (e) {
      console.log(e);
    }
  }

  public LoadUsers(): Promise<UserModel[]> {
    return new Promise<UserModel[]>((resolve, reject) => {
      try {
        const apiAddress = this.systemSettings.baseDomain + '/users';

        const users: Promise<UserModel[]> = this.http.get<UserModel[]>(apiAddress).toPromise().then(users => {
          users.forEach(user => user.createdAt = this.datesService.convertDate(user.createdAt))
          return users;
        });
        resolve(users);
      }
      catch (e) {
        reject(false);
        console.log(e);
      }
    });

  }

  public DeleteUser(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const apiAddress = this.systemSettings.baseDomain + '/users/delete';

      this.http.delete<UserModel>(apiAddress + '/' + id)
        .subscribe((deletedUser) => {
          resolve(true);
        }, err => reject(err));
    });
  }

}
