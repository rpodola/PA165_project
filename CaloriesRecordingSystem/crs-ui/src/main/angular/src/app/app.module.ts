import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgDatepickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import {ActivityService} from './_services/activity.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RecordListComponent } from './record-list/record-list.component';
import {RecordService} from './_services/record.service';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoryCheckboxesComponent } from './category-checkboxes/category-checkboxes.component';
import {CategoryService} from './_services/category.service';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ValidateEmailDirective } from './_validators/validate-email.directive';
import { ValidateLengthDirective } from './_validators/validate-length.directive';
import {AccountService} from './_services/account.service';
import { NumberMinMaxDirective } from './_validators/number-min-max.directive';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { BurnedCaloriesListComponent } from './burned-calories-list/burned-calories-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {fakeBackendProvider} from './_temp/fakeBackendProvider';
import {AuthenticationService} from './_services/authentication.service';
import {JwtInterceptorProvider} from './_http-helpers/JwtInterceptor';

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
    CategoryDetailComponent,
    ActivitiesComponent,
    CategoryListComponent,
    SettingsComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ValidateEmailDirective,
    ValidateLengthDirective,
    NumberMinMaxDirective,
    ActivityFormComponent,
    BurnedCaloriesListComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgDatepickerModule,
  ],
  providers: [
    ActivityService,
    RecordService,
    CategoryService,
    AccountService,
    AuthenticationService,
    JwtInterceptorProvider,
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
