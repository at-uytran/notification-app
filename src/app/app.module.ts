import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationService } from './notification.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Ng2CableModule } from 'ng2-cable';
import { BodyComponent } from './body/body.component';
import { FormNotificationComponent } from './form-notification/form-notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FormNotificationComponent,
    NotificationListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2CableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
