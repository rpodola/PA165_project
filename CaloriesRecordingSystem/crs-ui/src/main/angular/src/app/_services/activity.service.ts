import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Activity} from '../_classes/Activity';
import {ActivityDetail} from '../_classes/ActivityDetail';
import {Activity2} from '../_classes/Activity2';

const prefix = '/activities/';
const allActivities = prefix + 'allActivities';
const activitiesFromCategories = prefix + 'activitiesFromCategories';
const activityDetail = prefix;
const createActivity = prefix + 'create';
const updateActivity = prefix + 'update';

interface IActivities {
  activities: Activity[];
}

interface IActivityDetail {
  activity: ActivityDetail;
}

interface IActivityId {
  id: number;
}


@Injectable()
export class ActivityService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllActivities(): Observable<Activity[]> {
    return this.http
      .get<IActivities>(allActivities)
      .map(response => response.activities);
  }

  getActivities(categoryIds: number[]): Observable<Activity[]> {
    return this.http
      .post<IActivities>(
        activitiesFromCategories,
        {
          categoryIds,
        }
      )
      .map(response => response.activities);
  }

  getActivityDetail(id: number): Observable<ActivityDetail> {
    return this.http
      .get<IActivityDetail>(activityDetail + id)
      .map(response => response.activity);
  }

  createNewActivity(activity: Activity2): Observable<number> {
    return this.http
      .post<IActivityId>(createActivity, { activity })
      .map(response => response.id);
  }

  updateActivity(activity: ActivityDetail): Observable<any> {
    return this.http
      .post<any>(updateActivity, { activity });
  }

}
