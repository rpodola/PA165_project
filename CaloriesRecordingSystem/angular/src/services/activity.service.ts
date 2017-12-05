import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IActivity} from '../interfaces/IActivity';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {Category} from '../enums/Category';
import {IActivityDetail} from '../interfaces/IActivityDetail';

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
      category: {
        category: Category.Aerobics,
        name: Category[Category.Aerobics],
      },
      burnedCaloriesList: [],
    },
    {
      id: 1,
      name: 'secondActivity',
      description: 'desc2',
      category: {
        category: Category.Exercise,
        name: Category[Category.Exercise],
      },
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

  getActivities(categories: number[]): Observable<IActivity[]> {
    return of(this.activities.filter(activity => categories.includes(activity.category.category)));
  }

  getActivityDetail(id: number): Observable<IActivityDetail> {
    return of(this.activities.find(activity => activity.id === id));
  }

}
