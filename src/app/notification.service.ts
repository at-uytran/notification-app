import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


@Injectable()
export class NotificationService {

  constructor(private http: Http) {
  }

  createNotification(form: any) {
    return this.http.post("http://localhost:3000/api/v1/notifications", form).map((res) => res);
  }

  getListNotifications() {
    return this.http.get("http://localhost:3000/api/v1/notifications").map((res) => res.json());
  }
}
