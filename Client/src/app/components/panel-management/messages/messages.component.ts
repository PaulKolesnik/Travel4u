import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactService } from '../../contact/contact.service';
import { MessageModel } from '../../contact/contactModel';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages: MessageModel[];

  constructor(
    private contactService: ContactService,
    private spinner: NgxSpinnerService
  ) { }


  async ngOnInit() {
    await this.getAllMessages();
  }


  public async getAllMessages() {
    this.spinner.show();
    this.messages = await this.contactService.getAllMessages();
    this.spinner.hide();
  }


}
