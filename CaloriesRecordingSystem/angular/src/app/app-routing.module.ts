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

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activities', component: ActivityListComponent },
  { path: 'activities/:id', component: ActivityDetailComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'records/:id', component: RecordDetailComponent },
  { path: 'settings', component: SettingsComponent },
  //  catch all
  { path: '**', component: WrongPathComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
