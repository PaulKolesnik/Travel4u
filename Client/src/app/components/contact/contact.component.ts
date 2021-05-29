import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Notyf } from 'notyf';
import { ContactService } from './contact.service';
import { MessageModel } from './contactModel';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(100)])),
  });

  public messages: MessageModel[];

  constructor(
    private contactService: ContactService,
    private spinner: NgxSpinnerService
  ) { }


  async ngOnInit() {
    await this.getAllMessages();
  }

  get f() { return this.contactForm.value; }

  public async getAllMessages() {
    this.messages = await this.contactService.getAllMessages();
  }




  public async leaveMessage() {
    this.spinner.show();

    var notyf = new Notyf({ duration: 4000, ripple: false });


    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    const newIndexMessage = ++this.messages[this.messages.length - 1].messageID;
    console.log(this.f);
    console.log(newIndexMessage);
    const message = new MessageModel(newIndexMessage, this.f.name, this.f.email, this.f.subject, this.f.message);


    const newMessage = await this.contactService.leaveMessage(message).then(nm => {
      if (nm) {
        notyf.success('Your have successfully send message!!');
        return nm;
      }
      return;
    });
    if (!newMessage) {
      notyf.error('Your message cant send!!');

    }
    this.spinner.hide();
  }

}
