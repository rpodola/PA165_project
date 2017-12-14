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

/***/ "../../../../../src/app/_classes/Activity2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity2; });
var Activity2 = /** @class */ (function () {
    function Activity2() {
    }
    return Activity2;
}());



/***/ }),

/***/ "../../../../../src/app/_classes/Category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, name, description) {
        if (description === void 0) { description = ''; }
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return Category;
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

/***/ "../../../../../src/app/_services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService() {
        this.accounts = [
            {
                id: 0,
                username: 'jozo',
                email: 'jozo@gmail.com',
                password: 'jozo',
            },
            {
                id: 1,
                username: 'milan',
                email: 'milan@gmail.com',
                password: 'jozo',
            },
        ];
    }
    AccountService.prototype.loginExists = function (_a) {
        var username = _a.username, email = _a.email;
        var usernameExists = this.accounts.findIndex(function (a) { return a.username === username; }) !== -1;
        var emailExists = this.accounts.findIndex(function (a) { return a.email === email; }) !== -1;
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])({ usernameExists: usernameExists, emailExists: emailExists });
    };
    AccountService.prototype.loginIsValid = function (_a) {
        var login = _a.login, password = _a.password;
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.accounts.findIndex(function (a) { return (a.username === login || a.email === login) && a.password === password; }) !== -1);
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
        /**
         * Should be cached after loading from REST
         */
        this.activities = [
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
    }
    ActivityService.prototype.getAllActivities = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.activities);
    };
    ActivityService.prototype.getActivities = function (categoryIds) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.activities.filter(function (activity) { return categoryIds.includes(activity.category.id); }));
    };
    ActivityService.prototype.getActivityDetail = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.activities.find(function (activity) { return activity.id === id; }));
    };
    ActivityService.prototype.createNewActivity = function (activity) {
        var nameExists = this.activities
            .filter(function (ac) { return ac.name === activity.name; })
            .length > 0;
        if (nameExists) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(undefined);
        }
        var activityDetail = {
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
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(activityDetail.id);
    };
    ActivityService.allActivitiesUrl = 'something';
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Category__ = __webpack_require__("../../../../../src/app/_classes/Category.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService() {
        this.categories = [
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](0, 'Exercise', 'Exercise is the best activity'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](1, 'Aerobics'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](2, 'Walking'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](3, 'Running'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](4, 'Swimming'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](5, 'Work'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](6, 'Work2'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](7, 'Work3'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](8, 'Work4'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](9, 'Work5'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](10, 'Work6'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](11, 'Work7'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](12, 'Work8'),
            new __WEBPACK_IMPORTED_MODULE_2__classes_Category__["a" /* Category */](13, 'Work9'),
        ];
    }
    CategoryService.prototype.getAllCategories = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.categories);
    };
    CategoryService.prototype.getCategory = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.categories.find(function (cat) { return cat.id === id; }));
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/record.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecordService = /** @class */ (function () {
    function RecordService(http) {
        this.http = http;
        this.records = [
            {
                activityId: 0,
                activityName: 'First activity',
                burnedCalories: 500,
                id: 0,
                userId: 0,
                date: '5.12.2017 8:50',
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
    }
    RecordService.prototype.getAllRecordsOfUser = function (userId) {
        if (userId === void 0) { userId = 0; }
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.records.filter(function (record) { return record.userId === userId; }));
    };
    RecordService.prototype.getRecorDetail = function (recordId) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.records.find(function (record) { return record.id === recordId; }));
    };
    RecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RecordService);
    return RecordService;
}());



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NumberMinMaxDirective.prototype, "minValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NumberMinMaxDirective.prototype, "maxValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NumberMinMaxDirective.prototype, "wrongNumberMessage", void 0);
    NumberMinMaxDirective = NumberMinMaxDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNumberMinMax]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NumberMinMaxDirective_1; }), multi: true },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appValidateEmail]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: ValidateEmailDirective_1, multi: true },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "minLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "maxLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "minLengthMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "maxLengthMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ValidateLengthDirective.prototype, "noValueMessage", void 0);
    ValidateLengthDirective = ValidateLengthDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appValidateLength]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: ValidateLengthDirective_1, multi: true }
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover \">\r\n  <thead>\r\n  <tr>\r\n    <th>\r\n      Name\r\n    </th>\r\n    <th *ngIf=\"!hideCategory\">\r\n      Category\r\n    </th>\r\n    <th>\r\n      Description\r\n    </th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let activity of activities\">\r\n    <td>\r\n      <a\r\n        *ngIf=\"!useButtonForActivityLink; else activityNameTextOnly\"\r\n        routerLink=\"/activities/{{activity.id}}\"\r\n        disabled=\"\"\r\n        >\r\n        {{ activity.name }}\r\n      </a>\r\n      <ng-template #activityNameTextOnly>\r\n        {{ activity.name }}\r\n      </ng-template>\r\n    </td>\r\n    <td *ngIf=\"!hideCategory\">\r\n      <a routerLink=\"/categories/{{activity.category.id}}\">\r\n        {{activity.category.name}}\r\n      </a>\r\n    </td>\r\n    <td>\r\n      {{ activity.description }}\r\n    </td>\r\n    <td *ngIf=\"useButtonForActivityLink\">\r\n      <a\r\n        class=\"btn btn-primary\"\r\n        routerLink=\"/activities/{{activity.id}}\"\r\n      >\r\n        View details\r\n      </a>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ActivitiesComponent.prototype, "activities", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActivitiesComponent.prototype, "hideCategory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActivitiesComponent.prototype, "useButtonForActivityLink", void 0);
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__("../../../../../src/app/activities/activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-detail/activity-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-detail/activity-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/activities\"\r\n  >\r\n    View all activities\r\n  </a>\r\n</div>\r\n\r\n<div\r\n  class=\"container\"\r\n  *ngIf=\"activity\"\r\n>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        {{ activity.name }}\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"category\">\r\n        Category\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <a\r\n            id=\"category\"\r\n            class=\"form-control text-primary\"\r\n            routerLink=\"/categories/{{activity.category.id}}\"\r\n          >\r\n            {{ activity.category.name }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Description\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span\r\n            class=\"form-control\"\r\n            id=\"description\"\r\n          >\r\n            {{ activity.description }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-burned-calories-list\r\n    [burnedCaloriesList]=\"activity.burnedCaloriesList\"\r\n    (addBurnedCalories)=\"onAddBurnedCalories($event)\"\r\n    (removeBurnedCalories)=\"onRemoveBurnedCalories($event)\"\r\n  >\r\n  </app-burned-calories-list>\r\n\r\n  <button class=\"btn btn-success\">\r\n    Save changes\r\n  </button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-detail/activity-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailComponent; });
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




var ActivityDetailComponent = /** @class */ (function () {
    function ActivityDetailComponent(activityService, location, route) {
        this.activityService = activityService;
        this.location = location;
        this.route = route;
    }
    ActivityDetailComponent.prototype.ngOnInit = function () {
        this.getActivity();
    };
    ActivityDetailComponent.prototype.getActivity = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.activityService
            .getActivityDetail(id)
            .subscribe(function (activity) {
            _this.activity = activity;
        });
    };
    ActivityDetailComponent.prototype.onAddBurnedCalories = function (burnedCalories) {
        var burned = this.activity.burnedCaloriesList.filter(function (bc) { return bc.upperWeightBoundary === burnedCalories.upperWeightBoundary; });
        if (burned.length > 0) {
            burned[0].amount = burnedCalories.amount;
        }
        else {
            this.activity.burnedCaloriesList.push(burnedCalories);
            this.activity.burnedCaloriesList.sort(function (bc1, bc2) { return bc1.upperWeightBoundary - bc2.upperWeightBoundary; });
        }
    };
    ActivityDetailComponent.prototype.onRemoveBurnedCalories = function (burnedCalories) {
        this.activity.burnedCaloriesList = this.activity.burnedCaloriesList.filter(function (bc) { return bc !== burnedCalories; });
    };
    ActivityDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activity-detail',
            template: __webpack_require__("../../../../../src/app/activity-detail/activity-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-detail/activity-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ActivityDetailComponent);
    return ActivityDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-form/activity-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-form/activity-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/activities\"\r\n  >\r\n    View all activities\r\n  </a>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Create New Activity\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"name\">\r\n        Name\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-user\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            class=\"form-control\"\r\n            id=\"name\"\r\n            placeholder=\"Name\"\r\n            [(ngModel)]=\"activity.name\"\r\n            autofocus\r\n            #nameValidation=\"ngModel\"\r\n            appValidateLength\r\n            [minLength]=\"3\"\r\n            [maxLength]=\"127\"\r\n            [minLengthMessage]=\"'Name must be at least 3 characters long'\"\r\n            [maxLengthMessage]=\"'Name must be at max 63 characters long'\"\r\n            [noValueMessage]=\"'Name is required'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"nameValidation.errors && (nameValidation.dirty || nameValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ nameValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Description\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-user\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"text\"\r\n            name=\"description\"\r\n            class=\"form-control\"\r\n            id=\"description\"\r\n            placeholder=\"Description\"\r\n            [(ngModel)]=\"activity.description\"\r\n            autofocus\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Category\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-user\">\r\n            </i>\r\n          </div>\r\n\r\n          <select\r\n            id=\"category\"\r\n            name=\"category\"\r\n            [(ngModel)]=\"activity.categoryId\"\r\n          >\r\n            <option\r\n              *ngFor=\"let category of categories\"\r\n              [value]=\"category.id\"\r\n            >\r\n              {{ category.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"activity.categoryId === undefined\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Can't create activity without Category\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-3\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        (click)=\"createNewActivity()\"\r\n        [disabled]=\"nameValidation.errors || activity.categoryId === undefined\"\r\n      >\r\n        <i class=\"fa fa-user-plus\">\r\n        </i>\r\n        Create\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"activityNameExists\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n        <span class=\"text-danger align-middle\">\r\n          <i class=\"fa fa-close\">\r\n          </i>\r\n          Activity with the same name already exists\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-form/activity-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Activity2__ = __webpack_require__("../../../../../src/app/_classes/Activity2.ts");
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
        this.activity = new __WEBPACK_IMPORTED_MODULE_1__classes_Activity2__["a" /* Activity2 */]();
    }
    ActivityFormComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService
            .getAllCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
            if (categories) {
                _this.activity.categoryId = categories[0].id;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"ml-3 mt-2\">\r\n  <app-search-bar\r\n    labelText=\"Search by name\"\r\n    (submitText)=\"onSubmitText($event)\"\r\n  >\r\n  </app-search-bar>\r\n</div>\r\n<div class=\"row\">\r\n  <div\r\n    class=\"col-auto\"\r\n    *ngIf=\"showCategories\"\r\n  >\r\n    <span\r\n      class=\"show-categories\"\r\n      (click)=\"showHide()\"\r\n    >\r\n      Hide categories\r\n    </span>\r\n    <app-category-checkboxes\r\n      [selectedCategoryIds]=\"selectedCategoryIds\"\r\n      (filterChange)=\"getActivitiesFromCategories($event)\"\r\n    >\r\n    </app-category-checkboxes>\r\n  </div>\r\n  <div class=\"col\">\r\n    <span\r\n      *ngIf=\"!showCategories\"\r\n      class=\"show-categories\"\r\n      (click)=\"showHide()\"\r\n    >\r\n      Show categories\r\n    </span>\r\n    <a\r\n      class=\"ml-2\"\r\n      routerLink=\"new\"\r\n    >\r\n      add new\r\n    </a>\r\n    <app-activities\r\n      [activities]=\"activities\"\r\n      [useButtonForActivityLink]=\"true\"\r\n    >\r\n    </app-activities>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-list/activity-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
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
    function ActivityListComponent(activityService) {
        this.activityService = activityService;
        this.selectedCategoryIds = [];
        this.nameFilter = '';
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
            .subscribe(function (activities) { return _this.activitiesCache = activities; });
    };
    ActivityListComponent.prototype.getAllActivities = function () {
        this.activities = this.activitiesCache;
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
        this.getAllActivities();
    };
    ActivityListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activity-list',
            template: __webpack_require__("../../../../../src/app/activity-list/activity-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-list/activity-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */]])
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/activities', pathMatch: 'full' },
    { path: 'activities', component: __WEBPACK_IMPORTED_MODULE_3__activity_list_activity_list_component__["a" /* ActivityListComponent */] },
    { path: 'activities/new', component: __WEBPACK_IMPORTED_MODULE_12__activity_form_activity_form_component__["a" /* ActivityFormComponent */] },
    { path: 'activities/:id', component: __WEBPACK_IMPORTED_MODULE_2__activity_detail_activity_detail_component__["a" /* ActivityDetailComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_8__category_list_category_list_component__["a" /* CategoryListComponent */] },
    { path: 'categories/:id', component: __WEBPACK_IMPORTED_MODULE_7__category_detail_category_detail_component__["a" /* CategoryDetailComponent */] },
    { path: 'records', component: __WEBPACK_IMPORTED_MODULE_4__record_list_record_list_component__["a" /* RecordListComponent */] },
    { path: 'records/:id', component: __WEBPACK_IMPORTED_MODULE_5__record_detail_record_detail_component__["a" /* RecordDetailComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_form_register_form_component__["a" /* RegisterFormComponent */] },
    //  catch all
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__wrong_path_wrong_path_component__["a" /* WrongPathComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activity_detail_activity_detail_component__ = __webpack_require__("../../../../../src/app/activity-detail/activity-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activity_list_activity_list_component__ = __webpack_require__("../../../../../src/app/activity-list/activity-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_activity_service__ = __webpack_require__("../../../../../src/app/_services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__record_list_record_list_component__ = __webpack_require__("../../../../../src/app/record-list/record-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_record_service__ = __webpack_require__("../../../../../src/app/_services/record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__record_detail_record_detail_component__ = __webpack_require__("../../../../../src/app/record-detail/record-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__wrong_path_wrong_path_component__ = __webpack_require__("../../../../../src/app/wrong-path/wrong-path.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__category_checkboxes_category_checkboxes_component__ = __webpack_require__("../../../../../src/app/category-checkboxes/category-checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__category_detail_category_detail_component__ = __webpack_require__("../../../../../src/app/category-detail/category-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__activities_activities_component__ = __webpack_require__("../../../../../src/app/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_form_register_form_component__ = __webpack_require__("../../../../../src/app/register-form/register-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__validators_validate_email_directive__ = __webpack_require__("../../../../../src/app/_validators/validate-email.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__validators_validate_length_directive__ = __webpack_require__("../../../../../src/app/_validators/validate-length.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_account_service__ = __webpack_require__("../../../../../src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__validators_number_min_max_directive__ = __webpack_require__("../../../../../src/app/_validators/number-min-max.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__activity_form_activity_form_component__ = __webpack_require__("../../../../../src/app/activity-form/activity-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__burned_calories_list_burned_calories_list_component__ = __webpack_require__("../../../../../src/app/burned-calories-list/burned-calories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/search-bar/search-bar.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__activity_detail_activity_detail_component__["a" /* ActivityDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__activity_list_activity_list_component__["a" /* ActivityListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__record_list_record_list_component__["a" /* RecordListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__record_detail_record_detail_component__["a" /* RecordDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__wrong_path_wrong_path_component__["a" /* WrongPathComponent */],
                __WEBPACK_IMPORTED_MODULE_14__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__category_checkboxes_category_checkboxes_component__["a" /* CategoryCheckboxesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__category_detail_category_detail_component__["a" /* CategoryDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__category_list_category_list_component__["a" /* CategoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_22__register_form_register_form_component__["a" /* RegisterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_23__validators_validate_email_directive__["a" /* ValidateEmailDirective */],
                __WEBPACK_IMPORTED_MODULE_24__validators_validate_length_directive__["a" /* ValidateLengthDirective */],
                __WEBPACK_IMPORTED_MODULE_26__validators_number_min_max_directive__["a" /* NumberMinMaxDirective */],
                __WEBPACK_IMPORTED_MODULE_27__activity_form_activity_form_component__["a" /* ActivityFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__burned_calories_list_burned_calories_list_component__["a" /* BurnedCaloriesListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__search_bar_search_bar_component__["a" /* SearchBarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__["NgDatepickerModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_11__services_record_service__["a" /* RecordService */],
                __WEBPACK_IMPORTED_MODULE_16__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_25__services_account_service__["a" /* AccountService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/burned-calories-list/burned-calories-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Burned calories per bodyweight\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-1 field-label-responsive\">\r\n      <label for=\"weight\">\r\n        Weight\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-1\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"number\"\r\n            id=\"weight\"\r\n            name=\"weight\"\r\n            [(ngModel)]=\"upperWeightBoundary\"\r\n            appNumberMinMax\r\n            #validateWeightBoundary=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Weight must be at least 1'\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validateWeightBoundary.errors && (validateWeightBoundary.dirty || validateWeightBoundary.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ validateWeightBoundary.errors.message }}\r\n            </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-1 field-label-responsive\">\r\n      <label for=\"amount\">\r\n        Amount\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-1\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"number\"\r\n            id=\"amount\"\r\n            name=\"amount\"\r\n            [(ngModel)]=\"amount\"\r\n            appNumberMinMax\r\n            #validateAmount=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Amount must be at least 1'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validateAmount.errors && (validateAmount.dirty || validateAmount.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ validateAmount.errors.message }}\r\n            </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <button\r\n        class=\"btn btn-primary\"\r\n        (click)=\"addBurnedCaloriesToList()\"\r\n        [disabled]=\"validateAmount.errors || validateWeightBoundary.errors\"\r\n      >\r\n        Add\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <table class=\"table\">\r\n    <thead>\r\n    <th>\r\n      Weight\r\n    </th>\r\n    <th>\r\n      Calories\r\n    </th>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let burnedCalories of burnedCaloriesList\">\r\n      <td>\r\n        {{ burnedCalories.upperWeightBoundary }}\r\n      </td>\r\n      <td>\r\n        {{ burnedCalories.amount }}\r\n      </td>\r\n      <td>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          (click)=\"removeBurnedCaloriesFromList(burnedCalories)\"\r\n        >\r\n          Remove\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

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
        this.addBurnedCalories = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeBurnedCalories = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], BurnedCaloriesListComponent.prototype, "burnedCaloriesList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BurnedCaloriesListComponent.prototype, "addBurnedCalories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BurnedCaloriesListComponent.prototype, "removeBurnedCalories", void 0);
    BurnedCaloriesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        this.filterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CategoryCheckboxesComponent.prototype, "selectedCategoryIds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryCheckboxesComponent.prototype, "filterChange", void 0);
    CategoryCheckboxesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-detail/category-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/categories\"\r\n  >\r\n    View all categories\r\n  </a>\r\n</div>\r\n\r\n<div\r\n  class=\"container\"\r\n  *ngIf=\"category\"\r\n>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        {{ category.name }}\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"description\">\r\n        Description\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span\r\n            class=\"form-control\"\r\n            id=\"description\"\r\n          >\r\n            {{ category.description }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-activities\r\n    [activities]=\"activitiesInCategory\"\r\n    [hideCategory]=\"true\"\r\n  >\r\n  </app-activities>\r\n</div>\r\n\r\n"

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
            .subscribe(function (activities) { return _this.activitiesInCategory = activities; });
    };
    CategoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.categoryService
            .getCategory(id)
            .subscribe(function (cat) { return _this.setCategory(cat); });
    };
    CategoryDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category-detail',
            template: __webpack_require__("../../../../../src/app/category-detail/category-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-detail/category-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_4__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover \">\r\n  <thead>\r\n  <tr>\r\n    <th>\r\n      Name\r\n    </th>\r\n    <th>\r\n      Description\r\n    </th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let category of categories\">\r\n    <td>\r\n      {{ category.name }}\r\n    </td>\r\n    <td>\r\n      {{ category.description }}\r\n    </td>\r\n    <td>\r\n      <a\r\n        class=\"btn btn-primary\"\r\n        routerLink=\"/categories/{{category.id}}\"\r\n      >\r\n        View activities\r\n      </a>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"container\">\r\n  <form\r\n    class=\"form-horizontal\"\r\n    role=\"form\"\r\n    method=\"POST\"\r\n    action=\"/register\"\r\n  >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-6\">\r\n        <h2>\r\n          Sign In\r\n        </h2>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"name\">\r\n          Login\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-user-secret\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"text\"\r\n              name=\"name\"\r\n              class=\"form-control\"\r\n              id=\"name\"\r\n              placeholder=\"Username or E-mail\"\r\n              required autofocus\r\n              [(ngModel)]=\"nameOrEmail\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"password\">\r\n          Password\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group has-danger\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div\r\n              class=\"input-group-addon\"\r\n              style=\"width: 2.6rem\"\r\n            >\r\n              <i class=\"fa fa-lock\">\r\n              </i>\r\n            </div>\r\n            <input\r\n              type=\"password\"\r\n              name=\"password\"\r\n              class=\"form-control\"\r\n              id=\"password\"\r\n              placeholder=\"Password\"\r\n              required\r\n              [(ngModel)]=\"password\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-6\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          [disabled]=\"!password || !nameOrEmail\"\r\n        >\r\n          <i class=\"fa fa-sign-in\">\r\n          </i>\r\n          Login\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-6\">\r\n        <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\" >\r\n          Don't have an account?\r\n          <a routerLink=\"/register\">\r\n            Sign Up Here\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/_services/account.service.ts");
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
    function LoginFormComponent(accountService) {
        this.accountService = accountService;
    }
    LoginFormComponent.prototype.login = function () {
        this.accountService
            .loginIsValid({ login: this.nameOrEmail, password: this.password })
            .subscribe(function (isValid) { return null; });
    };
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
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

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark \">\r\n  <button\r\n    class=\"navbar-toggler\"\r\n    (click)=\"collapse=!collapse\"\r\n    type=\"button\"\r\n    aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\"\r\n  >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div\r\n    class=\"navbar-collapse\"\r\n    (click)=\"collapse=true\"\r\n    [hidden]=\"collapse\"\r\n  >\r\n    <div class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\">\r\n      <a\r\n        class=\"nav-link\"\r\n        routerLink=\"activities\"\r\n        routerLinkActive=\"active\"\r\n      >\r\n        Activities\r\n      </a>\r\n    </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          routerLink=\"categories\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Activity categories\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          routerLink=\"records\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Records\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          routerLink=\"settings\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Settings\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          routerLink=\"login\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Login\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a\r\n          class=\"nav-link\"\r\n          routerLink=\"register\"\r\n          routerLinkActive=\"active\"\r\n        >\r\n          Register\r\n        </a>\r\n      </li>\r\n    </div>\r\n  </div>\r\n  <a class=\"navbar-brand ml-auto\" id=\"brand\">\r\n    {{ title }}\r\n  </a>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.collapse = true;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NavBarComponent.prototype, "title", void 0);
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div>\r\n  <a\r\n    class=\"btn btn-outline-primary\"\r\n    routerLink=\"/records\"\r\n  >\r\n    View all records\r\n  </a>\r\n</div>\r\n\r\n<div\r\n  class=\"container\"\r\n  *ngIf=\"record\"\r\n>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Record\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"activity\">\r\n        Activity\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <a\r\n            routerLink=\"/activities/{{record.activityId}}\"\r\n            class=\"form-control text-primary\"\r\n          >\r\n            {{ record.activityName }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"birthday\">\r\n        Time\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <span (click)=\"overridePopupWindowStyle()\">\r\n              <ng-datepicker\r\n                id=\"birthday\"\r\n                position=\"bottom-right\"\r\n                [(ngModel)]=\"record.date\"\r\n              >\r\n              </ng-datepicker>\r\n            </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"calories\">\r\n        Burned calories\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"calories\"\r\n            class=\"form-control\"\r\n            id=\"calories\"\r\n            [(ngModel)]=\"record.burnedCalories\"\r\n            disabled\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"distance\">\r\n        Distance\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"distance\"\r\n            class=\"form-control\"\r\n            id=\"distance\"\r\n            [(ngModel)]=\"record.distance\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"duration\">\r\n        Duration\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"duration\"\r\n            class=\"form-control\"\r\n            id=\"duration\"\r\n            [(ngModel)]=\"record.duration\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"bodyweight\">\r\n        Bodyweight\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"bodyweight\"\r\n            class=\"form-control\"\r\n            id=\"bodyweight\"\r\n            [(ngModel)]=\"record.weight\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        var id = +this.route.snapshot.paramMap.get('id');
        this.recordService
            .getRecorDetail(id)
            .subscribe(function (record) {
            _this.record = record;
        });
    };
    RecordDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<table class=\"table table-hover\">\r\n  <thead>\r\n  <tr>\r\n    <th>\r\n      Activity\r\n    </th>\r\n    <th>\r\n      Date\r\n    </th>\r\n    <th>\r\n      Burned calories\r\n    </th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let userRecord of userRecords\">\r\n    <td>\r\n      <a routerLink=\"/activities/{{userRecord.activityId}}\">\r\n        {{ userRecord.activityName }}\r\n      </a>\r\n    </td>\r\n    <td>\r\n      {{ userRecord.date }}\r\n    </td>\r\n    <td>\r\n      {{ userRecord.burnedCalories }}\r\n    </td>\r\n    <td>\r\n      <a\r\n        class=\"btn btn-primary\"\r\n        routerLink=\"/records/{{userRecord.id}}\"\r\n      >\r\n        View details\r\n      </a>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

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
            .subscribe(function (userRecords) { return _this.userRecordsCached = userRecords; });
    };
    RecordListComponent.prototype.getAllUserRecords = function () {
        this.userRecords = this.userRecordsCached;
    };
    RecordListComponent.prototype.ngOnInit = function () {
        this.loadAllUserRecordsFromServer();
        this.getAllUserRecords();
    };
    RecordListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "@media(min-width: 768px) {\r\n  .field-label-responsive {\r\n    padding-top: .5rem;\r\n    text-align: right;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form\r\n    class=\"form-horizontal\"\r\n    role=\"form\"\r\n    method=\"POST\"\r\n    action=\"/register\"\r\n  >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-6\">\r\n        <h2>\r\n          Register New User\r\n        </h2>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"username\">\r\n          Username\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-user-secret\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"text\"\r\n              name=\"username\"\r\n              class=\"form-control\"\r\n              id=\"username\"\r\n              placeholder=\"Username\"\r\n              [(ngModel)]=\"registerSettings.username\"\r\n              required autofocus\r\n              appValidateLength\r\n              #usernameValidation=\"ngModel\"\r\n              [minLength]=\"3\"\r\n              [maxLength]=\"63\"\r\n              [noValueMessage]=\"'Username is required'\"\r\n              [minLengthMessage]=\"'Username must be at least 3 characters long'\"\r\n              [maxLengthMessage]=\"'Username must be at max 63 characters long'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"usernameValidation.errors && (usernameValidation.dirty || usernameValidation.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ usernameValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"name\">\r\n          Name\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-user\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"text\"\r\n              name=\"name\"\r\n              class=\"form-control\"\r\n              id=\"name\"\r\n              placeholder=\"Name\"\r\n              [(ngModel)]=\"registerSettings.name\"\r\n              autofocus\r\n              appValidateLength\r\n              #nameValidation=\"ngModel\"\r\n              [minLength]=\"3\"\r\n              [maxLength]=\"63\"\r\n              [minLengthMessage]=\"'Name must be at least 3 characters long'\"\r\n              [maxLengthMessage]=\"'Name must be at max 63 characters long'\"\r\n              [noValueMessage]=\"'Name is required'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"nameValidation.errors && (nameValidation.dirty || nameValidation.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ nameValidation.errors.message }}\r\n            </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"email\">\r\n          E-Mail Address\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-at\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"text\"\r\n              name=\"email\"\r\n              class=\"form-control\"\r\n              id=\"email\"\r\n              placeholder=\"you@example.com\"\r\n              [(ngModel)]=\"registerSettings.email\"\r\n              autofocus\r\n              required\r\n              appValidateEmail\r\n              #emailValidator=\"ngModel\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"emailValidator.errors && (emailValidator.dirty || emailValidator.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ emailValidator.errors.message }}\r\n            </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"password\">\r\n          Password\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group has-danger\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div\r\n              class=\"input-group-addon\"\r\n              style=\"width: 2.6rem\"\r\n            >\r\n              <i class=\"fa fa-key\">\r\n              </i>\r\n            </div>\r\n            <input\r\n              type=\"password\"\r\n              name=\"password\"\r\n              class=\"form-control\"\r\n              id=\"password\"\r\n              placeholder=\"Password\"\r\n              [(ngModel)]=\"registerSettings.password\"\r\n              (ngModelChange)=\"passwordChanged()\"\r\n              autofocus\r\n              appValidateLength\r\n              #passwordValidation=\"ngModel\"\r\n              [minLength]=\"5\"\r\n              [maxLength]=\"63\"\r\n              [noValueMessage]=\"'Password is required'\"\r\n              [minLengthMessage]=\"'Password must be at least 5 characters long'\"\r\n              [maxLengthMessage]=\"'Password must be at max 63 characters long'\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"passwordValidation.errors && (passwordValidation.dirty || passwordValidation.touched)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ passwordValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"passwordConfirm\">\r\n          Confirm Password\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-repeat\">\r\n              </i>\r\n            </div>\r\n\r\n            <input\r\n              type=\"password\"\r\n              name=\"passwordConfirm\"\r\n              class=\"form-control\"\r\n              id=\"passwordConfirm\"\r\n              placeholder=\"Password\"\r\n              [(ngModel)]=\"passwordRepeat\"\r\n              (ngModelChange)=\"passwordChanged()\"\r\n            >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"!passwordsMatch && (registerSettings.password || passwordRepeat)\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Passwords do not match\r\n              </i>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label for=\"birthday\">\r\n          Birthday\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n              <i class=\"fa fa-birthday-cake\">\r\n              </i>\r\n            </div>\r\n\r\n            <span (click)=\"overridePopupWindowStyle()\">\r\n              <ng-datepicker\r\n                id=\"birthday\"\r\n                name=\"birthday\"\r\n                position=\"bottom-right\"\r\n                [(ngModel)]=\"registerSettings.birthday\"\r\n              >\r\n              </ng-datepicker>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 field-label-responsive\">\r\n        <label>\r\n          Gender\r\n        </label>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n            <div class=\"input-group-addon\" style=\"width: 5.5rem\">\r\n              <form name=\"genders\">\r\n                <i class=\"fa fa-mars\">\r\n                </i>\r\n                <input type=\"radio\" [(ngModel)]=\"male\" [value]=\"true\" name=\"male\">\r\n                <i class=\"fa fa-venus\"></i>\r\n                <input type=\"radio\" [(ngModel)]=\"male\" [value]=\"false\" name=\"female\">\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\"></div>\r\n      <div class=\"col-md-3\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          (click)=\"registerAccount()\"\r\n          [disabled]=\"usernameValidation.errors || passwordValidation.errors || !passwordsMatch || emailValidator.errors || nameValidation.errors\"\r\n        >\r\n          <i class=\"fa fa-user-plus\">\r\n          </i>\r\n          Register\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div\r\n          *ngIf=\"usernameExists || emailExists\"\r\n          class=\"form-control-feedback\"\r\n        >\r\n          <span class=\"text-danger align-middle\">\r\n            <div *ngIf=\"usernameExists\">\r\n              <i class=\"fa fa-close\">\r\n              </i>\r\n              Username already exists\r\n            </div>\r\n            <div *ngIf=\"emailExists\">\r\n              <i class=\"fa fa-close\">\r\n              </i>\r\n              E-Mail already exists\r\n            </div>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register-form/register-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_RegisterSettings__ = __webpack_require__("../../../../../src/app/_classes/RegisterSettings.ts");
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
    function RegisterFormComponent(accountService) {
        this.accountService = accountService;
        this.registerSettings = new __WEBPACK_IMPORTED_MODULE_2__classes_RegisterSettings__["a" /* RegisterSettings */]();
        this.registerSettings.birthday = new Date();
    }
    RegisterFormComponent.prototype.passwordChanged = function () {
        this.passwordsMatch = this.registerSettings.password === this.passwordRepeat;
    };
    RegisterFormComponent.prototype.ngOnInit = function () { };
    RegisterFormComponent.prototype.authenticate = function () {
        if (!this.usernameExists && !this.emailExists) {
        }
    };
    RegisterFormComponent.prototype.registerAccount = function () {
        var _this = this;
        this.accountService
            .loginExists({ username: this.registerSettings.username, email: this.registerSettings.email })
            .subscribe(function (result) {
            _this.emailExists = result.emailExists;
            _this.usernameExists = result.usernameExists;
            _this.authenticate();
        });
    };
    /**
     * Required hack to override datepicker position which is implicitly under other components :/
     */
    RegisterFormComponent.prototype.overridePopupWindowStyle = function () {
        var el = document.getElementsByClassName('ngx-datepicker-calendar-container');
        if (el.length > 0) {
            el[0]['style']['marginLeft'] = '75px';
        }
    };
    RegisterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__("../../../../../src/app/register-form/register-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-form/register-form.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
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
        this.submitText = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.onSubmit = function () {
        this.submitText.emit(this.text);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SearchBarComponent.prototype, "labelText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "submitText", void 0);
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <h2>\r\n        Settings\r\n      </h2>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"name\">\r\n        Name\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-user\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            class=\"form-control\"\r\n            id=\"name\"\r\n            placeholder=\"Name\"\r\n            [(ngModel)]=\"userSettings.name\"\r\n            autofocus\r\n            appValidateLength\r\n            #nameValidation=\"ngModel\"\r\n            [minLength]=\"3\"\r\n            [maxLength]=\"63\"\r\n            [minLengthMessage]=\"'Name must be at least 3 characters long'\"\r\n            [maxLengthMessage]=\"'Name must be at max 63 characters long'\"\r\n            [noValueMessage]=\"'Name is required'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"nameValidation.errors && (nameValidation.dirty || nameValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ nameValidation.errors.message }}\r\n            </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"email\">\r\n        E-Mail Address\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-at\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"text\"\r\n            name=\"email\"\r\n            class=\"form-control\"\r\n            id=\"email\"\r\n            placeholder=\"you@example.com\"\r\n            [(ngModel)]=\"userSettings.email\"\r\n            autofocus\r\n            appValidateEmail\r\n            #emailValidator=\"ngModel\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"emailValidator.errors && (emailValidator.dirty || emailValidator.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n            <i class=\"fa fa-close\">\r\n              {{ emailValidator.errors.message }}\r\n            </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"passwordOld\">\r\n        Old Password\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div\r\n            class=\"input-group-addon\"\r\n            style=\"width: 2.6rem\"\r\n          >\r\n            <i class=\"fa fa-key\">\r\n            </i>\r\n          </div>\r\n          <input\r\n            type=\"password\"\r\n            name=\"passwordOld\"\r\n            class=\"form-control\"\r\n            id=\"passwordOld\"\r\n            placeholder=\"Password\"\r\n            [(ngModel)]=\"passwordOld\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"oldPasswordIsWrong\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Current password is wrong\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"passwordNew\">\r\n        New Password\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div\r\n            class=\"input-group-addon\"\r\n            style=\"width: 2.6rem\"\r\n          >\r\n            <i class=\"fa fa-key\">\r\n            </i>\r\n          </div>\r\n          <input\r\n            type=\"password\"\r\n            name=\"passwordNew\"\r\n            class=\"form-control\"\r\n            id=\"passwordNew\"\r\n            placeholder=\"Password\"\r\n            [(ngModel)]=\"userSettings.password\"\r\n            (ngModelChange)=\"passwordChanged()\"\r\n            appValidateLength\r\n            #validatePassword=\"ngModel\"\r\n            [minLength]=\"5\"\r\n            [maxLength]=\"63\"\r\n            [noValueMessage]=\"'Password is required'\"\r\n            [minLengthMessage]=\"'Password must be at least 5 characters long'\"\r\n            [maxLengthMessage]=\"'Password must be at max 63 characters long'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"validatePassword.errors && (validatePassword.dirty || validatePassword.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ validatePassword.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"passwordConfirm\">\r\n        Confirm Password\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <div class=\"input-group-addon\" style=\"width: 2.6rem\">\r\n            <i class=\"fa fa-repeat\">\r\n            </i>\r\n          </div>\r\n\r\n          <input\r\n            type=\"password\"\r\n            name=\"passwordConfirm\"\r\n            class=\"form-control\"\r\n            id=\"passwordConfirm\"\r\n            placeholder=\"Password\"\r\n            autofocus\r\n            [(ngModel)]=\"passwordConfirm\"\r\n            (ngModelChange)=\"passwordChanged()\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"!passwordsMatch && (userSettings.password || passwordConfirm)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                Passwords do not match\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"height\">\r\n        Height\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"height\"\r\n            class=\"form-control\"\r\n            id=\"height\"\r\n            required\r\n            [(ngModel)]=\"userSettings.height\"\r\n            appNumberMinMax\r\n            #heightValidator=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Height must be at least 1'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"heightValidator.errors && (heightValidator.dirty || heightValidator.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ heightValidator.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 field-label-responsive\">\r\n      <label for=\"bodyweight\">\r\n        Bodyweight\r\n      </label>\r\n    </div>\r\n    <div class=\"col-md-auto\">\r\n      <div class=\"form-group has-danger\">\r\n        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\r\n          <input\r\n            type=\"number\"\r\n            name=\"bodyweight\"\r\n            class=\"form-control\"\r\n            id=\"bodyweight\"\r\n            required\r\n            [(ngModel)]=\"userSettings.weight\"\r\n            appNumberMinMax\r\n            #bodyweightValidation=\"ngModel\"\r\n            [minValue]=\"1\"\r\n            [wrongNumberMessage]=\"'Bodyweight must be at least 1'\"\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div\r\n        *ngIf=\"bodyweightValidation.errors && (bodyweightValidation.dirty || bodyweightValidation.touched)\"\r\n        class=\"form-control-feedback\"\r\n      >\r\n          <span class=\"text-danger align-middle\">\r\n              <i class=\"fa fa-close\">\r\n                {{ bodyweightValidation.errors.message }}\r\n              </i>\r\n          </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-success\"\r\n        [disabled]=\"nameValidation.errors || emailValidator.errors || !passwordsMatch || heightValidator.errors || bodyweightValidation.errors || validatePassword.errors\"\r\n      >\r\n        <i class=\"fa fa-save\">\r\n        </i>\r\n        Save settings\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_UserSettings__ = __webpack_require__("../../../../../src/app/_classes/UserSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("../../../../../src/app/_services/account.service.ts");
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
    function SettingsComponent(accountService) {
        this.accountService = accountService;
        this.userSettings = new __WEBPACK_IMPORTED_MODULE_1__classes_UserSettings__["a" /* UserSettings */]();
        this.userSettings.weight = 1;
        this.userSettings.height = 1;
    }
    SettingsComponent.prototype.passwordChanged = function () {
        this.passwordsMatch = this.userSettings.password === this.passwordConfirm;
    };
    SettingsComponent.prototype.getUserSettings = function () {
        /* this.accountService
           .getUserSettings()
           .subscribe(userSettings => this.userSettings = userSettings);*/
    };
    SettingsComponent.prototype.ngOnInit = function () {
        this.getUserSettings();
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
    ], SettingsComponent);
    return SettingsComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map