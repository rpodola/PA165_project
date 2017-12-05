import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {RecordListComponent} from './record-list/record-list.component';
import {RecordDetailComponent} from './record-detail/record-detail.component';
import {WrongPathComponent} from './wrong-path/wrong-path.component';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activities', component: ActivityListComponent },
  { path: 'activity/:id', component: ActivityDetailComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'record/:id', component: RecordDetailComponent },
  { path: 'settings', component: ActivityListComponent },
  //  catch all
  { path: '**', component: WrongPathComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
