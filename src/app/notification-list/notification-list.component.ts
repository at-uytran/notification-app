import { Component, OnInit } from '@angular/core';
import { Ng2Cable, Broadcaster } from 'ng2-cable';
import {NotificationService} from '../notification.service'


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  counter: any;
  notifications: any;

  constructor(private ng2cable: Ng2Cable,
              private broadcaster: Broadcaster,
              private notificationService: NotificationService) {

    this.counter = 0;
    this.ng2cable.subscribe('http://localhost:3000/cable', 'NotificationChannel');
    //By default event name is 'channel name'. But you can pass from backend field { action: 'MyEventName'}

    this.broadcaster.on<string>('NotificationChannel').subscribe(
      message => {
        this.notifications.unshift(message['notification']);
        this.counter = message['counter'];
      }
    );
  }

  ngOnInit() {
    this.notificationService.getListNotifications().subscribe(
      res => {
        this.notifications = res.data.notifications;
        this.counter = res.data.unread;
      }
    )
  }
}
