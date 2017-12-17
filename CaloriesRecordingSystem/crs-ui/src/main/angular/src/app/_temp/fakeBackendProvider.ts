import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/observable/throw';
import {ICategory} from '../_interfaces/ICategory';
import {IRecordDetail} from '../_interfaces/IRecordDetail';
import {IActivityDetail} from '../_interfaces/IActivityDetail';

const categories_const: ICategory[] = [
  {
    id: 0,
    name: 'Exercise',
    description: 'Exercise is the best activity he two-letter code of the language to use for month and day names. These will also be used as the input\'s value (and subsequently sent to the server in the case of form submissions). Currently ships with English (\'en\'), German (\'de\'), Brazilian (\'br\'), and Spanish (\'es\') translations, but others can be added (see I18N below). If an unknown language code is given, English will be used.\n' +
    '\n' +
    'forceParse',
  },
  {
    id: 1,
    name: 'Aerobics',
    description: '',
  },
  {
    id: 2,
    name: 'Walking',
    description: '',
  },
  {
    id: 3,
    name: 'Running',
    description: '',
  },
  {
    id: 4,
    name: 'Swimming',
    description: '',
  },
  {
    id: 5,
    name: 'Work',
    description: '',
  },
];
const records_const: IRecordDetail[] = [
  {
    activityId: 0,
    activityName: 'First activity',
    burnedCalories: 500,
    id: 0,
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
        id: 0,
        upperWeightBoundary: 50,
        amount: 150,
      },
      {
        id: 1,
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
        id: 3,
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
    const categories: ICategory[] = JSON.parse(localStorage.getItem('categories')) || categories_const;
    const records: IRecordDetail[] = JSON.parse(localStorage.getItem('records')) || records_const;
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
            user,
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
          user: newUser,
          isAdmin: newUser.username === 'admin' ? true : undefined,
        };

        // respond 200 OK
        return of(new HttpResponse({ status: 200, body }));
      }

      //  all categories
      if (request.url.endsWith('activities/allCategories') && request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: categories }));
      }

      //  category
      const regexpCat = /activities\/category\/(\d+)/;
      const matchCat = regexpCat.exec(request.url);
      if (matchCat && request.method === 'GET') {
        const id = parseInt(matchCat[1], 10);
        const category = categories.find(cat => cat.id === id);

        if (category) {
          return of(new HttpResponse({status: 200, body: category }));
        }

        return Observable.throw('Category doesnt exist');
      }

      //  all records of User
      if (request.url.endsWith('/records/allRecords') && request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: records }));
      }

      //  record
      const regexpRec = /records\/(\d+)/;
      const matchRec = regexpRec.exec(request.url);
      if (matchRec && request.method === 'GET') {
        const id = parseInt(matchRec[1], 10);
        const record = records.find(rec => rec.id === id);

        if (record) {
          return of(new HttpResponse({status: 200, body: record }));
        }

        return Observable.throw('Record doesnt exist');
      }

      //  all activities
      if (request.url.endsWith('/activities/allActivities') && request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: activities }));
      }

      //  activities from categories
      if (request.url.endsWith('/activities/activitiesFromCategories') && request.method === 'POST') {
        const { categoryIds } = request.body;
        const filteredActivities = activities.filter(activity => categoryIds.includes(activity.category.id));

        return of(new HttpResponse({ status: 200, body: filteredActivities }));
      }

      //  activity detail
      const regexpAct = /activities\/(\d+)/;
      const matchAct = regexpAct.exec(request.url);
      if (matchAct && request.method === 'GET') {
        const id = parseInt(matchAct[1], 10);
        const activity = activities.find(act => act.id === id);

        if (activity) {
          return of(new HttpResponse({ status: 200, body: activity }));
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

        return of(new HttpResponse({ status: 200, body: activityDetail.id }));
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

        return of(new HttpResponse({ status: 200, body: activities[index] }));
      }

      //  get user settings
      if (request.url.endsWith('/users/settings') && request.method === 'GET') {
        const currUser = JSON.parse(localStorage.getItem('currentUser'));
        const user = users.find(u => u.id === currUser.user.id);

        return of(new HttpResponse({ status: 200, body: user }));
      }

      //  save user settings
      if (request.url.endsWith('/users/update') && request.method === 'POST') {
        const currUser = JSON.parse(localStorage.getItem('currentUser'));
        const index = users.findIndex(user => user.id === currUser.user.id);

        users[index] = request.body;
        localStorage.setItem('users', JSON.stringify(users));

        return of(new HttpResponse({ status: 200, body: users[index] }));
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
