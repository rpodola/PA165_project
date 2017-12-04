import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailComponent } from './activity/activity-detail.component';
import {ActivityListComponent} from './activity-list/activity-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activities', component: ActivityListComponent },
  { path: 'activity/:id', component: ActivityDetailComponent },
  { path: 'records', component: ActivityListComponent },
  { path: 'settings', component: ActivityListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
