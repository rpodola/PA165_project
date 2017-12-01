import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IActivity} from '../../interfaces/IActivity';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ActivityService {

  static allActivitiesUrl = 'something';

  activities: IActivity[] = [
    {
      id: 0,
      name: 'firstActivity',
      description: 'desc',
    },
    {
      id: 1,
      name: 'secondActivity',
      description: 'desc2',
    }
  ];

  constructor(
    private http: HttpClient,
  ) { }

  getActivities(): Observable<IActivity[]> {
    return of(this.activities);
    //  return of (this.http.get<IActivity[]>(this.allActivitiesUrl));
  }

}
