import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IActivity} from '../interfaces/IActivity';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {IActivityDetail} from '../interfaces/IActivityDetail';
import {Category} from '../classes/Category';

@Injectable()
export class ActivityService {

  static allActivitiesUrl = 'something';

  /**
   * Should be cached after loading from REST
   */
  activities: IActivityDetail[] = [
    {
      id: 0,
      name: 'firstActivity',
      description: 'desc',
      category: new Category(0, 'Exercise'),
      burnedCaloriesList: [],
    },
    {
      id: 1,
      name: 'secondActivity',
      description: 'desc2',
      category: new Category(1, 'Aerobics'),
      burnedCaloriesList: [
        {
          upperWeightBoundary: 50,
          amount: 150,
        },
        {
          upperWeightBoundary: 75,
          amount: 200,
        },
      ],
    }
  ];

  constructor(
    private http: HttpClient,
  ) { }

  getAllActivities(): Observable<IActivity[]> {
    return of(this.activities);
  }

  getActivities(categoryIds: number[]): Observable<IActivity[]> {
    return of(this.activities.filter(activity => categoryIds.includes(activity.category.id)));
  }

  getActivityDetail(id: number): Observable<IActivityDetail> {
    return of(this.activities.find(activity => activity.id === id));
  }

}
