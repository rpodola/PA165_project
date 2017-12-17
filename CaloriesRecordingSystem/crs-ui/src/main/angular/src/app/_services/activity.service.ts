import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IActivity} from '../_classes/IActivity';
import {IActivityDetail} from '../_classes/IActivityDetail';
import {ActivityDetail} from '../_classes/ActivityDetail';
import {Activity} from '../_classes/Activity';

const prefix = '/activities/';
const allActivities = prefix + 'allActivities';
const activitiesFromCategories = prefix + 'activitiesFromCategories';
const activityDetail = prefix;
const createActivity = prefix + 'create';
const updateActivity = prefix + 'update';

interface IActivities {
  activities: IActivity[];
}

interface IActivityDetailResponse {
  activity: IActivityDetail;
}

interface IActivityId {
  id: number;
}


@Injectable()
export class ActivityService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllActivities(): Observable<IActivity[]> {
    return this.http
      .get<IActivities>(allActivities)
      .map(response => response.activities);
  }

  getActivities(categoryIds: number[]): Observable<IActivity[]> {
    return this.http
      .post<IActivities>(
        activitiesFromCategories,
        {
          categoryIds,
        }
      )
      .map(response => response.activities);
  }

  getActivityDetail(id: number): Observable<IActivityDetail> {
    return this.http
      .get<IActivityDetailResponse>(activityDetail + id)
      .map(response => response.activity);
  }

  createNewActivity(activity: Activity): Observable<number> {
    return this.http
      .post<IActivityId>(createActivity, { activity })
      .map(response => response.id);
  }

  updateActivity(activity: ActivityDetail): Observable<IActivityDetail> {
    return this.http
      .post<any>(updateActivity, { activity })
      .map(response => response.activity);
  }

}
