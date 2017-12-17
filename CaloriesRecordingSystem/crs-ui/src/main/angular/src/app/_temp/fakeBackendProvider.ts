import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/observable/throw';
import {Category} from '../_classes/Category';
import {RecordDetail} from '../_classes/RecordDetail';
import {IActivityDetail} from '../_classes/IActivityDetail';

const categories_const: Category[] = [
  new Category(0, 'Exercise', 'Exercise is the best activity he two-letter code of the language to use for month and day names. These will also be used as the input\'s value (and subsequently sent to the server in the case of form submissions). Currently ships with English (\'en\'), German (\'de\'), Brazilian (\'br\'), and Spanish (\'es\') translations, but others can be added (see I18N below). If an unknown language code is given, English will be used.\n' +
    '\n' +
    'forceParse'),
  new Category(1, 'Aerobics'),
  new Category(2, 'Walking'),
  new Category(3, 'Running'),
  new Category(4, 'Swimming'),
  new Category(5, 'Work'),
  new Category(6, 'Work2'),
  new Category(7, 'Work3'),
  new Category(8, 'Work4'),
  new Category(9, 'Work5'),
  new Category(10, 'Work6'),
  new Category(11, 'Work7'),
  new Category(12, 'Work8'),
  new Category(13, 'Work9'),
];
const records_const: RecordDetail[] = [
  {
    activityId: 0,
    activityName: 'First activity',
    burnedCalories: 500,
    id: 0,
    userId: 0,
    date: '5.12.2017 8:51',
    distance: 500,
    duration: 20,
    weight: 56,
  },
  {
    activityId: 1,
    activityName: 'Second activity',
    burnedCalories: 566,
    id: 1,
    userId: 0,
    date: '5.12.2017 15:25',
    distance: 125,
    duration: 80,
    weight: 56,
  },
];
const activities_const: IActivityDetail[] = [
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
    description: 'Extremely long description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
const users_const: any[] = [
  {
    username: 'admin',
    password: 'admin',
    isAdmin: true,
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage
    const users: any[] = JSON.parse(localStorage.getItem('users')) || users_const;
    const categories: Category[] = JSON.parse(localStorage.getItem('categories')) || categories_const;
    const records: RecordDetail[] = JSON.parse(localStorage.getItem('records')) || records_const;
    const activities: IActivityDetail[] = JSON.parse(localStorage.getItem('activities')) || activities_const;

    // wrap in delayed observable to simulate server api call
    return of(null).mergeMap(() => {
      // authenticate
      if (request.url.endsWith('/auth/login') && request.method === 'POST') {
        // find if any user matches login credentials
        const filteredUsers = users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const body = {
            token: 'fake-jwt-token',
            isAdmin: request.body.username === 'admin' ? true : undefined,
          };

          return of(new HttpResponse({ status: 200, body }));
        } else {
          // else return 400 bad request
          return Observable.throw('Username or password is incorrect');
        }
      }

      // create user
      if (request.url.endsWith('/auth/register') && request.method === 'POST') {
        // get new user object from post body
        const newUser = request.body;

        // validation
        const usernameExists = users.filter(user => user.username === newUser.username).length;
        const emailExists = users.filter(user => user.email === newUser.email).length;
        if (usernameExists || emailExists) {
          return of(new HttpResponse({ status: 200, body: { emailExists, usernameExists } }));
        }

        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        const body = {
          token: 'fake_token' + newUser.id,
          isAdmin: newUser.username === 'admin' ? true : undefined,
        };

        // respond 200 OK
        return of(new HttpResponse({ status: 200, body }));
      }

      //  all categories
      if (request.url.endsWith('activities/allCategories') && request.method === 'GET') {
        const body = {
          categories,
        };

        return of(new HttpResponse({ status: 200, body }));
      }

      //  category
      const regexpCat = /activities\/category\/(\d+)/;
      const matchCat = regexpCat.exec(request.url);
      if (matchCat && request.method === 'GET') {
        const id = parseInt(matchCat[1], 10);
        const category = categories.find(cat => cat.id === id);

        if (category) {
          const body = {
            category,
          };

          return of(new HttpResponse({status: 200, body}));
        }

        return Observable.throw('Category doesnt exist');
      }

      //  all records of User
      if (request.url.endsWith('/records/allRecords') && request.method === 'GET') {
        const body = {
          records,
        };

        return of(new HttpResponse({ status: 200, body }));
      }

      //  record
      const regexpRec = /records\/(\d+)/;
      const matchRec = regexpRec.exec(request.url);
      if (matchRec && request.method === 'GET') {
        const id = parseInt(matchRec[1], 10);
        const record = records.find(rec => rec.id === id);

        if (record) {
          const body = {
            record,
          };

          return of(new HttpResponse({status: 200, body}));
        }

        return Observable.throw('Record doesnt exist');
      }

      //  all activities
      if (request.url.endsWith('/activities/allActivities') && request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: { activities } }));
      }

      //  activities from categories
      if (request.url.endsWith('/activities/activitiesFromCategories') && request.method === 'POST') {
        const { categoryIds } = request.body;
        const filteredActivities = activities.filter(activity => categoryIds.includes(activity.category.id));

        return of(new HttpResponse({ status: 200, body: { activities: filteredActivities } }));
      }

      //  activity detail
      const regexpAct = /activities\/(\d+)/;
      const matchAct = regexpAct.exec(request.url);
      if (matchAct && request.method === 'GET') {
        const id = parseInt(matchAct[1], 10);
        const activity = activities.find(act => act.id === id);

        if (activity) {
          return of(new HttpResponse({ status: 200, body: { activity } }));
        }

        return Observable.throw('IActivity doesnt exist');
      }

      //  create activity
      if (request.url.endsWith('/activities/create') && request.method === 'POST') {
        const { activity } = request.body;

        const nameExists = activities
          .filter(ac => ac.name === activity.name)
          .length > 0;

        if (nameExists) {
          return of(undefined);
        }

        const activityDetail: IActivityDetail = {
          name: activity.name,
          id: activities.length,
          category: categories.find(cat => cat.id === parseInt(activity.categoryId, 10)),
          burnedCaloriesList: [],
          description: activity.description
        };

        activities.push(activityDetail);
        localStorage.setItem('activities', JSON.stringify(activities));

        return of(new HttpResponse({ status: 200, body: { id: activityDetail.id } }));
      }

      //  update activity
      if (request.url.endsWith('/activities/update') && request.method === 'POST') {
        const { activity } = request.body;

        const oldActivity = activities.find(act => act.id === activity.id);

        if (!oldActivity) {
          return Observable.throw('IActivity you are trying to update doesnt exist!');
        }

        const index = activities.indexOf(oldActivity);
        const { categoryId, ...other } = activity;
        activities[index] = Object.assign({}, { ...other, category: categories.find(cat => cat.id === parseInt(categoryId, 10)) });
        localStorage.setItem('activities', JSON.stringify(activities));

        return of(new HttpResponse({ status: 200, body: { activity: activities[index] } }));
      }

      // pass through any requests not handled above
      return next.handle(request);
    })
      .materialize()
      .dematerialize();
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
