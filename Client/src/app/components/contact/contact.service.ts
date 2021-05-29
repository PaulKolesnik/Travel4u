import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/app-constants';
import { MessageModel } from './contactModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public systemSettings;
  //private currentUserSubject: BehaviorSubject<UserLoggedModel>;
  //public currentUser: Observable<UserLoggedModel>;


  constructor(
    private http: HttpClient,
  ) {
    this.systemSettings = AppConstants.systemSettings;
    //this.currentUserSubject = new BehaviorSubject<UserLoggedModel>(JSON.parse(localStorage.getItem('currentUser')));
    //this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): UserLoggedModel {
  //   return this.currentUserSubject.value;
  // }
  public async getAllMessages(): Promise<MessageModel[]> {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/message';

      const messages = await this.http.get<MessageModel[]>(apiAddress).toPromise();

      return messages;
    } catch (e) {
      console.log(e);
    }
  }

  
  public async leaveMessage(message: MessageModel): Promise<MessageModel> {
    try {
      const apiAddress = this.systemSettings.baseDomain + '/message/new';

      const newMessage = await this.http.post<MessageModel>(apiAddress, message).toPromise();

      return newMessage;
    }
    catch (e) {
      console.log(e);
    }
  }
}
