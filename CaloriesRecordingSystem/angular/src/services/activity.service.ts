import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IActivity} from '../interfaces/IActivity';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {IActivityDetail} from '../interfaces/IActivityDetail';
import {Category} from '../classes/Category';
import {Activity} from '../classes/Activity';

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
      category: new Category(0, 'Exercise', 'Exercise is best activity'),
      burnedCaloriesList: [],
    },
    {
      id: 1,
      name: 'secondActivity',
      description: 'desc2',
      category: new Category(1, 'Aerobics', 'Aerobics sucks'),
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
    },
    {
      id: 2,
      name: 'hating on Dozer',
      description: 'Automapper Dozer sucks',
      category: new Category(0, 'Exercise'),
      burnedCaloriesList: [
        {
          upperWeightBoundary: 0,
          amount: 800,
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

  createNewActivity(activity: Activity): Observable<number> {
    const nameExists = this.activities
      .filter(ac => ac.name === activity.name)
      .length > 0;

    if (nameExists) {
      return of(undefined);
    }

    const activityDetail: IActivityDetail = {
      name: activity.name,
      id: this.activities.length,
      category: {
        id: activity.categoryId,
        name: 'fake',
        description: 'fake',
      },
      burnedCaloriesList: [],
      description: activity.description
    };

    this.activities.push(activityDetail);

    return of(activityDetail.id);
  }

}
