import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {RecordListComponent} from './record-list/record-list.component';
import {RecordDetailComponent} from './record-detail/record-detail.component';
import {WrongPathComponent} from './wrong-path/wrong-path.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {ActivityFormComponent} from './activity-form/activity-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activities', component: ActivityListComponent },
  { path: 'activities/new', component: ActivityFormComponent },
  { path: 'activities/:id', component: ActivityDetailComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'records/:id', component: RecordDetailComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  //  catch all
  { path: '**', component: WrongPathComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
