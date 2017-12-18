webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_classes/Activity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var Activity = /** @class */ (function () {
    function Activity() {
    }
    return Activity;
}());



/***/ }),

/***/ "../../../../../src/app/_classes/LoginCredentials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCredentials; });
var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    LoginCredentials.prototype.areValid = function () {
        return this.username && this.password;
    };
    return LoginCredentials;
}());



/***/ }),

/***/ "../../../../../src/app/_classes/Record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Record; });
var Record = /** @class */ (function () {
    function Record() {
    }
    return Record;
}());



/***/ }),

/***/ "../../../../../src/app/_classes/RegisterSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSettings; });
var RegisterSettings = /** @class */ (function () {
    function RegisterSettings() {
    }
    return RegisterSettings;
}());



/***/ }),

/***/ "../../../../../src/app/_classes/TrackingSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingSettings; });
var TrackingSettings = /** @class */ (function () {
    function TrackingSettings() {
    }
    return TrackingSettings;
}());



/***/ }),

/***/ "../../../../../src/app/_classes/UserSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
var UserSettings = /** @class */ (function () {
    function UserSettings() {
    }
    return UserSettings;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/UserIsAdminGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIsAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserIsAdminGuard = /** @class */ (function () {
    function UserIsAdminGuard(authService) {
        this.authService = authService;
    }
    UserIsAdminGuard.prototype.canActivate = function () {
        return this.authService.isUserAdmin();
    };
    UserIsAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], UserIsAdminGuard);
    return UserIsAdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/UserLoggedInGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserLoggedInGuard = /** @class */ (function () {
    function UserLoggedInGuard(authService) {
        this.authService = authService;
    }
    UserLoggedInGuard.prototype.canActivate = function () {
        return this.authService.isUserLoggedIn();
    };
    UserLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], UserLoggedInGuard);
    return UserLoggedInGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/UserNotLoggedInGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNotLoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserNotLoggedInGuard = /** @class */ (function () {
    function UserNotLoggedInGuard(authService) {
        this.authService = authService;
    }
    UserNotLoggedInGuard.prototype.canActivate = function () {
        return !this.authService.isUserLoggedIn();
    };
    UserNotLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], UserNotLoggedInGuard);
    return UserNotLoggedInGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_http-helpers/JwtInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var backend = 'http://localhost:8080/pa165/rest';
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(router) {
        this.router = router;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token,
                },
            });
        }
        //  inject backend base url
        request = request.clone({
            url: backend + request.url
        });
        return next
            .handle(request)
            .do(null, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401 || err.status === 403) {
                    _this.router.navigateByUrl('/login');
                }
                else if (err.status === 404) {
                    _this.router.navigateByUrl('/settings');
                }
            }
        });
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());
var JwtInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: JwtInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/_services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var prefix = '/activities/';
var allActivities = prefix;
var activitiesFromCategories = allActivities;
var activityDetail = prefix;
var createActivity = prefix + 'create';
var updateActivity = prefix;
var deleteActivity = prefix;
var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.getAllActivities = function () {
        return this.http
            .get(allActivities);
    };
    ActivityService.prototype.getActivities = function (categoryIds) {
        return this.http
            .post(activitiesFromCategories, categoryIds);
    };
    ActivityService.prototype.getActivityDetail = function (id) {
        return this.http
            .get(activityDetail + id);
    };
    ActivityService.prototype.createNewActivity = function (activity) {
        return this.http
            .post(createActivity, activity);
    };
    ActivityService.prototype.updateActivity = function (id, activity) {
        return this.http
            .put(updateActivity + id, activity);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var prefix = '/auth/';
var loginUri = prefix + 'login';
var registerUri = prefix + 'register';
var getClaims = function (currentUser) {
    try {
        return __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default()(currentUser.token);
    }
    catch (_a) {
        return null;
    }
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (loginCredentials) {
        return this.http
            .post(loginUri, loginCredentials)
            .map(function (user) {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.register = function (registerDetails) {
        return this.http
            .post(registerUri, registerDetails)
            .map(function (response) {
            if (response && response.token) {
                localStorage.setItem('currentUser', JSON.stringify(response));
            }
            return response;
        });
    };
    AuthenticationService.prototype.isUserAdmin = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var claims = getClaims(currentUser);
        if (!claims) {
            return false;
        }
        return claims.isAdmin;
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            //  check expiration
            var claims = getClaims(currentUser);
            if (!claims) {
                return false;
            }
            var exp = claims.exp;
            //  expiration
            if (exp) {
                return claims.exp >= (Date.now() / 1000);
            }
        }
        return false;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var prefix = '/activities/';
var allCategories = prefix + 'categories/';
var category = allCategories;
var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAllCategories = function () {
        return this.http
            .get(allCategories);
    };
    CategoryService.prototype.getCategory = function (id) {
        return this.http
            .get(category + id);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/login-events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginEventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginEventsService = /** @class */ (function () {
    function LoginEventsService() {
        this.changeHappened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LoginEventsService.prototype.loginStateChanged = function () {
        this.changeHappened.emit();
    };
    LoginEventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoginEventsService);
    return LoginEventsService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/record.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var prefix = '/records/';
var allRecords = prefix;
var recordDetail = prefix;
var createRecord = prefix + 'create';
var getRecordForUpdate = prefix + 'getForUpdate/';
var updateRecord = prefix;
var deleteRecord = prefix;
var progress = prefix + 'progress';
var RecordService = /** @class */ (function () {
    function RecordService(http) {
        this.http = http;
    }
    RecordService.prototype.getAllRecordsOfUser = function () {
        return this.http
            .get(allRecords);
    };
    RecordService.prototype.getRecordDetail = function (recordId) {
        return this.http
            .get(recordDetail + recordId);
    };
    RecordService.prototype.createNewRecord = function (record) {
        return this.http
<<<<<<< HEAD
            .post(createRecord, { record: record });
=======
            .post(createRecord, record);
>>>>>>> Apply fixes
    };
    RecordService.prototype.getRecordForUpdate = function (recordId) {
        return this.http
            .get(getRecordForUpdate + recordId);
    };
<<<<<<< HEAD
    RecordService.prototype.updateRecord = function (record) {
        return this.http
            .post(updateRecord, { record: record });
=======
    RecordService.prototype.updateRecord = function (id, record) {
        return this.http
            .put(updateRecord + id, record);
>>>>>>> Apply fixes
    };
    RecordService.prototype.getWeekProgressOfBurnedCalories = function () {
        return this.http
            .get(progress);
    };
    RecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var prefix = '/users/';
var settings = prefix + 'settings/';
var updateSettings = settings;
var trackingSettings = settings + 'tracking';
var updateTrackingSettings = trackingSettings;
var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.getUserSettings = function () {
        return this.http
            .get(settings);
    };
    SettingsService.prototype.saveUserSettings = function (newSettings) {
        return this.http
            .put(updateSettings, newSettings);
    };
    SettingsService.prototype.getTrackingSettings = function () {
        return this.http
            .get(trackingSettings);
    };
    SettingsService.prototype.saveTrackingSettings = function (newSettings) {
        return this.http
            .put(updateTrackingSettings, newSettings);
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/_utils/DateUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* unused harmony export dateToDDMMYYYY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateToDDMMYYYMMHH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dateToIMyDate; });
var dateToDDMMYYYY = function (date) {
    return [date.getFullYear(),
        ('0' + (date.getMonth() + 1)).slice(-2),
        ('0' + (date.getDate())).slice(-2),
    ].join('-');
};
var dateToDDMMYYYMMHH = function (date) {
    var datePart = [date.getFullYear(),
        ('0' + (date.getMonth() + 1)).slice(-2),
        ('0' + (date.getDate())).slice(-2),
    ].join('-');
    var timePart = date.getHours() + ':' + date.getMinutes();
    return datePart + ' ' + timePart;
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateToDDMMYYYMMHH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stringDateTimeToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dateToIMyDate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var dateToDDMMYYYMMHH = function (date) {
    return __WEBPACK_IMPORTED_MODULE_0_moment__(date).format('DD-MM-YYYY HH:mm');
};
var stringDateTimeToDate = function (dateTime) {
    return __WEBPACK_IMPORTED_MODULE_0_moment__(dateTime, 'DD-MM-YYYY HH:mm').toDate();
>>>>>>> Apply fixes
};
var dateToIMyDate = function (date) {
    var myDate = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate() + 1,
    };
    return myDate;
};


/***/ }),

/***/ "../../../../../src/app/_validators/number-min-max.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberMinMaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumberMinMaxDirective = /** @class */ (function () {
    function NumberMinMaxDirective() {
        this.minValue = Number.MIN_VALUE;
        this.maxValue = Number.MAX_VALUE;
    }
    NumberMinMaxDirective_1 = NumberMinMaxDirective;
    NumberMinMaxDirective.prototype.validate = function (c) {
        return c.value >= this.minValue && c.value <= this.maxValue ? null : { message: this.wrongNumberMessage };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NumberMinMaxDirective.prototype, "minValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NumberMinMaxDirective.prototype, "maxValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NumberMinMaxDirective.prototype, "wrongNumberMessage", void 0);
    NumberMinMaxDirective = NumberMinMaxDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appNumberMinMax]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return NumberMinMaxDirective_1; }), multi: true },
            ],
        }),
        __metadata("design:paramtypes", [])
    ], NumberMinMaxDirective);
    return NumberMinMaxDirective;
    var NumberMinMaxDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/_validators/validate-email.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateEmailDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
