import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IActivity} from '../_interfaces/IActivity';
import {IActivityDetail} from '../_interfaces/IActivityDetail';
import {ActivityDetail} from '../_classes/ActivityDetail';
import {Activity} from '../_classes/Activity';

const prefix = '/activities/';
const allActivities = prefix + 'allActivities';
const activitiesFromCategories = allActivities;
const activityDetail = prefix;
const createActivity = prefix + 'create';
const updateActivity = prefix;
const deleteActivity = prefix;

@Injectable()
export class ActivityService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllActivities(): Observable<IActivity[]> {
    return this.http
      .get<IActivity[]>(allActivities);
  }

  getActivities(categoryIds: number[]): Observable<IActivity[]> {
    return this.http
      .post<IActivity[]>(
        activitiesFromCategories,
        categoryIds,
      );
  }

  getActivityDetail(id: number): Observable<IActivityDetail> {
    return this.http
      .get<IActivityDetail>(activityDetail + id);
  }

  createNewActivity(activity: Activity): Observable<number> {
    return this.http
      .post<number>(createActivity, activity);
  }

  updateActivity(activity: ActivityDetail): Observable<IActivityDetail> {
    return this.http
      .put<IActivityDetail>(updateActivity, activity);
  }

}
