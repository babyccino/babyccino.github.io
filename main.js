(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/board/board.component */ "./src/app/components/board/board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/post.service */ "./src/app/core/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, postService) {
        this.userService = userService;
        this.postService = postService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.populate();
        this.postService.populate();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _core_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_add_post_form_add_post_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-post-form/add-post-form.component */ "./src/app/components/add-post-form/add-post-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_post_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/services/post.service */ "./src/app/core/services/post.service.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"],
                _components_add_post_form_add_post_form_component__WEBPACK_IMPORTED_MODULE_8__["AddPostFormComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_16__["PostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                _core_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"],
                _core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
                _core_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"],
                _core_services_post_service__WEBPACK_IMPORTED_MODULE_15__["PostService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-post-form/add-post-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-post-form/add-post-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signUpForm\"\n\t(ngSubmit)=\"onFormSubmit()\"\n\tclass=\"my-form\">\n\t<fieldset>\n\t\t<legend>Post</legend>\n\t\t\t<!--- Title Block -->\n\t\t<div>\n\t\t\t<label for=\"inputTitle\">Title</label>\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t\tid=\"inputTitle\" formControlName=\"title\"\n\t\t\t\t\tplaceholder=\"Title\">\n\t\t\t</div>\n\n\t\t\t<!-- Title error block -->\n\t\t\t<div *ngIf=\"title.invalid && title.touched\">\n\t\t\t\t<div *ngIf = \"title.errors?.required\">\n\t\t\t\t\t\tTitle field can't be blank\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!--- URL Block -->\n\t\t<div>\n\t\t\t<label for=\"inputURL\">URL</label>\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t\tid=\"inputURL\" formControlName=\"url\"\n\t\t\t\t\tplaceholder=\"URL\">\n\t\t\t</div>\n\n\t\t\t<!-- URL error block -->\n\t\t\t<div *ngIf=\"url.invalid && url.touched\">\n\t\t\t\t<div *ngIf = \"url.errors?.required\">\n\t\t\t\t\t\tURL field can't be blank\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf = \"url.errors?.pattern\">\n\t\t\t\t\t\tThe URL doesn't seem right\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!--- Body Block -->\n\t\t<div class=\"body-block\">\n\t\t\t<label for=\"inputBody\">Body</label>\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<textarea type=\"text\"\n\t\t\t\t\tid=\"inputBody\" formControlName=\"body\"\n\t\t\t\t\tplaceholder=\"Body\" cols=\"40\" rows=\"5\"></textarea>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<!--- Buttons Block -->\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n\t\t\t\t<button type=\"submit\" [disabled] = \"!signUpForm.valid\" class=\"btn btn-primary\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-post-form/add-post-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-post-form/add-post-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  margin-bottom: 0; }\n\n.my-form {\n  font-size: 15px; }\n\n.body-block input {\n  height: 50px; }\n"

/***/ }),

/***/ "./src/app/components/add-post-form/add-post-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-post-form/add-post-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddPostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostFormComponent", function() { return AddPostFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/user.service */ "./src/app/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPostFormComponent = /** @class */ (function () {
    function AddPostFormComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.isAuthenticated = true;
        this.user = {
            _id: '5afcfacdc2b2a82344772cf5',
            twitter: {
                id: "845180875704692737",
                token: "845180875704692737-9OWnm60RtkLD9rnGEprKAc5VHrP3oih",
                username: "babyccino1",
                displayName: "Gus Ryan",
                displayUrl: "https://pbs.twimg.com/profile_images/942947061225340928/z3yRZv3i_normal.jpg"
            }
        };
    }
    AddPostFormComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
                ]],
            body: ''
        });
        //this.userService.currentUser.subscribe(res => this.user = res)
        //this.userService.isAuthenticated.subscribe(res => this.isAuthenticated = res)
    };
    Object.defineProperty(AddPostFormComponent.prototype, "title", {
        get: function () { return this.signUpForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddPostFormComponent.prototype, "url", {
        get: function () { return this.signUpForm.get('url'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddPostFormComponent.prototype, "body", {
        get: function () { return this.signUpForm.get('body'); },
        enumerable: true,
        configurable: true
    });
    AddPostFormComponent.prototype.onFormSubmit = function () {
        if (this.signUpForm.valid) {
            var post = this.signUpForm.value;
            post.userId = this.user._id;
            post.twitter = {
                username: this.user.twitter.username,
                displayUrl: this.user.twitter.displayUrl
            };
            console.log(post);
        }
    };
    AddPostFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-post-form',
            template: __webpack_require__(/*! ./add-post-form.component.html */ "./src/app/components/add-post-form/add-post-form.component.html"),
            styles: [__webpack_require__(/*! ./add-post-form.component.scss */ "./src/app/components/add-post-form/add-post-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddPostFormComponent);
    return AddPostFormComponent;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-row\">\n\t<ng-container *ngIf=\"columnCount == 4\">\n\t\t<div class=\"gallery-column-4\">\n\t\t\t<ng-container *ngFor=\"let post of posts; let i = index\">\n\t\t\t\t<app-post [post]=\"post\" *ngIf=\"!(i % 4)\"></app-post>\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div class=\"gallery-column-4\">\n\t\t\t<ng-container *ngFor=\"let post of posts; let i = index\">\n\t\t\t\t<app-post [post]=\"post\" *ngIf=\"!((i-1) % 4)\"></app-post>\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div class=\"gallery-column-4\">\n\t\t\t<ng-container *ngFor=\"let post of posts; let i = index\">\n\t\t\t\t<app-post [post]=\"post\" *ngIf=\"!((i-2) % 4)\"></app-post>\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div class=\"gallery-column-4\">\n\t\t\t<ng-container *ngFor=\"let post of posts; let i = index\">\n\t\t\t\t<app-post [post]=\"post\" *ngIf=\"!((i-3) % 4)\"></app-post>\n\t\t\t</ng-container>\n\t\t</div>\n\t</ng-container>\n\t<ng-container *ngIf=\"columnCount == 2\">\n\t\t<div class=\"gallery-column-2\">\n\t\t\t<ng-container *ngFor=\"let post of posts; let i = index\">\n\t\t\t\t<app-post [post]=\"post\" *ngIf=\"!(i % 2)\"></app-post>\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div class=\"gallery-column-2\">\n\t\t\t<ng-container *ngFor=\"let post of posts; let i = index\">\n\t\t\t\t<app-post [post]=\"post\" *ngIf=\"i % 2\"></app-post>\n\t\t\t</ng-container>\n\t\t</div>\n\t</ng-container>\n\t<div class=\"gallery-column-1\" *ngIf=\"columnCount == 1\">\n\t\t<ng-container *ngFor=\"let post of posts; let i = index\">\n\t\t\t<app-post [post]=\"post\" *ngIf=\"!(i % 2)\"></app-post>\n\t\t</ng-container>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/board/board.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  font-family: Arial; }\n\n.header {\n  text-align: center;\n  padding: 32px; }\n\n.gallery-row {\n  /* IE10 */\n  display: flex;\n  /* IE10 */\n  flex-wrap: wrap; }\n\n.gallery-row .gallery-column-4 {\n    /* IE10 */\n    flex: 25%;\n    max-width: 25%; }\n\n.gallery-row .gallery-column-2 {\n    flex: 50%;\n    max-width: 50%; }\n\n.gallery-row .gallery-column-1 {\n    flex: 100%;\n    max-width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/post.service */ "./src/app/core/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = /** @class */ (function () {
    function BoardComponent(postService) {
        this.postService = postService;
        this.posts = [];
        this.columnCount = 4;
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.posts.subscribe(function (res) { _this.posts = res; console.log(res); });
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/components/board/board.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n\t<a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\n\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t<ul class=\"navbar-nav mr-auto\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" href=\"#\">Link</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\tDropdown\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Action</a>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Another action</a>\n\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Something else here</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<form class=\"form-inline my-2 my-lg-0\">\n\t\t\t<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n\t\t\t<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n\t\t</form>\n\t</div>\n</nav>\n-->\n<div class=\"my-nav-wrap\">\n\t<div class=\"my-nav-container\">\n\t\t<div class=\"my-nav\">\n\t\t\t<div class=\"my-nav-left\">\n\t\t\t\t<div class=\"dropdown-container\">\n\t\t\t\t\t<button class=\"dropdown-button\">Dropdown</button>\n\t\t\t\t\t<div class=\"dropdown-content\">\n\t\t\t\t\t\t<app-add-post-form></app-add-post-form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img class=\"twitter\" [src]=\"user.twitter.displayUrl\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"unauthenticated\" *ngIf=\"!isAuthenticated\">\n\t\t\t<a href=\"/api/auth/twitter\" class=\"btn btn-info\" role=\"button\"><i class=\"fa fa-twitter\"></i>Sign in with Twitter</a>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-nav-wrap {\n  position: relative;\n  height: 120px; }\n\n.my-nav-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: white;\n  padding-left: 400px;\n  padding-right: 400px;\n  border-bottom: 1px solid #d0d0d0;\n  height: 120px; }\n\n.my-nav-container .my-nav {\n    height: 100%;\n    display: flex;\n    flex-grow: 1;\n    flex-basis: auto;\n    align-items: center; }\n\n.my-nav-container .my-nav .my-nav-left {\n      display: flex;\n      align-items: center;\n      margin-right: auto !important; }\n\n.dropdown-container {\n  position: relative;\n  display: inline-block;\n  /* Dropdown Content (Hidden by Default) */ }\n\n.dropdown-container .dropdown-button {\n    background: rgba(0, 0, 0, 0);\n    color: black;\n    padding: 8px;\n    font-size: 16px;\n    border: none;\n    transition: 0.1s; }\n\n.dropdown-container .dropdown-button:focus ~ .dropdown-content {\n      display: block;\n      opacity: 1; }\n\n.dropdown-container .dropdown-content {\n    display: flex;\n    padding: 8px;\n    transition: 0.1s;\n    position: absolute;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    background: white; }\n\n.dropdown-container .dropdown-content:focus-within, .dropdown-container .dropdown-content:hover {\n      display: block;\n      opacity: 1; }\n\n.dropdown-container .dropdown-content a {\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      display: block;\n      transition: 0.1s; }\n\n/* Change color of dropdown links on hover */\n\n.dropdown-content a:focus {\n  background-color: #ddd; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/user.service */ "./src/app/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
        this.isAuthenticated = true;
        this.user = {
            _id: '5afcfacdc2b2a82344772cf5',
            twitter: {
                id: "845180875704692737",
                token: "845180875704692737-9OWnm60RtkLD9rnGEprKAc5VHrP3oih",
                username: "babyccino1",
                displayName: "Gus Ryan",
                displayUrl: "https://pbs.twimg.com/profile_images/942947061225340928/z3yRZv3i_normal.jpg"
            }
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$')
                ]],
            body: ''
        });
        //this.userService.currentUser.subscribe(res => this.user = res)
        //this.userService.isAuthenticated.subscribe(res => this.isAuthenticated = res)
    };
    Object.defineProperty(HeaderComponent.prototype, "title", {
        get: function () { return this.signUpForm.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "url", {
        get: function () { return this.signUpForm.get('url'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "body", {
        get: function () { return this.signUpForm.get('body'); },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.onFormSubmit = function () {
        if (this.signUpForm.valid) {
            var post = this.signUpForm.value;
            console.log(post);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-item\">\n\t<img src=\"{{post.url}}\">\n\t<div class=\"gallery-text-container\">\n\t\t<div class=\"gallery-text\">\n\t\t\t{{i}}\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/post/post.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-item {\n  position: relative;\n  margin: 0;\n  padding: 0; }\n  .gallery-item img {\n    display: block;\n    margin: 0;\n    padding: 0;\n    vertical-align: middle;\n    height: auto;\n    width: 100%; }\n  .gallery-item .gallery-text-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    transition: .5s ease; }\n  .gallery-item .gallery-text-container .gallery-text {\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/components/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.api_url = '/api';
        this.headers.append('Content-type', 'application/json');
    }
    ApiService.prototype.get = function (path) {
        console.log("GET " + path);
        return this.http.get("" + this.api_url + path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { throw err; }));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + this.api_url + path, JSON.stringify(body), { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { throw err; }));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + this.api_url + path, JSON.stringify(body), { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { throw err; }));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + this.api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { throw err; }));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(apiService) {
        this.apiService = apiService;
        console.log('data service connected');
    }
    DataService.prototype.getUser = function () {
        return this.apiService.get('/user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json().data; }));
    };
    DataService.prototype.getUsers = function () {
        return this.apiService.get('/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json().data; }));
    };
    DataService.prototype.getPosts = function () {
        console.log('getPosts');
        return this.apiService.get('/posts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json().data; }));
    };
    DataService.prototype.addPost = function (post) {
        console.log(post);
        var _headers = new Headers();
        _headers.append('Content-type', 'application/json');
        console.log('stringified post: ' + JSON.stringify(post));
        console.log('about to post... ');
        return this.apiService.post('/post', post)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json().data; }));
    };
    DataService.prototype.deleteUser = function (user) {
        return this.apiService.delete('/user');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/post.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/post.service.ts ***!
  \***********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(apiService) {
        this.apiService = apiService;
        this.postsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.posts = this.postsSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        console.log('post service connected');
    }
    PostService.prototype.populate = function () {
        var _this = this;
        this.apiService.get('/posts').subscribe(function (response) {
            console.log('retrieved posts');
            _this.postsSubject.next(response.concat(response).concat(response));
        }, function (err) {
            console.log('error retrieving posts, err: ', err);
        });
    };
    PostService.prototype.addPost = function (post) {
        var _this = this;
        this.apiService.post('/post', post).subscribe(function (response) {
            var arr = _this.postsSubject.value;
            arr.push(post);
            _this.postsSubject.next(arr);
        }, function (err) {
            console.log('Error adding post: ', err);
        });
    };
    PostService.prototype.getPosts = function () {
        return this.postsSubject.value;
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(apiService) {
        this.apiService = apiService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        console.log('user service connected');
    }
    UserService.prototype.populate = function () {
        var _this = this;
        this.apiService.get('/user').subscribe(function (response) {
            console.log('UserService, user: ', response);
            _this.currentUserSubject.next(response);
            _this.isAuthenticatedSubject.next(true);
            console.log('this.currentUserSubject.value: ', _this.currentUserSubject.value);
        }, function (err) {
            console.log('no user');
            _this.currentUserSubject.next({});
            _this.isAuthenticatedSubject.next(false);
        });
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gus/Documents/dev/gintrest/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map