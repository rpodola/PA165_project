import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import {ActivityService} from '../services/activity.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RecordListComponent } from './record-list/record-list.component';
import {RecordService} from '../services/record.service';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityDetailComponent,
    ActivityListComponent,
    RecordListComponent,
    RecordDetailComponent,
    WrongPathComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ActivityService,
    RecordService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