var wrongEmailMessage = 'Wrong E-Mail address';
var noValueMessage = 'E-Mail is required';
var ValidateEmailDirective = /** @class */ (function () {
    function ValidateEmailDirective() {
    }
    ValidateEmailDirective_1 = ValidateEmailDirective;
    ValidateEmailDirective.prototype.validate = function (c) {
        if (!c.value) {
            return { message: noValueMessage };
        }
        return c.value.match(pattern) ? null : { message: wrongEmailMessage };
    };
    ValidateEmailDirective = ValidateEmailDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appValidateEmail]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: ValidateEmailDirective_1, multi: true },
            ],
        }),
        __metadata("design:paramtypes", [])
    ], ValidateEmailDirective);
    return ValidateEmailDirective;
    var ValidateEmailDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/_validators/validate-length.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateLengthDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidateLengthDirective = /** @class */ (function () {
    function ValidateLengthDirective() {
    }
    ValidateLengthDirective_1 = ValidateLengthDirective;
    ValidateLengthDirective.prototype.validate = function (c) {
        if (!c.value) {
            if (this.noValueMessage) {
                return { message: this.noValueMessage };
            }
            else {
                return null;
            }
        }
        var length = c.value.length;
        if (length < this.minLength) {
            return { message: this.minLengthMessage };
        }
        if (length > this.maxLength) {
            return { message: this.maxLengthMessage };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "minLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "maxLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "minLengthMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "maxLengthMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "noValueMessage", void 0);
    ValidateLengthDirective = ValidateLengthDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appValidateLength]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: ValidateLengthDirective_1, multi: true }
            ],
        }),
        __metadata("design:paramtypes", [])
    ], ValidateLengthDirective);
    return ValidateLengthDirective;
    var ValidateLengthDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/activities/activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".activityDescription {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  line-height: 2;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover \">\r\n  <thead>\r\n  <tr>\r\n    <th>\r\n      Name\r\n    </th>\r\n    <th *ngIf=\"!hideCategory\">\r\n      Category\r\n    </th>\r\n    <th>\r\n      Description\r\n    </th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let activity of activities\">\r\n    <td>\r\n      <a\r\n        *ngIf=\"!useButtonForActivityLink; else activityNameTextOnly\"\r\n        routerLink=\"/activities/{{activity.id}}\"\r\n        disabled=\"\"\r\n        >\r\n        {{ activity.name }}\r\n      </a>\r\n      <ng-template #activityNameTextOnly>\r\n        {{ activity.name }}\r\n      </ng-template>\r\n    </td>\r\n    <td *ngIf=\"!hideCategory\">\r\n      <a routerLink=\"/categories/{{activity.category.id}}\">\r\n        {{activity.category.name}}\r\n      </a>\r\n    </td>\r\n    <td class=\"activityDescription\">\r\n      {{ activity.description }}\r\n    </td>\r\n    <td *ngIf=\"useButtonForActivityLink\">\r\n      <a\r\n        class=\"btn btn-primary\"\r\n        routerLink=\"/activities/{{activity.id}}\"\r\n      >\r\n        View details\r\n      </a>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ActivitiesComponent.prototype, "activities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ActivitiesComponent.prototype, "hideCategory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ActivitiesComponent.prototype, "useButtonForActivityLink", void 0);
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activities',
            template: __webpack_require__("../../../../../src/app/activities/activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-detail-form/activity-detail-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n\r\ntextarea#description {\r\n  background-color: white !important;\r\n  resize: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-detail-form/activity-detail-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/activities\"\r\n  >\r\n    View all activities\r\n  </a>\r\n</div>\r\n\r\n<div\r\n  class=\"container\"\r\n  *ngIf=\"activity\"\r\n>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Create New Activity\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"name\">\r\n        Name\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            class=\"form-control\"\r\n            id=\"name\"\r\n            placeholder=\"Name\"\r\n            [(ngModel)]=\"activity.name\"\r\n            autofocus\r\n            #nameValidation=\"ngModel\"\r\n            appValidateLength\r\n            [minLength]=\"3\"\r\n            [maxLength]=\"127\"\r\n            [minLengthMessage]=\"'Name must be at least 3 characters long'\"\r\n            [maxLengthMessage]=\"'Name must be at max 63 characters long'\"\r\n            [noValueMessage]=\"'Name is required'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"nameValidation.errors && (nameValidation.dirty || nameValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ nameValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Description\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <textarea\r\n            class=\"form-control\"\r\n            name=\"description\"\r\n            id=\"description\"\r\n            placeholder=\"Description\"\r\n            [(ngModel)]=\"activity.description\"\r\n            rows=\"4\"\r\n            autofocus\r\n          >\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"category\">\r\n        Category\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"category\"\r\n            name=\"category\"\r\n            [(ngModel)]=\"activity.category\"\r\n          >\r\n            <option\r\n              *ngFor=\"let category of categories\"\r\n              [value]=\"category.id\"\r\n            >\r\n              {{ category.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"activity.category === undefined\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Can't create activity without Category\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-burned-calories-list\r\n    [burnedCaloriesList]=\"activity.burnedCalories\"\r\n    [canUserEdit]=\"true\"\r\n    (addBurnedCalories)=\"onAddBurnedCalories($event)\"\r\n    (removeBurnedCalories)=\"onRemoveBurnedCalories($event)\"\r\n  >\r\n  </app-burned-calories-list>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <button\r\n            class=\"btn btn-success\"\r\n            (click)=\"saveActivityDetails()\"\r\n          >\r\n            Save changes\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-detail-form/activity-detail-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var ActivityDetailFormComponent = /** @class */ (function () {
    function ActivityDetailFormComponent(activityService, categoryService, location, route) {
        this.activityService = activityService;
        this.categoryService = categoryService;
        this.location = location;
        this.route = route;
    }
    ActivityDetailFormComponent.prototype.ngOnInit = function () {
        this.getActivity();
        this.getAllCategories();
    };
    ActivityDetailFormComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService
            .getAllCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    ActivityDetailFormComponent.prototype.getActivity = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.activityService
            .getActivityDetail(this.id)
            .subscribe(function (activity) {
            var category = activity.category, other = __rest(activity, ["category"]);
            _this.activity = Object.assign(__assign({}, other, { category: category.id }));
        });
    };
    ActivityDetailFormComponent.prototype.onAddBurnedCalories = function (burnedCalories) {
        var burned = this.activity.burnedCalories.filter(function (bc) { return bc.upperWeightBoundary === burnedCalories.upperWeightBoundary; });
        if (burned.length > 0) {
            burned[0].amount = burnedCalories.amount;
        }
        else {
            this.activity.burnedCalories.push(burnedCalories);
            this.activity.burnedCalories.sort(function (bc1, bc2) { return bc1.upperWeightBoundary - bc2.upperWeightBoundary; });
        }
    };
    ActivityDetailFormComponent.prototype.saveActivityDetails = function () {
        var _this = this;
        this.activityService
            .updateActivity(this.id, this.activity)
            .subscribe(function (activity) {
            var category = activity.category, other = __rest(activity, ["category"]);
            _this.activity = Object.assign({}, __assign({}, other, { category: category.id }));
        });
    };
    ActivityDetailFormComponent.prototype.onRemoveBurnedCalories = function (burnedCalories) {
        this.activity.burnedCalories = this.activity.burnedCalories.filter(function (bc) { return bc !== burnedCalories; });
    };
    ActivityDetailFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity-detail-form',
            template: __webpack_require__("../../../../../src/app/activity-detail-form/activity-detail-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-detail-form/activity-detail-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ActivityDetailFormComponent);
    return ActivityDetailFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-detail-static/activity-detail-static.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n\r\ntextarea#description {\r\n  background-color: white !important;\r\n  resize: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-detail-static/activity-detail-static.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/activities\"\r\n  >\r\n    View all activities\r\n  </a>\r\n</div>\r\n\r\n<div\r\n  class=\"container\"\r\n  *ngIf=\"activity\"\r\n>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        {{ activity.name }}\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"category\">\r\n        Category\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <a\r\n            id=\"category\"\r\n            class=\"form-control text-primary\"\r\n            routerLink=\"/categories/{{activity.category.id}}\"\r\n          >\r\n            {{ activity.category.name }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Description\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <textarea\r\n            class=\"form-control\"\r\n            name=\"description\"\r\n            id=\"description\"\r\n            placeholder=\"Description\"\r\n            [(ngModel)]=\"activity.description\"\r\n            rows=\"4\"\r\n            [disabled]=\"true\"\r\n          >\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-burned-calories-list\r\n    [burnedCaloriesList]=\"activity.burnedCalories\"\r\n  >\r\n  </app-burned-calories-list>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-detail-static/activity-detail-static.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailStaticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityDetailStaticComponent = /** @class */ (function () {
    function ActivityDetailStaticComponent(activityService, location, route) {
        this.activityService = activityService;
        this.location = location;
        this.route = route;
    }
    ActivityDetailStaticComponent.prototype.ngOnInit = function () {
        this.getActivity();
    };
    ActivityDetailStaticComponent.prototype.getActivity = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.activityService
            .getActivityDetail(id)
            .subscribe(function (activity) {
            _this.activity = activity;
        });
    };
    ActivityDetailStaticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity-detail-static',
            template: __webpack_require__("../../../../../src/app/activity-detail-static/activity-detail-static.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-detail-static/activity-detail-static.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ActivityDetailStaticComponent);
    return ActivityDetailStaticComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-detail/activity-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-detail/activity-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isUserAdmin\">\r\n  <app-activity-detail-form>\r\n  </app-activity-detail-form>\r\n</div>\r\n<div *ngIf=\"!isUserAdmin\">\r\n  <app-activity-detail-static>\r\n  </app-activity-detail-static>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-detail/activity-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityDetailComponent = /** @class */ (function () {
    function ActivityDetailComponent(authService) {
        this.authService = authService;
    }
    ActivityDetailComponent.prototype.ngOnInit = function () {
        this.isUserAdmin = this.authService.isUserAdmin();
    };
    ActivityDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity-detail',
            template: __webpack_require__("../../../../../src/app/activity-detail/activity-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-detail/activity-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], ActivityDetailComponent);
    return ActivityDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-form/activity-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n\r\ntextarea#description {\r\n  resize: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-form/activity-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/activities\"\r\n  >\r\n    View all activities\r\n  </a>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Create New Activity\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"name\">\r\n        Name\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            class=\"form-control\"\r\n            id=\"name\"\r\n            placeholder=\"Name\"\r\n            [(ngModel)]=\"activity.name\"\r\n            autofocus\r\n            #nameValidation=\"ngModel\"\r\n            appValidateLength\r\n            [minLength]=\"3\"\r\n            [maxLength]=\"127\"\r\n            [minLengthMessage]=\"'Name must be at least 3 characters long'\"\r\n            [maxLengthMessage]=\"'Name must be at max 63 characters long'\"\r\n            [noValueMessage]=\"'Name is required'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"nameValidation.errors && (nameValidation.dirty || nameValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ nameValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Description\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <textarea\r\n            class=\"form-control\"\r\n            name=\"description\"\r\n            id=\"description\"\r\n            placeholder=\"Description\"\r\n            [(ngModel)]=\"activity.description\"\r\n            rows=\"4\"\r\n            autofocus\r\n          >\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"category\">\r\n        Category\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"category\"\r\n            name=\"category\"\r\n            [(ngModel)]=\"activity.category\"\r\n          >\r\n            <option\r\n              *ngFor=\"let category of categories\"\r\n              [value]=\"category.id\"\r\n            >\r\n              {{ category.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"activity.category === undefined\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Can't create activity without Category\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-3\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        (click)=\"createNewActivity()\"\r\n        [disabled]=\"nameValidation.errors || activity.category === undefined\"\r\n      >\r\n        Create\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"activityNameExists\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n        <span class=\"text-danger align-middle\">\r\n          <i class=\"fa fa-close\">\r\n          </i>\r\n          Activity with the same name already exists\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-form/activity-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Activity__ = __webpack_require__("../../../../../src/app/_classes/Activity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityFormComponent = /** @class */ (function () {
    function ActivityFormComponent(categoryService, activityService, router) {
        this.categoryService = categoryService;
        this.activityService = activityService;
        this.router = router;
        this.activity = new __WEBPACK_IMPORTED_MODULE_1__classes_Activity__["a" /* Activity */]();
    }
    ActivityFormComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService
            .getAllCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
            if (categories) {
                _this.activity.category = categories[0].id;
            }
        });
    };
    ActivityFormComponent.prototype.createNewActivity = function () {
        var _this = this;
        this.activityService
            .createNewActivity(this.activity)
            .subscribe(function (newActivityId) {
            if (!newActivityId) {
                _this.activityNameExists = true;
            }
            else {
                _this.router.navigateByUrl('activities/' + newActivityId);
            }
        });
    };
    ActivityFormComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
    };
    ActivityFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity-form',
            template: __webpack_require__("../../../../../src/app/activity-form/activity-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-form/activity-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ActivityFormComponent);
    return ActivityFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-list/activity-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-categories {\r\n  cursor: pointer;\r\n  color: blue;\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-list/activity-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-3 mt-2\">\r\n  <app-search-bar\r\n    labelText=\"Search by name\"\r\n    (submitText)=\"onSubmitText($event)\"\r\n  >\r\n  </app-search-bar>\r\n</div>\r\n<div class=\"row\">\r\n  <div\r\n    class=\"col-auto\"\r\n    *ngIf=\"showCategories\"\r\n  >\r\n    <span\r\n      class=\"show-categories\"\r\n      (click)=\"showHide()\"\r\n    >\r\n      Hide categories\r\n    </span>\r\n    <app-category-checkboxes\r\n      [selectedCategoryIds]=\"selectedCategoryIds\"\r\n      (filterChange)=\"getActivitiesFromCategories($event)\"\r\n    >\r\n    </app-category-checkboxes>\r\n  </div>\r\n  <div class=\"col\">\r\n    <span\r\n      *ngIf=\"!showCategories\"\r\n      class=\"show-categories\"\r\n      (click)=\"showHide()\"\r\n    >\r\n      Show categories\r\n    </span>\r\n    <a\r\n      *ngIf=\"isUserAdmin\"\r\n      class=\"ml-2\"\r\n      routerLink=\"new\"\r\n    >\r\n      add new\r\n    </a>\r\n    <app-activities\r\n      [activities]=\"activities\"\r\n      [useButtonForActivityLink]=\"true\"\r\n    >\r\n    </app-activities>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-list/activity-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityListComponent = /** @class */ (function () {
    function ActivityListComponent(activityService, authService) {
        this.activityService = activityService;
        this.authService = authService;
        this.selectedCategoryIds = [];
        this.nameFilter = '';
        this.isUserAdmin = authService.isUserAdmin();
    }
    ActivityListComponent.prototype.filterChanged = function () {
        var _this = this;
        if (this.selectedCategoryIds.length === 0) {
            this.activities = this.activitiesCache.filter(function (activity) { return activity.name.includes(_this.nameFilter); });
        }
        else {
            this.activities = this.activitiesCache.filter(function (activity) { return activity.name.includes(_this.nameFilter) && _this.selectedCategoryIds.includes(activity.category.id); });
        }
    };
    ActivityListComponent.prototype.getActivitiesFromCategories = function (categoryIds) {
        this.selectedCategoryIds = categoryIds;
        this.filterChanged();
    };
    ActivityListComponent.prototype.loadAllActivitesFromServer = function () {
        var _this = this;
        this.activityService
            .getAllActivities()
            .subscribe(function (activities) {
            _this.activitiesCache = activities;
            _this.filterChanged();
        });
    };
    ActivityListComponent.prototype.showHide = function () {
        this.showCategories = !this.showCategories;
    };
    ActivityListComponent.prototype.onSubmitText = function (text) {
        this.nameFilter = text;
        this.filterChanged();
    };
    ActivityListComponent.prototype.ngOnInit = function () {
        this.loadAllActivitesFromServer();
    };
    ActivityListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity-list',
            template: __webpack_require__("../../../../../src/app/activity-list/activity-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-list/activity-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], ActivityListComponent);
    return ActivityListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_detail_activity_detail_component__ = __webpack_require__("../../../../../src/app/activity-detail/activity-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_list_activity_list_component__ = __webpack_require__("../../../../../src/app/activity-list/activity-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__record_list_record_list_component__ = __webpack_require__("../../../../../src/app/record-list/record-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__record_detail_record_detail_component__ = __webpack_require__("../../../../../src/app/record-detail/record-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wrong_path_wrong_path_component__ = __webpack_require__("../../../../../src/app/wrong-path/wrong-path.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_detail_category_detail_component__ = __webpack_require__("../../../../../src/app/category-detail/category-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_form_register_form_component__ = __webpack_require__("../../../../../src/app/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_UserLoggedInGuard__ = __webpack_require__("../../../../../src/app/_guards/UserLoggedInGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_UserNotLoggedInGuard__ = __webpack_require__("../../../../../src/app/_guards/UserNotLoggedInGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_UserIsAdminGuard__ = __webpack_require__("../../../../../src/app/_guards/UserIsAdminGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__record_form_record_form_component__ = __webpack_require__("../../../../../src/app/record-form/record-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tracking_settings_tracking_settings_component__ = __webpack_require__("../../../../../src/app/tracking-settings/tracking-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: '/activities', pathMatch: 'full' },
    { path: 'activities', component: __WEBPACK_IMPORTED_MODULE_3__activity_list_activity_list_component__["a" /* ActivityListComponent */] },
    { path: 'activities/new', component: __WEBPACK_IMPORTED_MODULE_12__activity_form_activity_form_component__["a" /* ActivityFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_UserIsAdminGuard__["a" /* UserIsAdminGuard */]] },
    { path: 'activities/:id', component: __WEBPACK_IMPORTED_MODULE_2__activity_detail_activity_detail_component__["a" /* ActivityDetailComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_8__category_list_category_list_component__["a" /* CategoryListComponent */] },
    { path: 'categories/:id', component: __WEBPACK_IMPORTED_MODULE_7__category_detail_category_detail_component__["a" /* CategoryDetailComponent */] },
    { path: 'records', component: __WEBPACK_IMPORTED_MODULE_4__record_list_record_list_component__["a" /* RecordListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_UserLoggedInGuard__["a" /* UserLoggedInGuard */]] },
    { path: 'records/new', component: __WEBPACK_IMPORTED_MODULE_16__record_form_record_form_component__["a" /* RecordFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_UserLoggedInGuard__["a" /* UserLoggedInGuard */]] },
    { path: 'records/:id', component: __WEBPACK_IMPORTED_MODULE_5__record_detail_record_detail_component__["a" /* RecordDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_UserLoggedInGuard__["a" /* UserLoggedInGuard */]] },
    { path: 'records/:id/edit', component: __WEBPACK_IMPORTED_MODULE_16__record_form_record_form_component__["a" /* RecordFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_UserLoggedInGuard__["a" /* UserLoggedInGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_UserLoggedInGuard__["a" /* UserLoggedInGuard */]] },
    { path: 'trackingSettings', component: __WEBPACK_IMPORTED_MODULE_17__tracking_settings_tracking_settings_component__["a" /* TrackingSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_UserLoggedInGuard__["a" /* UserLoggedInGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_form_login_form_component__["a" /* LoginFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_UserNotLoggedInGuard__["a" /* UserNotLoggedInGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_form_register_form_component__["a" /* RegisterFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_UserNotLoggedInGuard__["a" /* UserNotLoggedInGuard */]] },
    //  catch all
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__wrong_path_wrong_path_component__["a" /* WrongPathComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Application-wide Styles */\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: #888;\r\n}\r\n/* everywhere else */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css\">\r\n\r\n<app-nav-bar\r\n  [title]=\"title\"\r\n>\r\n</app-nav-bar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Calories recording system';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_mydatepicker__ = __webpack_require__("../../../../ngx-mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activity_detail_activity_detail_component__ = __webpack_require__("../../../../../src/app/activity-detail/activity-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activity_list_activity_list_component__ = __webpack_require__("../../../../../src/app/activity-list/activity-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__record_list_record_list_component__ = __webpack_require__("../../../../../src/app/record-list/record-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_record_service__ = __webpack_require__("../../../../../src/app/_services/record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__record_detail_record_detail_component__ = __webpack_require__("../../../../../src/app/record-detail/record-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wrong_path_wrong_path_component__ = __webpack_require__("../../../../../src/app/wrong-path/wrong-path.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__category_checkboxes_category_checkboxes_component__ = __webpack_require__("../../../../../src/app/category-checkboxes/category-checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__category_detail_category_detail_component__ = __webpack_require__("../../../../../src/app/category-detail/category-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__activities_activities_component__ = __webpack_require__("../../../../../src/app/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__register_form_register_form_component__ = __webpack_require__("../../../../../src/app/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__validators_validate_email_directive__ = __webpack_require__("../../../../../src/app/_validators/validate-email.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__validators_validate_length_directive__ = __webpack_require__("../../../../../src/app/_validators/validate-length.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__validators_number_min_max_directive__ = __webpack_require__("../../../../../src/app/_validators/number-min-max.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__burned_calories_list_burned_calories_list_component__ = __webpack_require__("../../../../../src/app/burned-calories-list/burned-calories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__http_helpers_JwtInterceptor__ = __webpack_require__("../../../../../src/app/_http-helpers/JwtInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guards_UserLoggedInGuard__ = __webpack_require__("../../../../../src/app/_guards/UserLoggedInGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__guards_UserNotLoggedInGuard__ = __webpack_require__("../../../../../src/app/_guards/UserNotLoggedInGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_login_events_service__ = __webpack_require__("../../../../../src/app/_services/login-events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guards_UserIsAdminGuard__ = __webpack_require__("../../../../../src/app/_guards/UserIsAdminGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__activity_detail_form_activity_detail_form_component__ = __webpack_require__("../../../../../src/app/activity-detail-form/activity-detail-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__activity_detail_static_activity_detail_static_component__ = __webpack_require__("../../../../../src/app/activity-detail-static/activity-detail-static.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_settings_service__ = __webpack_require__("../../../../../src/app/_services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__record_form_record_form_component__ = __webpack_require__("../../../../../src/app/record-form/record-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__tracking_settings_tracking_settings_component__ = __webpack_require__("../../../../../src/app/tracking-settings/tracking-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__activity_detail_activity_detail_component__["a" /* ActivityDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__activity_list_activity_list_component__["a" /* ActivityListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__record_list_record_list_component__["a" /* RecordListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__record_detail_record_detail_component__["a" /* RecordDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__wrong_path_wrong_path_component__["a" /* WrongPathComponent */],
                __WEBPACK_IMPORTED_MODULE_15__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__category_checkboxes_category_checkboxes_component__["a" /* CategoryCheckboxesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__category_detail_category_detail_component__["a" /* CategoryDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_19__activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__category_list_category_list_component__["a" /* CategoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__register_form_register_form_component__["a" /* RegisterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_24__validators_validate_email_directive__["a" /* ValidateEmailDirective */],
                __WEBPACK_IMPORTED_MODULE_25__validators_validate_length_directive__["a" /* ValidateLengthDirective */],
                __WEBPACK_IMPORTED_MODULE_26__validators_number_min_max_directive__["a" /* NumberMinMaxDirective */],
                __WEBPACK_IMPORTED_MODULE_27__activity_form_activity_form_component__["a" /* ActivityFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__burned_calories_list_burned_calories_list_component__["a" /* BurnedCaloriesListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_36__activity_detail_form_activity_detail_form_component__["a" /* ActivityDetailFormComponent */],
                __WEBPACK_IMPORTED_MODULE_37__activity_detail_static_activity_detail_static_component__["a" /* ActivityDetailStaticComponent */],
                __WEBPACK_IMPORTED_MODULE_39__record_form_record_form_component__["a" /* RecordFormComponent */],
                __WEBPACK_IMPORTED_MODULE_40__tracking_settings_tracking_settings_component__["a" /* TrackingSettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_mydatepicker__["NgxMyDatePickerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_12__services_record_service__["a" /* RecordService */],
                __WEBPACK_IMPORTED_MODULE_17__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_30__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_38__services_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_31__http_helpers_JwtInterceptor__["a" /* JwtInterceptorProvider */],
                __WEBPACK_IMPORTED_MODULE_32__guards_UserLoggedInGuard__["a" /* UserLoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_33__guards_UserNotLoggedInGuard__["a" /* UserNotLoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_35__guards_UserIsAdminGuard__["a" /* UserIsAdminGuard */],
                __WEBPACK_IMPORTED_MODULE_34__services_login_events_service__["a" /* LoginEventsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/burned-calories-list/burned-calories-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/burned-calories-list/burned-calories-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <h2>\r\n            Burned calories per bodyweight\r\n          </h2>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"canUserEdit\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"weight\">\r\n          Weight\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"number\"\r\n              id=\"weight\"\r\n              name=\"weight\"\r\n              [(ngModel)]=\"upperWeightBoundary\"\r\n              appNumberMinMax\r\n              #validateWeightBoundary=\"ngModel\"\r\n              [minValue]=\"1\"\r\n              [wrongNumberMessage]=\"'Weight must be at least 1'\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-1 field-label-responsive\">\r\n        <label for=\"amount\">\r\n          Amount\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"number\"\r\n              id=\"amount\"\r\n              name=\"amount\"\r\n              [(ngModel)]=\"amount\"\r\n              appNumberMinMax\r\n              #validateAmount=\"ngModel\"\r\n              [minValue]=\"1\"\r\n              [wrongNumberMessage]=\"'Amount must be at least 1'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-1\">\r\n        <button\r\n          class=\"btn btn-primary\"\r\n          (click)=\"addBurnedCaloriesToList()\"\r\n          [disabled]=\"validateAmount.errors || validateWeightBoundary.errors\"\r\n        >\r\n          Add\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 field-label-responsive\">\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"validateWeightBoundary.errors && (validateWeightBoundary.dirty || validateWeightBoundary.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n            <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validateWeightBoundary.errors.message }}\r\n              </i>\r\n            </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div class=\"col-md-2 field-label-responsive\">\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"validateAmount.errors && (validateAmount.dirty || validateAmount.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n            <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validateAmount.errors.message }}\r\n              </i>\r\n            </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <th>\r\n            Weight\r\n          </th>\r\n          <th>\r\n            Calories\r\n          </th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let burnedCalories of burnedCaloriesList\">\r\n            <td>\r\n              {{ burnedCalories.upperWeightBoundary }}\r\n            </td>\r\n            <td>\r\n              {{ burnedCalories.amount }}\r\n            </td>\r\n            <td *ngIf=\"canUserEdit\">\r\n              <button\r\n                class=\"btn btn-danger\"\r\n                (click)=\"removeBurnedCaloriesFromList(burnedCalories)\"\r\n              >\r\n                Remove\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/burned-calories-list/burned-calories-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BurnedCaloriesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BurnedCaloriesListComponent = /** @class */ (function () {
    function BurnedCaloriesListComponent() {
        this.addBurnedCalories = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.removeBurnedCalories = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.upperWeightBoundary = 1;
        this.amount = 1;
    }
    BurnedCaloriesListComponent.prototype.addBurnedCaloriesToList = function () {
        var burnedCalories = {
            upperWeightBoundary: this.upperWeightBoundary,
            amount: this.amount,
        };
        this.addBurnedCalories.emit(burnedCalories);
    };
    BurnedCaloriesListComponent.prototype.removeBurnedCaloriesFromList = function (burnedCalories) {
        this.removeBurnedCalories.emit(burnedCalories);
    };
    BurnedCaloriesListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], BurnedCaloriesListComponent.prototype, "burnedCaloriesList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BurnedCaloriesListComponent.prototype, "canUserEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], BurnedCaloriesListComponent.prototype, "addBurnedCalories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], BurnedCaloriesListComponent.prototype, "removeBurnedCalories", void 0);
    BurnedCaloriesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-burned-calories-list',
            template: __webpack_require__("../../../../../src/app/burned-calories-list/burned-calories-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/burned-calories-list/burned-calories-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BurnedCaloriesListComponent);
    return BurnedCaloriesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category-checkboxes/category-checkboxes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-checkboxes/category-checkboxes.component.html":
/***/ (function(module, exports) {

module.exports = "<div\r\n  *ngIf=\"categoriesSelection\"\r\n  class=\"categories ml-2\"\r\n>\r\n  <span\r\n    *ngIf=\"categoriesSelection\"\r\n  >\r\n    <label\r\n      *ngIf=\"categoriesSelection.length >= 2\"\r\n    >\r\n      <input\r\n        type=\"checkbox\"\r\n        [(ngModel)]=\"selectedAll\"\r\n        (change)=\"selectAll()\"\r\n      />\r\n      All\r\n    </label>\r\n  </span>\r\n  <div *ngFor=\"let selection of categoriesSelection\">\r\n    <label>\r\n      <input\r\n        type=\"checkbox\"\r\n        [(ngModel)]=\"selection.checked\"\r\n        (change)=\"filterChanged()\"\r\n      />\r\n      {{selection.category.name}}\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/category-checkboxes/category-checkboxes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryCheckboxesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryCheckboxesComponent = /** @class */ (function () {
    function CategoryCheckboxesComponent(categoryService) {
        this.categoryService = categoryService;
        this.filterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.selectedAll = false;
    }
    CategoryCheckboxesComponent.prototype.filterChanged = function () {
        this.selectedCategoryIds = undefined;
        var selectedCategories = this.categoriesSelection
            .filter(function (selection) { return selection.checked; })
            .map(function (selection) { return selection.category.id; });
        this.filterChange.emit(selectedCategories);
        this.selectedAll = this.categoriesSelection.every(function (selection) { return selection.checked === true; });
    };
    CategoryCheckboxesComponent.prototype.selectAll = function () {
        var _this = this;
        this.selectedCategoryIds = undefined;
        this.categoriesSelection.forEach(function (selection) { return selection.checked = _this.selectedAll; });
        this.filterChanged();
    };
    CategoryCheckboxesComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService
            .getAllCategories()
            .subscribe(function (categories) {
            _this.categoriesSelection = categories.map(function (cat) { return ({
                category: cat,
                checked: false,
            }); });
        });
    };
    CategoryCheckboxesComponent.prototype.ngOnInit = function () { };
    CategoryCheckboxesComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (!this.categoriesSelection) {
            this.getAllCategories();
        }
        if (this.selectedCategoryIds.length > 0) {
            this.categoriesSelection
                .forEach(function (selection) { return selection.checked = _this.selectedCategoryIds.includes(selection.category.id); });
            this.filterChanged();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CategoryCheckboxesComponent.prototype, "selectedCategoryIds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CategoryCheckboxesComponent.prototype, "filterChange", void 0);
    CategoryCheckboxesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-checkboxes',
            template: __webpack_require__("../../../../../src/app/category-checkboxes/category-checkboxes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-checkboxes/category-checkboxes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]])
    ], CategoryCheckboxesComponent);
    return CategoryCheckboxesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category-detail/category-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n\r\ntextarea#description {\r\n  background-color: white !important;\r\n  resize: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-detail/category-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/categories\"\r\n  >\r\n    View all categories\r\n  </a>\r\n</div>\r\n\r\n<div\r\n  class=\"container\"\r\n  *ngIf=\"category\"\r\n>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        {{ category.name }}\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Description\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <textarea\r\n            class=\"form-control\"\r\n            name=\"description\"\r\n            id=\"description\"\r\n            placeholder=\"Description\"\r\n            [(ngModel)]=\"category.description\"\r\n            rows=\"4\"\r\n            [disabled]=\"true\"\r\n          >\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-activities\r\n    [activities]=\"activitiesInCategory\"\r\n    [hideCategory]=\"true\"\r\n  >\r\n  </app-activities>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/category-detail/category-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(categoryService, activityService, location, route) {
        this.categoryService = categoryService;
        this.activityService = activityService;
        this.location = location;
        this.route = route;
    }
    CategoryDetailComponent.prototype.setCategory = function (cat) {
        var _this = this;
        this.category = cat;
        this.activityService
            .getActivities([cat.id])
            .subscribe(function (activities) {
            _this.activitiesInCategory = activities;
        });
    };
    CategoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.categoryService
            .getCategory(id)
            .subscribe(function (cat) { return _this.setCategory(cat); });
    };
    CategoryDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-detail',
            template: __webpack_require__("../../../../../src/app/category-detail/category-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-detail/category-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_4__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categoryDescription {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  line-height: 2;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover \">\r\n  <thead>\r\n  <tr>\r\n    <th>\r\n      Name\r\n    </th>\r\n    <th>\r\n      Description\r\n    </th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let category of categories\">\r\n    <td>\r\n      {{ category.name }}\r\n    </td>\r\n    <td class=\"categoryDescription\">\r\n      {{ category.description }}\r\n    </td>\r\n    <td>\r\n      <a\r\n        class=\"btn btn-primary\"\r\n        routerLink=\"/categories/{{category.id}}\"\r\n      >\r\n        View activities\r\n      </a>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(categoryService) {
        this.categoryService = categoryService;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService
            .getAllCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    CategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-list',
            template: __webpack_require__("../../../../../src/app/category-list/category-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Sign In\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"username\">\r\n        Username\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-user-secret\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"text\"\r\n            name=\"username\"\r\n            class=\"form-control\"\r\n            id=\"username\"\r\n            placeholder=\"Username\"\r\n            required autofocus\r\n            [(ngModel)]=\"loginCredentials.username\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"password\">\r\n        Password\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div\r\n            class=\"input-group-addon\"\r\n            style=\"width: 2.6rem\"\r\n          >\r\n            <i class=\"fa fa-lock\">\r\n            </i>\r\n          </div>\r\n          <input\r\n            type=\"password\"\r\n            name=\"password\"\r\n            class=\"form-control\"\r\n            id=\"password\"\r\n            placeholder=\"Password\"\r\n            required\r\n            [(ngModel)]=\"loginCredentials.password\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        (click)=\"login()\"\r\n        [disabled]=\"!loginCredentials.areValid()\"\r\n      >\r\n        <i class=\"fa fa-sign-in\">\r\n        </i>\r\n        Login\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"isIncorrectLogin\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n            </i>\r\n            Login details are incorrect\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br >\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\" >\r\n        Don't have an account?\r\n        <a routerLink=\"/register\">\r\n          Sign Up Here\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_LoginCredentials__ = __webpack_require__("../../../../../src/app/_classes/LoginCredentials.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_events_service__ = __webpack_require__("../../../../../src/app/_services/login-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, loginEvents, router) {
        this.authService = authService;
        this.loginEvents = loginEvents;
        this.router = router;
        this.loginCredentials = new __WEBPACK_IMPORTED_MODULE_2__classes_LoginCredentials__["a" /* LoginCredentials */]();
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.authService
            .login(this.loginCredentials)
            .subscribe(function () {
            _this.loginEvents.loginStateChanged();
            _this.router.navigateByUrl('/');
        }, function () {
            _this.isIncorrectLogin = true;
        });
    };
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_login_events_service__["a" /* LoginEventsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#brand {\r\n  font-size: 30px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark \">\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    (click)=\"collapse=!collapse\"\r\n    type=\"button\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div\r\n    class=\"navbar-collapse\"\r\n    (click)=\"collapse=true\"\r\n    [hidden]=\"collapse\"\r\n  >\r\n    <div class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\">\r\n      <a\r\n        class=\"nav-link\"\r\n        routerLink=\"activities\"\r\n        routerLinkActive=\"active\"\r\n      >\r\n        Activities\r\n      </a>\r\n    </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          routerLink=\"categories\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Activity categories\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          *ngIf=\"this.userLoggedIn\"\r\n          class=\"nav-link\"\r\n          routerLink=\"records\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Records\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          *ngIf=\"this.userLoggedIn\"\r\n          class=\"nav-link\"\r\n          routerLink=\"settings\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Settings\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          *ngIf=\"this.userLoggedIn\"\r\n          class=\"nav-link\"\r\n          routerLink=\"trackingSettings\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Tracking settings\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          *ngIf=\"!this.userLoggedIn\"\r\n          class=\"nav-link\"\r\n          routerLink=\"login\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Login\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          *ngIf=\"!this.userLoggedIn\"\r\n          class=\"nav-link\"\r\n          routerLink=\"register\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Register\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          *ngIf=\"this.userLoggedIn\"\r\n          class=\"nav-link\"\r\n          routerLink=\"\"\r\n          (click)=\"logout()\"\r\n        >\r\n          Logout\r\n        </a>\r\n      </li>\r\n    </div>\r\n  </div>\r\n  <a class=\"navbar-brand ml-auto\" id=\"brand\">\r\n    {{ title }}\r\n  </a>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_events_service__ = __webpack_require__("../../../../../src/app/_services/login-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, loginEvents, router) {
        var _this = this;
        this.authService = authService;
        this.loginEvents = loginEvents;
        this.router = router;
        this.collapse = true;
        this.userLoggedIn = this.authService.isUserLoggedIn();
        this.loginEvents.changeHappened.subscribe(function () { return _this.userLoggedIn = _this.authService.isUserLoggedIn(); });
    }
    NavBarComponent.prototype.logout = function () {
        this.authService.logout();
        this.loginEvents.loginStateChanged();
        this.router.navigateByUrl('/login');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], NavBarComponent.prototype, "title", void 0);
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_login_events_service__["a" /* LoginEventsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/record-detail/record-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/record-detail/record-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/records\"\r\n  >\r\n    View all records\r\n  </a>\r\n</div>\r\n\r\n<div\r\n  class=\"container\"\r\n  *ngIf=\"record\"\r\n>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Record\r\n      </h2>\r\n      <a\r\n        class=\"btn btn-primary\"\r\n        routerLink=\"/records/{{id}}/edit\"\r\n      >\r\n        Edit\r\n      </a>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"activity\">\r\n        Activity\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <a\r\n            id=\"activity\"\r\n            class=\"form-control text-primary\"\r\n            routerLink=\"/activities/{{record.activityId}}\"\r\n          >\r\n            {{ record.activityName }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label>\r\n        Date\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span class=\"form-control\">\r\n            {{ record.atTime }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label>\r\n        Burned calories\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span class=\"form-control\">\r\n            {{ record.burnedCalories }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label>\r\n        Distance\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span class=\"form-control\">\r\n            {{ record.distance }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label>\r\n        Duration\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span class=\"form-control\">\r\n            {{ record.duration }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label>\r\n        Bodyweight\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span class=\"form-control\">\r\n            {{ record.weight }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/record-detail/record-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_record_service__ = __webpack_require__("../../../../../src/app/_services/record.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecordDetailComponent = /** @class */ (function () {
    function RecordDetailComponent(route, recordService) {
        this.route = route;
        this.recordService = recordService;
    }
    RecordDetailComponent.prototype.ngOnInit = function () {
        this.getRecord();
    };
    RecordDetailComponent.prototype.getRecord = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.recordService
            .getRecordDetail(this.id)
            .subscribe(function (record) { return _this.record = record; });
    };
    RecordDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-record-detail',
            template: __webpack_require__("../../../../../src/app/record-detail/record-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/record-detail/record-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_record_service__["a" /* RecordService */]])
    ], RecordDetailComponent);
    return RecordDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/record-form/record-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/record-form/record-form.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Create New Record\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"activity\">\r\n        Activity\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"activity\"\r\n            name=\"activity\"\r\n            [(ngModel)]=\"record.activityId\"\r\n          >\r\n            <option\r\n              *ngFor=\"let activity of activities\"\r\n              [value]=\"activity.id\"\r\n            >\r\n              {{ activity.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"record.activityId === undefined\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Can't create record without Activity\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label>\r\n        Date\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <angular2-date-picker\r\n            [(ngModel)]=\"selectedDate\"\r\n            [settings]=\"settings\"\r\n            (onDateSelect)=\"onDateSelect($event)\"\r\n          >\r\n          </angular2-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"duration\">\r\n        Duration\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"duration\"\r\n            class=\"form-control\"\r\n            id=\"duration\"\r\n            [(ngModel)]=\"record.duration\"\r\n            appNumberMinMax\r\n            #validateDuration=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Duration must be at least 1'\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validateDuration.errors && (validateDuration.dirty || validateDuration.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n            <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validateDuration.errors.message }}\r\n              </i>\r\n            </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"distance\">\r\n        Distance\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"distance\"\r\n            class=\"form-control\"\r\n            id=\"distance\"\r\n            [(ngModel)]=\"record.distance\"\r\n            appNumberMinMax\r\n            #validateDistance=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Distance must be at least 1'\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validateDistance.errors && (validateDistance.dirty || validateDistance.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n            <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validateDistance.errors.message }}\r\n              </i>\r\n            </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-3\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        (click)=\"createNewRecord()\"\r\n        [disabled]=\"validateDuration.errors || validateDistance.errors\"\r\n      >\r\n        Create\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"
=======
module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Create New Record\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"activity\">\r\n        Activity\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <select\r\n            class=\"form-control\"\r\n            id=\"activity\"\r\n            name=\"activity\"\r\n            [(ngModel)]=\"record.activityId\"\r\n          >\r\n            <option\r\n              *ngFor=\"let activity of activities\"\r\n              [value]=\"activity.id\"\r\n            >\r\n              {{ activity.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"record.activityId === undefined\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Can't create record without Activity\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label>\r\n        Date\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <angular2-date-picker\r\n            [(ngModel)]=\"selectedDate\"\r\n            [settings]=\"settings\"\r\n            (onDateSelect)=\"onDateSelect($event)\"\r\n          >\r\n          </angular2-date-picker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"duration\">\r\n        Duration\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"duration\"\r\n            class=\"form-control\"\r\n            id=\"duration\"\r\n            [(ngModel)]=\"record.duration\"\r\n            appNumberMinMax\r\n            #validateDuration=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Duration must be at least 1'\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validateDuration.errors && (validateDuration.dirty || validateDuration.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n            <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validateDuration.errors.message }}\r\n              </i>\r\n            </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"distance\">\r\n        Distance\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"distance\"\r\n            class=\"form-control\"\r\n            id=\"distance\"\r\n            [(ngModel)]=\"record.distance\"\r\n            appNumberMinMax\r\n            #validateDistance=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Distance must be at least 1'\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validateDistance.errors && (validateDistance.dirty || validateDistance.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n            <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validateDistance.errors.message }}\r\n              </i>\r\n            </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-3\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        (click)=\"isUpdating ? updateRecord() : createNewRecord()\"\r\n        [disabled]=\"validateDuration.errors || validateDistance.errors\"\r\n      >\r\n        {{ isUpdating ? 'Update' : 'Create' }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"
>>>>>>> Apply fixes

/***/ }),

/***/ "../../../../../src/app/record-form/record-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Record__ = __webpack_require__("../../../../../src/app/_classes/Record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_record_service__ = __webpack_require__("../../../../../src/app/_services/record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_DateUtils__ = __webpack_require__("../../../../../src/app/_utils/DateUtils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecordFormComponent = /** @class */ (function () {
    function RecordFormComponent(route, recordService, activityService, router) {
        this.route = route;
        this.recordService = recordService;
        this.activityService = activityService;
        this.router = router;
        this.record = new __WEBPACK_IMPORTED_MODULE_1__classes_Record__["a" /* Record */]();
        this.selectedDate = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy HH:mm',
        };
        this.record.duration = 1;
        this.record.distance = 1;
        this.record.atTime = Object(__WEBPACK_IMPORTED_MODULE_5__utils_DateUtils__["a" /* dateToDDMMYYYMMHH */])(this.selectedDate);
    }
    RecordFormComponent.prototype.onDateSelect = function (date) {
        this.record.atTime = Object(__WEBPACK_IMPORTED_MODULE_5__utils_DateUtils__["a" /* dateToDDMMYYYMMHH */])(date);
    };
    RecordFormComponent.prototype.getAllActivities = function () {
        var _this = this;
        this.activityService
            .getAllActivities()
            .subscribe(function (activities) {
            _this.activities = activities;
            if (activities) {
                _this.record.activityId = activities[0].id;
            }
        });
    };
    RecordFormComponent.prototype.createNewRecord = function () {
        var _this = this;
        this.recordService
            .createNewRecord(this.record)
            .subscribe(function () { return _this.router.navigateByUrl('/records/'); });
    };
<<<<<<< HEAD
=======
    RecordFormComponent.prototype.updateRecord = function () {
        this.recordService
            .updateRecord(this.id, this.record)
            .subscribe();
    };
>>>>>>> Apply fixes
    RecordFormComponent.prototype.getRecord = function () {
        var _this = this;
        var routeId = this.route.snapshot.paramMap.get('id');
        if (routeId) {
<<<<<<< HEAD
            var id = +routeId;
            this.recordService
                .getRecordForUpdate(id)
                .subscribe(function (record) { return _this.record = record; });
=======
            this.id = +routeId;
            this.recordService
                .getRecordForUpdate(this.id)
                .subscribe(function (record) {
                _this.record = record;
                _this.isUpdating = true;
                _this.selectedDate = Object(__WEBPACK_IMPORTED_MODULE_5__utils_DateUtils__["c" /* stringDateTimeToDate */])(_this.record.atTime);
            });
        }
        else {
            this.isUpdating = false;
>>>>>>> Apply fixes
        }
    };
    RecordFormComponent.prototype.ngOnInit = function () {
        this.getRecord();
        this.getAllActivities();
    };
    RecordFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-record-form',
            template: __webpack_require__("../../../../../src/app/record-form/record-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/record-form/record-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_record_service__["a" /* RecordService */],
            __WEBPACK_IMPORTED_MODULE_4__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RecordFormComponent);
    return RecordFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/record-list/record-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/record-list/record-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\r\n  <a\r\n    class=\"ml-2\"\r\n    routerLink=\"new\"\r\n  >\r\n    add new\r\n  </a>\r\n</div>\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n  <tr>\r\n    <th>\r\n      Activity\r\n    </th>\r\n    <th>\r\n      Date\r\n    </th>\r\n    <th>\r\n      Burned calories\r\n    </th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let userRecord of userRecords\">\r\n    <td>\r\n      <a routerLink=\"/activities/{{userRecord.activityId}}\">\r\n        {{ userRecord.activityName }}\r\n      </a>\r\n    </td>\r\n    <td>\r\n      {{ userRecord.atTime }}\r\n    </td>\r\n    <td>\r\n      {{ userRecord.burnedCalories }}\r\n    </td>\r\n    <td>\r\n      <a\r\n        class=\"btn btn-primary mr-2\"\r\n        routerLink=\"/records/{{userRecord.id}}\"\r\n      >\r\n        View details\r\n      </a>\r\n      <a\r\n        class=\"btn btn-primary\"\r\n        routerLink=\"/records/{{userRecord.id}}/edit\"\r\n      >\r\n        Edit\r\n      </a>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"container\">\r\n  <h2>Progress</h2>\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"progress\">\r\n      {{progress}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/record-list/record-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_record_service__ = __webpack_require__("../../../../../src/app/_services/record.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordListComponent = /** @class */ (function () {
    function RecordListComponent(recordService) {
        this.recordService = recordService;
    }
    RecordListComponent.prototype.loadAllUserRecordsFromServer = function () {
        var _this = this;
        this.recordService
            .getAllRecordsOfUser()
            .subscribe(function (userRecords) {
            _this.userRecordsCached = userRecords;
            _this.getAllUserRecords();
        });
    };
    RecordListComponent.prototype.getAllUserRecords = function () {
        this.userRecords = this.userRecordsCached;
    };
    RecordListComponent.prototype.getWeekProgressOfBurnedCalories = function () {
        var _this = this;
        this.recordService.getWeekProgressOfBurnedCalories()
            .subscribe(function (progress) { return _this.progress = progress.toString() + '%'; });
    };
    RecordListComponent.prototype.ngOnInit = function () {
        this.loadAllUserRecordsFromServer();
        this.getWeekProgressOfBurnedCalories();
    };
    RecordListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-record-list',
            template: __webpack_require__("../../../../../src/app/record-list/record-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/record-list/record-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_record_service__["a" /* RecordService */]])
    ], RecordListComponent);
    return RecordListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.calendarButtonsBorder {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n\r\n.calendarButtonsBorder:hover {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form\r\n    class=\"form-horizontal\"\r\n    role=\"form\"\r\n    method=\"POST\"\r\n    action=\"/register\"\r\n  >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-6\">\r\n        <h2>\r\n          Register New User\r\n        </h2>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"username\">\r\n          Username\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-user-secret\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"text\"\r\n              name=\"username\"\r\n              class=\"form-control\"\r\n              id=\"username\"\r\n              placeholder=\"Username\"\r\n              [(ngModel)]=\"registerSettings.username\"\r\n              required autofocus\r\n              appValidateLength\r\n              #usernameValidation=\"ngModel\"\r\n              [minLength]=\"3\"\r\n              [maxLength]=\"63\"\r\n              [noValueMessage]=\"'Username is required'\"\r\n              [minLengthMessage]=\"'Username must be at least 3 characters long'\"\r\n              [maxLengthMessage]=\"'Username must be at max 63 characters long'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"usernameValidation.errors && (usernameValidation.dirty || usernameValidation.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ usernameValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"name\">\r\n          Name\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-user\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"text\"\r\n              name=\"name\"\r\n              class=\"form-control\"\r\n              id=\"name\"\r\n              placeholder=\"Name\"\r\n              [(ngModel)]=\"registerSettings.name\"\r\n              autofocus\r\n              appValidateLength\r\n              #nameValidation=\"ngModel\"\r\n              [minLength]=\"3\"\r\n              [maxLength]=\"63\"\r\n              [minLengthMessage]=\"'Name must be at least 3 characters long'\"\r\n              [maxLengthMessage]=\"'Name must be at max 63 characters long'\"\r\n              [noValueMessage]=\"'Name is required'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"nameValidation.errors && (nameValidation.dirty || nameValidation.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ nameValidation.errors.message }}\r\n            </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"email\">\r\n          E-Mail Address\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-at\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"text\"\r\n              name=\"email\"\r\n              class=\"form-control\"\r\n              id=\"email\"\r\n              placeholder=\"you@example.com\"\r\n              [(ngModel)]=\"registerSettings.email\"\r\n              autofocus\r\n              required\r\n              appValidateEmail\r\n              #emailValidator=\"ngModel\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"emailValidator.errors && (emailValidator.dirty || emailValidator.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ emailValidator.errors.message }}\r\n            </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"password\">\r\n          Password\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group has-danger\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div\r\n              class=\"input-group-addon\"\r\n              style=\"width: 2.6rem\"\r\n            >\r\n              <i class=\"fa fa-key\">\r\n              </i>\r\n            </div>\r\n            <input\r\n              type=\"password\"\r\n              name=\"password\"\r\n              class=\"form-control\"\r\n              id=\"password\"\r\n              placeholder=\"Password\"\r\n              [(ngModel)]=\"registerSettings.password\"\r\n              (ngModelChange)=\"passwordChanged()\"\r\n              autofocus\r\n              appValidateLength\r\n              #passwordValidation=\"ngModel\"\r\n              [minLength]=\"5\"\r\n              [maxLength]=\"63\"\r\n              [noValueMessage]=\"'Password is required'\"\r\n              [minLengthMessage]=\"'Password must be at least 5 characters long'\"\r\n              [maxLengthMessage]=\"'Password must be at max 63 characters long'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"passwordValidation.errors && (passwordValidation.dirty || passwordValidation.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ passwordValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"passwordConfirm\">\r\n          Confirm Password\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-repeat\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"password\"\r\n              name=\"passwordConfirm\"\r\n              class=\"form-control\"\r\n              id=\"passwordConfirm\"\r\n              placeholder=\"Password\"\r\n              [(ngModel)]=\"passwordRepeat\"\r\n              (ngModelChange)=\"passwordChanged()\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"!passwordsMatch && (registerSettings.password || passwordRepeat)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Passwords do not match\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label>\r\n          Birthday\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-birthday-cake\">\r\n              </i>\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                style=\"float:none\"\r\n                placeholder=\"Select your birth date\"\r\n                [options]=\"datePickerOptions\"\r\n                ngx-mydatepicker name=\"mydate\"\r\n                #dp=\"ngx-mydatepicker\"\r\n                (inputFieldChanged)=\"onInputFieldChanged($event)\"\r\n              />\r\n\r\n              <span class=\"input-group-btn\">\r\n                <a class=\"btn calendarButtonsBorder\" (click)=\"dp.clearDate()\">\r\n                    <i class=\"fa fa-close\"></i>\r\n                </a>\r\n                <a class=\"btn calendarButtonsBorder\" (click)=\"dp.toggleCalendar()\">\r\n                  <i class=\"fa fa-calendar\"></i>\r\n                </a>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"!isDateValid && birthday !== undefined\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Birth date has invalid format\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label>\r\n          Gender\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 5.5rem\">\r\n              <form name=\"genders\">\r\n                <i class=\"fa fa-mars\">\r\n                </i>\r\n                <input type=\"radio\" [(ngModel)]=\"registerSettings.male\" [value]=\"true\" name=\"male\">\r\n                <i class=\"fa fa-venus\"></i>\r\n                <input type=\"radio\" [(ngModel)]=\"registerSettings.male\" [value]=\"false\" name=\"female\">\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"height\">\r\n          Height\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-auto\">\r\n        <div class=\"form-group has-danger\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <input\r\n              type=\"number\"\r\n              name=\"height\"\r\n              class=\"form-control\"\r\n              id=\"height\"\r\n              required\r\n              [(ngModel)]=\"registerSettings.height\"\r\n              appNumberMinMax\r\n              #heightValidator=\"ngModel\"\r\n              [minValue]=\"1\"\r\n              [wrongNumberMessage]=\"'Height must be at least 1'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"heightValidator.errors && (heightValidator.dirty || heightValidator.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ heightValidator.errors.message }}\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"bodyweight\">\r\n          Bodyweight\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-auto\">\r\n        <div class=\"form-group has-danger\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <input\r\n              type=\"number\"\r\n              name=\"bodyweight\"\r\n              class=\"form-control\"\r\n              id=\"bodyweight\"\r\n              required\r\n              [(ngModel)]=\"registerSettings.weight\"\r\n              appNumberMinMax\r\n              #bodyweightValidation=\"ngModel\"\r\n              [minValue]=\"1\"\r\n              [wrongNumberMessage]=\"'Bodyweight must be at least 1'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"bodyweightValidation.errors && (bodyweightValidation.dirty || bodyweightValidation.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ bodyweightValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-3\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          (click)=\"registerAccount()\"\r\n          [disabled]=\"usernameValidation.errors || passwordValidation.errors || !passwordsMatch || emailValidator.errors || nameValidation.errors || heightValidator.errors || bodyweightValidation.errors || !isDateValid\"\r\n        >\r\n          <i class=\"fa fa-user-plus\">\r\n          </i>\r\n          Register\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"usernameExists || emailExists\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n            <div *ngIf=\"usernameExists\">\r\n              <i class=\"fa fa-close\">\r\n              </i>\r\n              Username already exists\r\n            </div>\r\n            <div *ngIf=\"emailExists\">\r\n              <i class=\"fa fa-close\">\r\n              </i>\r\n              E-Mail already exists\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_RegisterSettings__ = __webpack_require__("../../../../../src/app/_classes/RegisterSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_DateUtils__ = __webpack_require__("../../../../../src/app/_utils/DateUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_events_service__ = __webpack_require__("../../../../../src/app/_services/login-events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(authService, loginEvents, router) {
        this.authService = authService;
        this.loginEvents = loginEvents;
        this.router = router;
        this.registerSettings = new __WEBPACK_IMPORTED_MODULE_1__classes_RegisterSettings__["a" /* RegisterSettings */]();
        this.datePickerOptions = {
            dateFormat: 'dd-mm-yyyy',
            disableSince: Object(__WEBPACK_IMPORTED_MODULE_2__utils_DateUtils__["b" /* dateToIMyDate */])(new Date()),
        };
        this.registerSettings.male = true;
        this.registerSettings.weight = 1;
        this.registerSettings.height = 1;
    }
    RegisterFormComponent.prototype.passwordChanged = function () {
        this.passwordsMatch = this.registerSettings.password === this.passwordRepeat;
    };
    RegisterFormComponent.prototype.ngOnInit = function () { };
    RegisterFormComponent.prototype.registerAccount = function () {
        var _this = this;
        this.registerSettings.birthDate = this.birthday;
        this.authService
            .register(this.registerSettings)
            .subscribe(function (response) {
            _this.emailExists = response.emailExists;
            _this.usernameExists = response.usernameExists;
            if (!_this.usernameExists && !_this.emailExists) {
                _this.loginEvents.loginStateChanged();
                _this.router.navigateByUrl('/');
            }
        });
    };
    RegisterFormComponent.prototype.onInputFieldChanged = function (event) {
        this.isDateValid = event.valid;
        this.birthday = event.value;
    };
    RegisterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-form',
            template: __webpack_require__("../../../../../src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-form/register-form.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_login_events_service__["a" /* LoginEventsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <label for=\"text\">\r\n    {{ labelText }}\r\n  </label>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <input\r\n          class=\"form-control\"\r\n          id=\"text\"\r\n          name=\"text\"\r\n          type=\"text\"\r\n          [(ngModel)]=\"text\"\r\n          (keyup.enter)=\"onSubmit()\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cold-md-3\">\r\n    <button\r\n      class=\"btn btn-primary\"\r\n      (click)=\"onSubmit()\"\r\n    >\r\n      Submit\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.submitText = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.onSubmit = function () {
        this.submitText.emit(this.text);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SearchBarComponent.prototype, "labelText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "submitText", void 0);
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-bar',
            template: __webpack_require__("../../../../../src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Settings\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"name\">\r\n        Name\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-user\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            class=\"form-control\"\r\n            id=\"name\"\r\n            placeholder=\"Name\"\r\n            [(ngModel)]=\"userSettings.name\"\r\n            autofocus\r\n            appValidateLength\r\n            #nameValidation=\"ngModel\"\r\n            [minLength]=\"3\"\r\n            [maxLength]=\"63\"\r\n            [minLengthMessage]=\"'Name must be at least 3 characters long'\"\r\n            [maxLengthMessage]=\"'Name must be at max 63 characters long'\"\r\n            [noValueMessage]=\"'Name is required'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"nameValidation.errors && (nameValidation.dirty || nameValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ nameValidation.errors.message }}\r\n            </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"email\">\r\n        E-Mail Address\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-at\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"text\"\r\n            name=\"email\"\r\n            class=\"form-control\"\r\n            id=\"email\"\r\n            placeholder=\"you@example.com\"\r\n            [(ngModel)]=\"userSettings.email\"\r\n            autofocus\r\n            appValidateEmail\r\n            #emailValidator=\"ngModel\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"emailValidator.errors && (emailValidator.dirty || emailValidator.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ emailValidator.errors.message }}\r\n            </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"passwordOld\">\r\n        Old Password\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div\r\n            class=\"input-group-addon\"\r\n            style=\"width: 2.6rem\"\r\n          >\r\n            <i class=\"fa fa-key\">\r\n            </i>\r\n          </div>\r\n          <input\r\n            type=\"password\"\r\n            name=\"passwordOld\"\r\n            class=\"form-control\"\r\n            id=\"passwordOld\"\r\n            placeholder=\"Password\"\r\n            [(ngModel)]=\"passwordOld\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"oldPasswordIsWrong\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Current password is wrong\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"passwordNew\">\r\n        New Password\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div\r\n            class=\"input-group-addon\"\r\n            style=\"width: 2.6rem\"\r\n          >\r\n            <i class=\"fa fa-key\">\r\n            </i>\r\n          </div>\r\n          <input\r\n            type=\"password\"\r\n            name=\"passwordNew\"\r\n            class=\"form-control\"\r\n            id=\"passwordNew\"\r\n            placeholder=\"Password\"\r\n            [(ngModel)]=\"userSettings.password\"\r\n            (ngModelChange)=\"passwordChanged()\"\r\n            appValidateLength\r\n            #validatePassword=\"ngModel\"\r\n            [minLength]=\"5\"\r\n            [maxLength]=\"63\"\r\n            [noValueMessage]=\"'Password is required'\"\r\n            [minLengthMessage]=\"'Password must be at least 5 characters long'\"\r\n            [maxLengthMessage]=\"'Password must be at max 63 characters long'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validatePassword.errors && (validatePassword.dirty || validatePassword.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validatePassword.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"passwordConfirm\">\r\n        Confirm Password\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-repeat\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"password\"\r\n            name=\"passwordConfirm\"\r\n            class=\"form-control\"\r\n            id=\"passwordConfirm\"\r\n            placeholder=\"Password\"\r\n            autofocus\r\n            [(ngModel)]=\"passwordConfirm\"\r\n            (ngModelChange)=\"passwordChanged()\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"!passwordsMatch && (userSettings.password || passwordConfirm)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Passwords do not match\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"height\">\r\n        Height\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"height\"\r\n            class=\"form-control\"\r\n            id=\"height\"\r\n            required\r\n            [(ngModel)]=\"userSettings.height\"\r\n            appNumberMinMax\r\n            #heightValidator=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Height must be at least 1'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"heightValidator.errors && (heightValidator.dirty || heightValidator.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ heightValidator.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"bodyweight\">\r\n        Bodyweight\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"bodyweight\"\r\n            class=\"form-control\"\r\n            id=\"bodyweight\"\r\n            required\r\n            [(ngModel)]=\"userSettings.weight\"\r\n            appNumberMinMax\r\n            #bodyweightValidation=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Bodyweight must be at least 1'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"bodyweightValidation.errors && (bodyweightValidation.dirty || bodyweightValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ bodyweightValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        [disabled]=\"nameValidation.errors || emailValidator.errors || !passwordsMatch || heightValidator.errors || bodyweightValidation.errors || validatePassword.errors\"\r\n        (click)=\"saveSettings()\"\r\n      >\r\n        <i class=\"fa fa-save\">\r\n        </i>\r\n        Save settings\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_UserSettings__ = __webpack_require__("../../../../../src/app/_classes/UserSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/_services/settings.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
        this.userSettings = new __WEBPACK_IMPORTED_MODULE_1__classes_UserSettings__["a" /* UserSettings */]();
        this.userSettings.weight = 1;
        this.userSettings.height = 1;
    }
    SettingsComponent.prototype.passwordChanged = function () {
        this.passwordsMatch = this.userSettings.password === this.passwordConfirm;
    };
    SettingsComponent.prototype.getUserSettings = function () {
        var _this = this;
        this.settingsService
            .getUserSettings()
            .subscribe(function (userSettings) {
            _this.passwordOld = '';
            _this.passwordConfirm = '';
            _this.userSettings = __assign({}, userSettings, { password: undefined });
        });
    };
    SettingsComponent.prototype.saveSettings = function () {
        var _this = this;
        this.settingsService
            .saveUserSettings(this.userSettings)
            .subscribe(function (userSettings) {
            _this.passwordOld = '';
            _this.passwordConfirm = '';
            _this.userSettings = __assign({}, userSettings, { password: undefined });
        });
    };
    SettingsComponent.prototype.ngOnInit = function () {
        this.getUserSettings();
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tracking-settings/tracking-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tracking-settings/tracking-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Tracking Settings\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"name\">\r\n        Weekly burned calories goal\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"caloriesGoal\"\r\n            class=\"form-control\"\r\n            id=\"caloriesGoal\"\r\n            [(ngModel)]=\"trackingSettings.weeklyCaloriesGoal\"\r\n            autofocus\r\n            appNumberMinMax=\"\"\r\n            #caloriesGoalValidation=\"ngModel\"\r\n            [minValue]=\"0\"\r\n            [wrongNumberMessage]=\"'Goal must be at least 0'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"caloriesGoalValidation.errors && (caloriesGoalValidation.dirty || caloriesGoalValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ caloriesGoalValidation.errors.message }}\r\n            </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        [disabled]=\"caloriesGoalValidation.errors\"\r\n        (click)=\"saveTrackingSettings()\"\r\n      >\r\n        <i class=\"fa fa-save\">\r\n        </i>\r\n        Save goals\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tracking-settings/tracking-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/_services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_TrackingSettings__ = __webpack_require__("../../../../../src/app/_classes/TrackingSettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackingSettingsComponent = /** @class */ (function () {
    function TrackingSettingsComponent(userService) {
        this.userService = userService;
        this.trackingSettings = new __WEBPACK_IMPORTED_MODULE_2__classes_TrackingSettings__["a" /* TrackingSettings */]();
        this.trackingSettings.weeklyCaloriesGoal = 0;
    }
    TrackingSettingsComponent.prototype.getTrackingSettings = function () {
        var _this = this;
        this.userService
            .getTrackingSettings()
            .subscribe(function (trackingSettings) { return _this.trackingSettings = trackingSettings; });
    };
    TrackingSettingsComponent.prototype.saveTrackingSettings = function () {
        var _this = this;
        this.userService
            .saveTrackingSettings(this.trackingSettings)
            .subscribe(function (trackingSettings) { return _this.trackingSettings = trackingSettings; });
    };
    TrackingSettingsComponent.prototype.ngOnInit = function () {
        this.getTrackingSettings();
    };
    TrackingSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tracking-settings',
            template: __webpack_require__("../../../../../src/app/tracking-settings/tracking-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tracking-settings/tracking-settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]])
    ], TrackingSettingsComponent);
    return TrackingSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/wrong-path/wrong-path.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wrong-path/wrong-path.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  wrong-path!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/wrong-path/wrong-path.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WrongPathComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WrongPathComponent = /** @class */ (function () {
    function WrongPathComponent() {
    }
    WrongPathComponent.prototype.ngOnInit = function () {
    };
    WrongPathComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wrong-path',
            template: __webpack_require__("../../../../../src/app/wrong-path/wrong-path.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wrong-path/wrong-path.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WrongPathComponent);
    return WrongPathComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

<<<<<<< HEAD
=======
/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

>>>>>>> Apply fixes
/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map