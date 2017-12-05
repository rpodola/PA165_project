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
import { CategoryCheckboxesComponent } from './category-checkboxes/category-checkboxes.component';
import {CategoryService} from '../services/category.service';


@NgModule({
  declarations: [
    AppComponent,
    ActivityDetailComponent,
    ActivityListComponent,
    RecordListComponent,
    RecordDetailComponent,
    WrongPathComponent,
    NavBarComponent,
    CategoryCheckboxesComponent,
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
    CategoryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
