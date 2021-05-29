import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor() { }

  public convertDate(date: Date): Date{
    let newFormttedDate = moment(date);
    newFormttedDate.format('MMMM Do YYYY, h:mm:s'); // May 7th 2021, 8:58:34 pm
    return newFormttedDate.toDate();
  }
}
