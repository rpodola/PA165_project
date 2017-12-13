import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Activity} from '../app/_classes/Activity';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';
import {ActivityDetail} from '../app/_classes/ActivityDetail';
import {Category} from '../app/_classes/Category';
import {Activity2} from '../app/_classes/Activity2';

@Injectable()
export class ActivityService {

  static allActivitiesUrl = 'something';

  /**
   * Should be cached after loading from REST
   */
  activities: ActivityDetail[] = [
    {
      id: 0,
      name: 'firstActivity',
      description: 'desc',
      category: {
        name: 'Exercise',
        description: 'Exercise is best activity',
        id: 0,
      },
      burnedCaloriesList: [],
    },
    {
      id: 1,
      name: 'secondActivity',
      description: 'desc2',
      category: {
        id: 1,
        name: 'Aerobics',
        description: 'Aerobics sucks',
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
    },
    {
      id: 2,
      name: 'hating on Dozer',
      description: 'Automapper Dozer sucks',
      category: {
        id: 0,
        name: 'Exercise',
        description: '',
      },
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

  getAllActivities(): Observable<Activity[]> {
    return of(this.activities);
  }

  getActivities(categoryIds: number[]): Observable<Activity[]> {
    return of(this.activities.filter(activity => categoryIds.includes(activity.category.id)));
  }

  getActivityDetail(id: number): Observable<ActivityDetail> {
    return of(this.activities.find(activity => activity.id === id));
  }

  createNewActivity(activity: Activity2): Observable<number> {
    const nameExists = this.activities
      .filter(ac => ac.name === activity.name)
      .length > 0;

    if (nameExists) {
      return of(undefined);
    }

    const activityDetail: ActivityDetail = {
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
