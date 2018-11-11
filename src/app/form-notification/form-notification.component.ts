import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Component({
  providers: [ NotificationService],
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.css']
})

export class FormNotificationComponent implements OnInit {
  notificationForm: FormGroup;


  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
              private notificationService: NotificationService) {
    this.notificationForm =  fb.group({
      content: new FormControl('')
    });
  }

  ngOnInit() {

  }

  createNotification(form: any) {
    let body = {notification:{
                  content: form.value.content
               }}
    this.notificationService.createNotification(body).subscribe();
  }
}
