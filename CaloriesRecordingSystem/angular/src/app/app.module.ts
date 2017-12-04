import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ActivityDetailComponent } from './activity/activity-detail.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import {ActivityService} from './services/activity.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ActivityDetailComponent,
    ActivityListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ActivityService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
