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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _newspage_newspage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newspage/newspage.component */ "./src/app/newspage/newspage.component.ts");
/* harmony import */ var _profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profilepage/profilepage.component */ "./src/app/profilepage/profilepage.component.ts");
/* harmony import */ var _articlepage_articlepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articlepage/articlepage.component */ "./src/app/articlepage/articlepage.component.ts");







var routes = [
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'newspage', component: _newspage_newspage_component__WEBPACK_IMPORTED_MODULE_4__["NewspageComponent"] },
    { path: 'profile', component: _profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_5__["ProfilepageComponent"] },
    { path: 'article', component: _articlepage_articlepage_component__WEBPACK_IMPORTED_MODULE_6__["ArticlepageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], _newspage_newspage_component__WEBPACK_IMPORTED_MODULE_4__["NewspageComponent"], _profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_5__["ProfilepageComponent"], _articlepage_articlepage_component__WEBPACK_IMPORTED_MODULE_6__["ArticlepageComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nhtml, body {\n  max-width: 100%;\n  overflow-x: hidden;\n  background: #eef5f9;\n  font-family: \"Nunito Sans\", sans-serif;\n}\n\n.main-wrapper {\n  box-shadow: 1px 0 80px rgba(0, 0, 0, 0.2);\n  max-width: 80vw;\n  height: 100%;\n  margin: auto;\n}\n\n.border-padding {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.spacer {\n  width: 300px;\n}\n\n.spacer-one {\n  flex: 1 1 auto;\n}\n\n.sidenav {\n  width: 250px;\n}\n\n.navigation {\n  position: relative;\n  width: 80vw;\n  height: 100%;\n}\n\n.topbar-wrapper {\n  position: relative;\n  z-index: 10;\n  background-color: lightblue;\n}\n\n.brand-logo {\n  width: 250px;\n}\n\n.fill {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\n.contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.scale-down {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.none {\n  -o-object-fit: none;\n     object-fit: none;\n}\n\n.white-icon {\n  color: white;\n}\n\n.margin-left {\n  margin-left: 5px;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.small-cap {\n  margin: 20px 0 0 20px;\n  display: flex;\n  align-items: center;\n  color: #9098ac;\n}\n\n.icon {\n  margin: 10px 0 0 0;\n  height: 48px;\n}\n\n.page-wrapper {\n  min-height: calc(100vh - 64px);\n}\n\nmat-sidenav-content {\n  width: 100%;\n  min-height: calc(100vh - 122px);\n  padding-left: 0;\n}\n\nmat-sidenav-content > * {\n  width: 100%;\n  position: relative;\n}\n\nmat-sidenav-content > app-cms-dashboard > * {\n  width: 100%;\n  position: relative;\n}\n\n.profile-wrapper {\n  height: 64px;\n\n}\n\n.profile-wrapper > * {\n  padding: 10px 10px 10px 10px;\n}\n\n.nav-headline {\n  margin-right: 10px;\n}\n\n.add-button {\n  color: #2e7ef6 !important;\n  box-shadow: none!important;\n  -webkit-box-shadow:none!important;\n}\n\n.topic-button {\n  color: #3a3a3a!important;\n  box-shadow: none!important;\n  -webkit-box-shadow:none!important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBZ0I7S0FBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQW1CO0tBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBc0I7S0FBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQWdCO0tBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaHRtbCwgYm9keSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZWVmNWY5O1xuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDAgODBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1heC13aWR0aDogODB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ib3JkZXItcGFkZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc3BhY2VyIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uc3BhY2VyLW9uZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b3BiYXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLmJyYW5kLWxvZ28ge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5maWxsIHtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbn1cblxuLmNvbnRhaW4ge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uY292ZXIge1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNjYWxlLWRvd24ge1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufVxuXG4ubm9uZSB7XG4gIG9iamVjdC1maXQ6IG5vbmU7XG59XG5cbi53aGl0ZS1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc21hbGwtY2FwIHtcbiAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzkwOThhYztcbn1cblxuLmljb24ge1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIycHgpO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCA+IGFwcC1jbXMtZGFzaGJvYXJkID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9maWxlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDY0cHg7XG5cbn1cblxuLnByb2ZpbGUtd3JhcHBlciA+ICoge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ubmF2LWhlYWRsaW5lIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjMmU3ZWY2ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7XG59XG5cbi50b3BpYy1idXR0b24ge1xuICBjb2xvcjogIzNhM2EzYSFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n<link\n  href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n  rel=\"stylesheet\"\n  />\n<div class=\"main-wrapper\">\n  <div class=\"pos-f-t\">\n    <!-- <div class=\"collapse\" id=\"navbarToggleExternalContent\">\n    </div> -->\n    <navbar [drawer]=\"drawer\"></navbar>\n\n    <!-- <button mat-fab>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">person</mat-icon>\n      </button> -->\n    <!-- <a class=\"btn btn-info btn-lg btn-primary\" (click)=\"drawer.toggle()\"><mat-icon>person</mat-icon></a> -->\n    <mat-sidenav-container class=\"navigation z-index-8\" [hasBackdrop]=\"false\">\n      <mat-sidenav\n        #drawer\n        class=\"sidenav\"\n        fixedInViewport=\"false\"\n        [opened]=\"true\"\n        style=\"background: white\">\n        <mat-nav-list>\n          <div class=\"sidenav\">\n            <div>\n              <span class=\"small-cap\">\n                <mat-icon class=\"nav-headline\">category</mat-icon>\n                <b>Categories</b></span>\n            </div>\n            <mat-list-item>\n              <button type=\"button\" class=\"btn topic-button\"\n                (click)=\"getTopStories()\">\n                Top Stories\n              </button>\n            </mat-list-item>\n\n            <mat-list-item>\n              <button type=\"button\" class=\"btn topic-button\"\n                (click)=\"getWorldStories()\">\n                World News\n              </button>\n            </mat-list-item>\n\n            <mat-list-item>\n              <button type=\"button\" class=\"btn topic-button\"\n                (click)=\"getChicagoStories()\">\n                Chicago Politics\n              </button>\n            </mat-list-item>\n\n            <mat-list-item>\n              <button type=\"button\" class=\"btn topic-button\"\n                (click)=\"getTechStories()\">\n                Technology\n              </button>\n            </mat-list-item>\n\n            <mat-list-item (click)=\"addCategory()\">\n              <button type=\"button\" class=\"btn add-button\">Add Category</button>\n            </mat-list-item>\n          </div>\n          <!-- <div>\n            <span class=\"small-cap\">\n              <mat-icon class=\"nav-headline\" matListIcon>settings</mat-icon>\n              <b>Settings</b></span>\n          </div> -->\n          <mat-list-item>\n            <mat-slide-toggle [(ngModel)]=\"maskAll\" (change)=\"toggleMaskAll()\">All Sources Masked</mat-slide-toggle>\n\n          </mat-list-item>\n        </mat-nav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <router-outlet></router-outlet>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/users-service */ "./src/app/services/users-service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);







var AppComponent = /** @class */ (function () {
    function AppComponent(router, newsapi, users, ref) {
        this.router = router;
        this.newsapi = newsapi;
        this.users = users;
        this.ref = ref;
        this.title = 'JustNews';
        this.firstLoad = true;
        this.maskAll = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsapi.showDrawer.subscribe(function (value) { if (_this.drawer.opened != value) {
            _this.drawer.toggle();
        } });
        this.newsapi.mask.subscribe(function (value) { _this.maskAll = value; });
        this.goToLandingPage();
        // this.goToProfile()
        // this.users.loadUsers();
    };
    AppComponent.prototype.toggleMaskAll = function () {
        this.newsapi.setMask(this.maskAll);
    };
    AppComponent.prototype.getTopStories = function () {
        this.router.navigate(['/', 'newspage'], { queryParams: { id: 0 } });
    };
    AppComponent.prototype.getWorldStories = function () {
        this.router.navigate(['/', 'newspage'], { queryParams: { id: 1 } });
    };
    AppComponent.prototype.getCountryStories = function () {
        this.router.navigate(['/', 'newspage'], { queryParams: { id: 2 } });
    };
    AppComponent.prototype.getChicagoStories = function () {
        this.router.navigate(['/', 'newspage'], { queryParams: { id: 3 } });
    };
    AppComponent.prototype.getTechStories = function () {
        this.router.navigate(['/', 'newspage'], { queryParams: { id: 4 } });
    };
    AppComponent.prototype.goToLandingPage = function () {
        if (this.drawer.opened) {
            this.drawer.toggle();
        }
        // this.newsapi.hideHeader();
        this.router.navigate(['/', 'home']);
    };
    AppComponent.prototype.goToProfile = function () {
        this.newsapi.showHeader();
        // this.newsapi.toggleD();
        this.router.navigate(['/', 'profile']);
    };
    AppComponent.prototype.selectUser = function (index) {
        this.users.setUser(index);
        this.ref.markForCheck();
    };
    AppComponent.prototype.addCategory = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"])
    ], AppComponent.prototype, "drawer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_newsapi_service__WEBPACK_IMPORTED_MODULE_4__["NewsApiService"], _services_users_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-card/search-card.component */ "./src/app/search-card/search-card.component.ts");
/* harmony import */ var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news-card/news-card.component */ "./src/app/news-card/news-card.component.ts");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/users-service */ "./src/app/services/users-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "./src/app/leaderboard/leaderboard.component.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm5/ng-chartist.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _articlepage_gamedialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./articlepage/gamedialog.component */ "./src/app/articlepage/gamedialog.component.ts");
/* harmony import */ var _profilepage_awarddialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profilepage/awarddialog.component */ "./src/app/profilepage/awarddialog.component.ts");
/* harmony import */ var _services_summarizer_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/summarizer.service */ "./src/app/services/summarizer.service.ts");
/* harmony import */ var _summarydialog_summarydialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./summarydialog/summarydialog.component */ "./src/app/summarydialog/summarydialog.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"],
                _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_11__["SearchCardComponent"],
                _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_12__["NewsCardComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_18__["LeaderboardComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_20__["ChartComponent"],
                _articlepage_gamedialog_component__WEBPACK_IMPORTED_MODULE_22__["GameDialogComponent"],
                _profilepage_awarddialog_component__WEBPACK_IMPORTED_MODULE_23__["AwardDialogComponent"],
                _summarydialog_summarydialog_component__WEBPACK_IMPORTED_MODULE_25__["SummarydialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_19__["ChartistModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_16__["AvatarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
            ],
            entryComponents: [
                _articlepage_gamedialog_component__WEBPACK_IMPORTED_MODULE_22__["GameDialogComponent"],
                _profilepage_awarddialog_component__WEBPACK_IMPORTED_MODULE_23__["AwardDialogComponent"],
                _summarydialog_summarydialog_component__WEBPACK_IMPORTED_MODULE_25__["SummarydialogComponent"]
            ],
            providers: [_services_newsapi_service__WEBPACK_IMPORTED_MODULE_13__["NewsApiService"], _services_users_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _services_summarizer_service__WEBPACK_IMPORTED_MODULE_24__["SummarizerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articlepage/articlepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/articlepage/articlepage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".source-badge {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 7px;\n  padding-left: 7px;\n  margin-right: 10px;\n  background-color: #E5E5E5;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border-radius: 15px;\n}\n\n.mask {\n  color: #757577 !important;\n  background-color: #eaebee !important;\n}\n\n.mask:hover {\n  color: #757577 !important;\n}\n\n.imaged {\n  max-width: 756px;\n}\n\n.reveal {\n  background-color: #eaebee !important;\n}\n\n.left {\n  color: #2e7ef6 !important;\n}\n\n.right {\n  color: #f97173 !important;\n}\n\n.neutral {\n  color: #757577 !important;\n}\n\n.left:hover {\n  color: #2e7ef6 !important;\n  box-shadow: 0 2px 5px 0 rgba(44, 122, 239, 0.24);\n  cursor: pointer;\n}\n\n.neutral:hover {\n  color: #757577 !important;\n  box-shadow: 0 2px 5px 0 rgba(161, 161, 164, 0.32);\n  cursor: pointer;\n}\n\n.right:hover {\n  color: #f97173 !important;\n  box-shadow: 0 2px 5px 0 rgba(247, 112, 115, 0.38);\n  cursor: pointer;\n}\n\n.no-pad{\n  padding: 0px;\n}\n\n.source-date {\n  margin: 0;\n  color: #757577 !important;\n}\n\n.routing {\n  width: 45vw;\n}\n\n.container {\n  margin-top: 50px;\n  width: 45vw;\n}\n\n.descriptor{\n  text-align: justify;\n  margin-top: 25px;\n  margin-bottom: 35px;\n}\n\n.sub-info {\n  margin-top: 12px;\n  width: 100%;\n  margin-bottom: 35px;\n}\n\n.content {\n  margin-top: 15px;\n  text-align: justify;\n}\n\n.image-info {\n  color: #757577 !important;\n  margin-top: 12px;\n  margin-bottom: 0;\n  font-size: 12px;\n}\n\n.remove-outline:focus,.remove-outline:active {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.article-title {\n  text-align: justify;\n}\n\n.main-wrapper {\n  box-shadow: 1px 0 80px rgba(0, 0, 0, 0.2);\n  max-width: 80vw;\n  height: 100%;\n  margin: auto;\n}\n\n.author {\n  color: #757577 !important;\n  margin-top: 12px;\n  margin-bottom: 50px;\n  font-size: 12px;\n}\n\n.left-choice:hover {\n  background-color: rgb(214,229,246);\n  box-shadow: 0 0 142px 31px rgba(214,229,246,1);\n }\n\n.right-choice:hover {\n  background-color: rgb(247, 211, 217);\n  box-shadow: 0 0 142px 31px rgba(247,211,217,1);\n}\n\n.neutral-choice:hover {\n  background-color: rgb(220, 221, 224);\n  box-shadow: 0 0 142px 31px rgba(220, 221, 224,1);\n}\n\n.choice-button {\n  width: 25%;\n  height: 75px;\n}\n\n.game-explanation {\n  color: #b0b0b3\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXBhZ2UvYXJ0aWNsZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFHeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFHbEMsOENBQThDO0NBQy9DOztBQUVEO0VBQ0Usb0NBQW9DO0VBR3BDLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLG9DQUFvQztFQUdwQyxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVwYWdlL2FydGljbGVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc291cmNlLWJhZGdlIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubWFzayB7XG4gIGNvbG9yOiAjNzU3NTc3ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWViZWUgIWltcG9ydGFudDtcbn1cblxuLm1hc2s6aG92ZXIge1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xufVxuLmltYWdlZCB7XG4gIG1heC13aWR0aDogNzU2cHg7XG59XG5cbi5yZXZlYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYmVlICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgY29sb3I6ICMyZTdlZjYgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0IHtcbiAgY29sb3I6ICNmOTcxNzMgIWltcG9ydGFudDtcbn1cblxuLm5ldXRyYWwge1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xufVxuXG4ubGVmdDpob3ZlciB7XG4gIGNvbG9yOiAjMmU3ZWY2ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoNDQsIDEyMiwgMjM5LCAwLjI0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV1dHJhbDpob3ZlciB7XG4gIGNvbG9yOiAjNzU3NTc3ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMTYxLCAxNjEsIDE2NCwgMC4zMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICNmOTcxNzMgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgyNDcsIDExMiwgMTE1LCAwLjM4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5vLXBhZHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNvdXJjZS1kYXRlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xufVxuLnJvdXRpbmcge1xuICB3aWR0aDogNDV2dztcbn1cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogNDV2dztcbn1cblxuLmRlc2NyaXB0b3J7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5zdWItaW5mbyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pbWFnZS1pbmZvIHtcbiAgY29sb3I6ICM3NTc1NzcgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmVtb3ZlLW91dGxpbmU6Zm9jdXMsLnJlbW92ZS1vdXRsaW5lOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmFydGljbGUtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDAgODBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1heC13aWR0aDogODB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hdXRob3Ige1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sZWZ0LWNob2ljZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsMjI5LDI0Nik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0MnB4IDMxcHggcmdiYSgyMTQsMjI5LDI0NiwxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTQycHggMzFweCByZ2JhKDIxNCwyMjksMjQ2LDEpO1xuICBib3gtc2hhZG93OiAwIDAgMTQycHggMzFweCByZ2JhKDIxNCwyMjksMjQ2LDEpO1xuIH1cblxuLnJpZ2h0LWNob2ljZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIxMSwgMjE3KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTQycHggMzFweCByZ2JhKDI0NywyMTEsMjE3LDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNDJweCAzMXB4IHJnYmEoMjQ3LDIxMSwyMTcsMSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNDJweCAzMXB4IHJnYmEoMjQ3LDIxMSwyMTcsMSk7XG59XG5cbi5uZXV0cmFsLWNob2ljZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIyMSwgMjI0KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTQycHggMzFweCByZ2JhKDIyMCwgMjIxLCAyMjQsMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDE0MnB4IDMxcHggcmdiYSgyMjAsIDIyMSwgMjI0LDEpO1xuICBib3gtc2hhZG93OiAwIDAgMTQycHggMzFweCByZ2JhKDIyMCwgMjIxLCAyMjQsMSk7XG59XG5cbi5jaG9pY2UtYnV0dG9uIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uZ2FtZS1leHBsYW5hdGlvbiB7XG4gIGNvbG9yOiAjYjBiMGIzXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/articlepage/articlepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/articlepage/articlepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css\"\n  />\n<div class=\"article-container\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"10px\"\n    class=\"container\">\n    <div fxLayout=\"row\" class=\"routing\"fxLayoutAlign=\"space-between center\">\n      <button mat-button class=\"mask-button remove-outline no-pad\"\n        (click)=\"back()\"><mat-icon>keyboard_arrow_left</mat-icon>Back</button>\n    </div>\n    <h2 class=\"article-title\">{{article.title}}</h2>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"sub-info\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <!--Source-->\n        <span *ngIf=\"!maskAll && !maskThis || maskAll &&\n          !maskThis\" class=\"source-badge badge reveal badge-light\n          {{article.bias}}\">{{article.source}}</span>\n        <span *ngIf=\"maskAll && maskThis || !maskAll && maskThis\"\n          class=\"source-badge badge badge-light mask\">Hidden Source</span>\n\n        <!-- Date -->\n        <p class=\"source-date\">\n          <small>Published: {{getTimeString()}}</small>\n        </p>\n      </div>\n      <button mat-button class=\"mask-button remove-outline\"\n        (click)=\"toggleMask()\">{{maskButton}}</button>\n    </div>\n\n    <div style=\"width: 756px\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <p class=\"descriptor\">{{article.description}} {{descriptionFiller}}</p>\n      <img fxFlex class=\"imaged\"\n        src=\"{{article.image}}\" alt=\"Card\n        image cap\">\n      <!-- <p class=\"image-info\">Here will be an AI generated text that describes the\n        image.</p> -->\n      <p class=\"content\">{{article.content}}</p>\n\n      <p class=\"content\">{{article.content}}</p>\n      <p class=\"content\">{{article.content}}</p>\n      <p class=\"author\"><i>Written by {{article.author}}</i></p>\n      <div style=\"width: 50px; height:2px;background: #3a404d;display: block\"></div>\n      <h4 style=\"margin-top: 50px\">Bias Game</h4>\n      <p class=\"game-explanation\" style=\"text-align: justify; margin-bottom:\n        100px;\">Tell us what you think about the bias of this article source!\n        Does it feel like the article leans a certain political direction? Or do\n        you feel it maintains a neutral viewpoint on the topic?\n        Guessing the correct bias will give you Boints (bias points)! Boints\n        will count towards your weekly progression and profile achievements!</p>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" class=\"sub-info\"\n        style=\"margin-bottom: 100px\">\n        <button mat-button class=\"mask-button remove-outline left-choice\n          choice-button\"\n          (click)=\"buildDialog('left',article.bias)\">Left\n        </button>\n        <button mat-button class=\"mask-button remove-outline neutral-choice\n          choice-button\"\n          (click)=\"buildDialog('neutral',article.bias)\">\n          Neutral\n        </button>\n        <button mat-button class=\"mask-button remove-outline right-choice\n          choice-button\"\n          (click)=\"buildDialog('right',article.bias)\">Right\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/articlepage/articlepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/articlepage/articlepage.component.ts ***!
  \******************************************************/
/*! exports provided: ArticlepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlepageComponent", function() { return ArticlepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _gamedialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamedialog.component */ "./src/app/articlepage/gamedialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ArticlepageComponent = /** @class */ (function () {
    function ArticlepageComponent(_route, newsapi, dialog, _location) {
        var _this = this;
        this._route = _route;
        this.newsapi = newsapi;
        this.dialog = dialog;
        this._location = _location;
        this.descriptionFiller = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        this.maskButton = "Mask Source";
        this._route
            .queryParams
            .subscribe(function (params) {
            _this.article = {
                content: params['content'],
                title: params['title'],
                author: params['author'],
                publishedAt: new Date(params['publishedAt']),
                source: params['source'],
                description: params['description'],
                url: params['url'],
                image: params['image'],
                bias: params['bias']
            };
            _this.maskThis = params["maskThis"];
            _this.maskAll = params["maskAll"];
        });
    }
    ArticlepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsapi.mask.subscribe(function (value) {
            _this.maskAll = value;
            _this.maskThis = value;
        });
    };
    ArticlepageComponent.prototype.getTimeString = function () {
        var hour = this.article.publishedAt.getHours();
        var tod = "AM";
        var minutes = this.article.publishedAt.getMinutes();
        var minString = minutes.toString().padEnd(2, "0");
        if (hour > 12) {
            tod = "PM";
        }
        if (hour == 0 || 12) {
            hour = 12;
        }
        else {
            hour = hour % 12;
        }
        return hour + ":" + minString + tod + " " + (this.article.publishedAt.getMonth() + 1) + "/" + this.article.publishedAt.getDate() + "/" + this.article.publishedAt.getFullYear();
    };
    ArticlepageComponent.prototype.toggleMask = function () {
        this.maskThis = !this.maskThis;
        this.maskButton = this.maskThis ? "Unmask Source" : "Mask Source";
    };
    ArticlepageComponent.prototype.buildDialog = function (guessed, bias) {
        var dialogRef = this.dialog.open(_gamedialog_component__WEBPACK_IMPORTED_MODULE_5__["GameDialogComponent"], {
            width: '500px',
            data: { guessed: guessed, bias: bias, source: this.article.source }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ArticlepageComponent.prototype.back = function () {
        this._location.back();
    };
    ArticlepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'article',
            template: __webpack_require__(/*! ./articlepage.component.html */ "./src/app/articlepage/articlepage.component.html"),
            styles: [__webpack_require__(/*! ./articlepage.component.css */ "./src/app/articlepage/articlepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_newsapi_service__WEBPACK_IMPORTED_MODULE_3__["NewsApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], ArticlepageComponent);
    return ArticlepageComponent;
}());



/***/ }),

/***/ "./src/app/articlepage/gamedialog.component.css":
/*!******************************************************!*\
  !*** ./src/app/articlepage/gamedialog.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".source-badge {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 15px;\n  padding-left: 15px;\n  background-color: #E5E5E5;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border-radius: 15px;\n  font-size: 16px;\n  font-weight: normal!important;\n}\n\n.reveal {\n  background-color: #eaebee !important;\n}\n\n.left {\n  color: #2e7ef6 !important;\n}\n\n.right {\n  color: #f97173 !important;\n}\n\n.neutral {\n  color: #757577 !important;\n}\n\n.but {\n  width: 10%;\n  margin-left: 45%;\n  margin-top: 10px;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.left:hover {\n  color: #2e7ef6 !important;\n  box-shadow: 0 2px 5px 0 rgba(44, 122, 239, 0.24);\n}\n\n.neutral:hover {\n  color: #757577 !important;\n  box-shadow: 0 2px 5px 0 rgba(161, 161, 164, 0.32);\n}\n\n.right:hover {\n  color: #f97173 !important;\n  box-shadow: 0 2px 5px 0 rgba(247, 112, 115, 0.38);\n}\n\n.remove-outline:focus,.remove-outline:active {\n  outline: none !important;\n  box-shadow: none;\n}\n\nh1 {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZXBhZ2UvZ2FtZWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBR3hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVwYWdlL2dhbWVkaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb3VyY2UtYmFkZ2Uge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsIWltcG9ydGFudDtcbn1cblxuLnJldmVhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWViZWUgIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICBjb2xvcjogIzJlN2VmNiAhaW1wb3J0YW50O1xufVxuXG4ucmlnaHQge1xuICBjb2xvcjogI2Y5NzE3MyAhaW1wb3J0YW50O1xufVxuXG4ubmV1dHJhbCB7XG4gIGNvbG9yOiAjNzU3NTc3ICFpbXBvcnRhbnQ7XG59XG4uYnV0IHtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGVmdDpob3ZlciB7XG4gIGNvbG9yOiAjMmU3ZWY2ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoNDQsIDEyMiwgMjM5LCAwLjI0KTtcbn1cblxuLm5ldXRyYWw6aG92ZXIge1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDE2MSwgMTYxLCAxNjQsIDAuMzIpO1xufVxuXG4ucmlnaHQ6aG92ZXIge1xuICBjb2xvcjogI2Y5NzE3MyAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDI0NywgMTEyLCAxMTUsIDAuMzgpO1xufVxuXG4ucmVtb3ZlLW91dGxpbmU6Zm9jdXMsLnJlbW92ZS1vdXRsaW5lOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/articlepage/gamedialog.component.html":
/*!*******************************************************!*\
  !*** ./src/app/articlepage/gamedialog.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\"\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css\"/>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-bottom: 20px\">\n  <h1 mat-dialog-title style=\"text-align: start\" *ngIf=\"success\">Success - </h1>\n  <h1 mat-dialog-title style=\"text-align: start\" *ngIf=\"!success\">Failure - </h1>\n  <div style=\"width: 5px\"></div>\n  <span class=\"source-badge badge reveal badge-light {{data.bias}}\">{{data.source}}</span>\n</div>\n<div mat-dialog-content>\n  <p *ngIf=\"success\" style=\"text-align: justify\">Way to go! It looks like you picked the correct bias! This is an article\n    with {{data.bias}} bias. Therfore, this is a good sign, but continue to think\n    about why you made your selection, and your general thoughts on the topic.</p>\n  <p *ngIf=\"success\" style=\"text-align: start\">You earned <b>10 Boints</b></p>\n  <p *ngIf=\"!success\" style=\"text-align: justify\">Uh Oh! Looks like you didn’t get it correct. This is an article with\n    {{data.bias}} bias. Think about what the article might have been trying to\n    communicate, and how you can do better next time.</p>\n  <p *ngIf=\"!success\" style=\"text-align: start\">You earned <b>0 Boints</b></p>\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-dialog-actions>\n    <p>This article is from the <b>{{data.bias}}</b></p>\n  </div>\n</div>\n<div\n  class=\"but badge badge-pill badge-primary clickable\"\n  (click)=\"onNoClick()\">Close\n</div>\n\n<!--<div fxLayout=\"row\" fxLayoutAlign=\"end center\" mat-dialog-actions>-->\n  <!--<button (click)=\"onNoClick()\" mat-button class=\"remove-outline\">Close</button>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/articlepage/gamedialog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/articlepage/gamedialog.component.ts ***!
  \*****************************************************/
/*! exports provided: GameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDialogComponent", function() { return GameDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var GameDialogComponent = /** @class */ (function () {
    function GameDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.success = true;
        this.success = data.guessed == data.bias;
    }
    GameDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GameDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gamedialog',
            template: __webpack_require__(/*! ./gamedialog.component.html */ "./src/app/articlepage/gamedialog.component.html"),
            styles: [__webpack_require__(/*! ./gamedialog.component.css */ "./src/app/articlepage/gamedialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], GameDialogComponent);
    return GameDialogComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.tooltip {\t\n  position: absolute;\t\t\t\n  text-align: center;\t\t\t\n  width: 60px;\t\t\t\t\t\n  height: 28px;\t\t\t\t\t\n  padding: 2px;\t\t\t\t\n  font: 12px sans-serif;\t\t\n  background: red;\t\n  border: 0px;\t\t\n  border-radius: 8px;\t\t\t\n  pointer-events: none;\t\t\t\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQvY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYudG9vbHRpcCB7XHRcbiAgcG9zaXRpb246IGFic29sdXRlO1x0XHRcdFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHRcdFx0XG4gIHdpZHRoOiA2MHB4O1x0XHRcdFx0XHRcbiAgaGVpZ2h0OiAyOHB4O1x0XHRcdFx0XHRcbiAgcGFkZGluZzogMnB4O1x0XHRcdFx0XG4gIGZvbnQ6IDEycHggc2Fucy1zZXJpZjtcdFx0XG4gIGJhY2tncm91bmQ6IHJlZDtcdFxuICBib3JkZXI6IDBweDtcdFx0XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcdFx0XHRcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHRcdFx0XG59Il19 */"

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <head>\n        <script\n            src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.min.js\"></script>\n        <script src=\"http://d3js.org/d3.v3.min.js\"></script>\n    </head>\n    <body style=\"background-color:#fafafa\">\n        <div #chart>\n        </div>\n    </body>\n</html>"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");




var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.currentWeek = [[0, 1], [0.25, 1.25], [0.5, 1.25], [0.75, 1], [1, 0.5], [1.25, 0.25], [1.5, 0], [1.75, -0.25], [2, 0.25], [2.25, 0], [2.5, -0.5], [2.75, 0], [3, 0.25], [3.25, 0.25], [3.5, 0.25], [3.75, 0], [4, -0.25], [4.25, -0.5], [4.5, -0.5], [4.75, -1], [5, -0.5], [5.25, -0.25], [5.5, 0], [5.75, -0.25], [6, -0.25]];
        this.lastWeek = [[0, -2], [0.25, -1.5], [0.5, -1.25], [0.75, -1], [1, -1.0], [1.25, -1.25], [1.5, -1.5], [1.75, -1.5], [2, -1], [2.25, -1], [2.5, -0.25], [2.75, -0.25], [3, 0.5], [3.25, 0.5], [3.5, 0], [3.75, -1], [4, -1], [4.25, -1.25], [4.5, -1.5], [4.75, -1.25], [5, -1.5], [5.25, -1.75], [5.5, -1.25], [5.75, -1.25], [6, -1.25]];
    }
    ChartComponent.prototype.getData = function () {
        var n = 120;
        var currentWeek = [];
        var lastWeek = [];
        for (var x in Object(d3__WEBPACK_IMPORTED_MODULE_2__["range"])(n)) {
        }
        this.currentWeek = currentWeek;
    };
    ChartComponent.prototype.getX = function (min, max) {
        return Math.floor(Math.random() * 7.0);
    };
    ChartComponent.prototype.randomYInterval = function (min, max) {
        return Math.floor(Math.random() * 5.0) - 2.0;
    };
    ChartComponent.prototype.ngOnInit = function () {
        this.buildChart();
    };
    ChartComponent.prototype.buildChart = function () {
        this.chartProps = {};
        var margin = { top: 20, right: 10, bottom: 50, left: 80 }, width = 650 - margin.left - margin.right, height = 400 - margin.top - margin.bottom;
        this.chartProps.x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().range([0, width]);
        this.chartProps.y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().range([height, 0]);
        var xAxis = d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](this.chartProps.x).tickFormat(function (d, i) { return _this.getXLabel(d, i); }).ticks(7).tickPadding(height / 2);
        var yAxis = d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](this.chartProps.y).ticks(5).tickFormat(function (d, i) { return _this.getYLabel(d, i); });
        var _this = this;
        var valueline = d3__WEBPACK_IMPORTED_MODULE_2__["line"]()
            .x(function (d) {
            return _this.chartProps.x(d[0]);
        })
            .y(function (d) { return _this.chartProps.y(d[1]); });
        var tooltip = d3__WEBPACK_IMPORTED_MODULE_2__["select"](_this.chartElement.nativeElement).append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("opacity", 0);
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](this.chartElement.nativeElement)
            .append("svg")
            .style("background-color", '#fafafa')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", 'translate(' + margin.left + ',' + margin.top + ")");
        this.chartProps.x.domain([0, 7]);
        this.chartProps.y.domain([-2, 2]);
        var tipMouseover = function (d) {
            var html = "HEY";
            tooltip.html(html)
                .style("left", (d3__WEBPACK_IMPORTED_MODULE_2__["event"].pageX + 15) + "px")
                .style("top", (d3__WEBPACK_IMPORTED_MODULE_2__["event"].pageY - 28) + "px")
                .transition()
                .duration(200) // ms
                .style("opacity", .9); // started as 0!
        };
        var tipMouseout = function (d) {
            tooltip.transition()
                .duration(300) // ms
                .style("opacity", 0); // don't care about position!
        };
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (height / 2) + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        svg.append("path")
            .attr("class", "line line1")
            .style('stroke', '#6da3f6')
            .style("stroke-width", 3)
            .style('fill', 'none')
            .style("stroke-linejoin", "round")
            .attr("d", valueline(_this.currentWeek));
        svg.selectAll("dot")
            .data(_this.currentWeek)
            .enter().append("circle")
            .attr("r", 6)
            .style("fill", "#6da3f6")
            .attr("cx", function (d) { return _this.chartProps.x(d[0]); })
            .attr("cy", function (d) { return _this.chartProps.y(d[1]); })
            .on("mouseover", tipMouseover)
            .on("mouseout", tipMouseout);
        svg.append("path")
            .attr("class", "line line2")
            .style('stroke', '#2e7ef6')
            .style("stroke-width", 3)
            .style("stroke-linejoin", "round")
            .style('fill', 'none')
            .attr("d", valueline(_this.lastWeek));
        svg.selectAll("dot")
            .data(_this.lastWeek)
            .enter().append("circle")
            .attr("r", 3)
            .style("fill", "#2e7ef6")
            .attr("cx", function (d) { return _this.chartProps.x(d[0]); })
            .attr("cy", function (d) { return _this.chartProps.y(d[1]); })
            .on("mouseover", tipMouseover)
            .on("mouseout", tipMouseout);
        this.chartProps.svg = svg;
        this.chartProps.valueline = valueline;
        this.chartProps.xAxis = xAxis;
        this.chartProps.yAxis = yAxis;
    };
    ChartComponent.prototype.getXLabel = function (d, i) {
        var lst = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return lst[i];
    };
    ChartComponent.prototype.getYLabel = function (d, i) {
        var lst = {
            "-2": "Strong Left", "-1": "Left", "0": "Neutral", "1": "Right", "2": "Strong Right"
        };
        return lst[d.toString()];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChartComponent.prototype, "chartElement", void 0);
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchBar {\n  height: 42px;\n  background: #f3f3f3;\n  border-radius: 21px;\n}\n\n#searchBar:hover {\n  background: #e5e5e5;\n}\n\n.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -100px;\n}\n\n.bg {\n  background-image: url(\"stock3.jpg\");\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1024px;\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: auto;\n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.landing-badge {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin: 20px;\n  background-color: #E5E5E5;\n  color: #3a3a3a!important;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border-radius: 15px;\n}\n\n.landing-badge:hover {\n  color: #2e7ef6!important;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .16);\n  cursor: pointer;\n}\n\n/* input {\n    margin-left: 15px;\n    margin-right: 15px;\n    outline: none;\n    border-color: transparent;\n    background: transparent;\n    border: 0;\n    border-bottom-color: transparent;\n    box-shadow: transparent;\n} */\n\n/* button {\n    border-top-right-radius: 21px;\n    border-bottom-right-radius: 21px;\n    margin: 0;\n    height: 42px;\n} */\n\n/* form {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    height: 42px;\n} */\n\n.s006 {\n  width: 100%;\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n  background-image: url(\"stock3.jpg\");\n  background-size: cover;\n  background-position: center center;\n  padding: 0px;\n}\n\n.s006 form {\n  width: 100%;\n  max-width: 790px;\n}\n\n.s006 form legend {\n  font-size: 36px;\n  color: #fff;\n  font-weight: 800;\n  text-align: center;\n  margin-bottom: 59px;\n}\n\n.s006 form .inner-form {\n  width: 100%;\n  margin-bottom: 17px;\n}\n\n.s006 form .inner-form .input-field {\n  height: 70px;\n  width: 100%;\n  position: relative;\n}\n\n.s006 form .inner-form .input-field input {\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  border: 0;\n  background: #fff;\n  display: block;\n  width: 100%;\n  padding: 10px 32px 10px 70px;\n  font-size: 18px;\n  color: #666;\n  border-radius: 34px;\n}\n\n.s006 form .inner-form .input-field input.placeholder {\n  color: #ccc;\n  font-size: 18px;\n}\n\n.s006 form .inner-form .input-field input:-moz-placeholder {\n  color: #ccc;\n  font-size: 18px;\n}\n\n.s006 form .inner-form .input-field input::-webkit-input-placeholder {\n  color: #ccc;\n  font-size: 18px;\n}\n\n.s006 form .inner-form .input-field input:hover, .s006 form .inner-form .input-field input:focus {\n  box-shadow: none;\n  outline: 0;\n}\n\n.s006 form .inner-form .input-field .btn-search {\n  width: 70px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  height: 100%;\n  background: transparent;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUd4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMENBQTBDO0VBQzFDLGVBQWU7QUFDakI7O0FBRUE7Ozs7Ozs7OztHQVNHOztBQUVIOzs7OztHQUtHOztBQUVIOzs7Ozs7Ozs7R0FTRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsaUJBQWlCO0VBRWpCLGFBQWE7RUFFYix1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUVYLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFFYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoQmFyIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiAyMXB4O1xufVxuXG4jc2VhcmNoQmFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3RvY2szLmpwZ1wiKTtcbiAgLyogU2V0IHJ1bGVzIHRvIGZpbGwgYmFja2dyb3VuZCAqL1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMjRweDtcbiAgLyogU2V0IHVwIHByb3BvcnRpb25hdGUgc2NhbGluZyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICAvKiBTZXQgdXAgcG9zaXRpb25pbmcgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5sYW5kaW5nLWJhZGdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgY29sb3I6ICMzYTNhM2EhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubGFuZGluZy1iYWRnZTpob3ZlciB7XG4gIGNvbG9yOiAjMmU3ZWY2IWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcbn0gKi9cblxuLyogYnV0dG9uIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjFweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjFweDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiA0MnB4O1xufSAqL1xuXG4vKiBmb3JtIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNDJweDtcbn0gKi9cblxuLnMwMDYge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzdG9jazMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zMDA2IGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3OTBweDtcbn1cblxuLnMwMDYgZm9ybSBsZWdlbmQge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogODAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDU5cHg7XG59XG5cbi5zMDA2IGZvcm0gLmlubmVyLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cblxuLnMwMDYgZm9ybSAuaW5uZXItZm9ybSAuaW5wdXQtZmllbGQge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zMDA2IGZvcm0gLmlubmVyLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDMycHggMTBweCA3MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uczAwNiBmb3JtIC5pbm5lci1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dC5wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zMDA2IGZvcm0gLmlubmVyLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uczAwNiBmb3JtIC5pbm5lci1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zMDA2IGZvcm0gLmlubmVyLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0OmhvdmVyLCAuczAwNiBmb3JtIC5pbm5lci1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5zMDA2IGZvcm0gLmlubmVyLWZvcm0gLmlucHV0LWZpZWxkIC5idG4tc2VhcmNoIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css\"\n  /> -->\n<link\n  href=\"https://fonts.googleapis.com/css?family=Poppins:400,800\"\n  rel=\"stylesheet\"\n/>\n<link\n  rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css\"\n/>\n<!-- <div class=\"bg\">\n  <div id=\"searchBar\" class=\"centered\" size=\"90\">\n      <form>\n        <input id=\"search-bar-input\" type=\"text\" size=\"1\" autocomplete=\"off\" placeholder=\"Search for Topics\">\n        <button class=\"btn btn-elegant btn-rounded btn-sm my-0\" size=\"4\" type=\"submit\"><i class=\"material-icons\">search</i></button>\n      </form>\n    </div>\n</div> -->\n\n<div class=\"s006\">\n  <form id=\"searchform\">\n    <fieldset>\n      <legend>J u s t N e w s</legend>\n      <div class=\"inner-form\">\n        <div class=\"input-field\">\n          <button class=\"btn-search\" type=\"button\" (click)=\"searchQuery()\">\n            <mat-icon>search</mat-icon>\n          </button>\n          <input\n            id=\"search\"\n            name=\"search\"\n            type=\"text\"\n            placeholder=\"Search for Topic\"\n            value=\"\"\n          />\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <span\n          class=\"badge badge-pill  landing-badge clickable\"\n          (click)=\"searchTop()\"\n          >Top Headlines</span\n        >\n        <span\n          class=\"badge badge-pill  landing-badge clickable\"\n          (click)=\"searchAlabama()\"\n          >Alabama Tornadoes</span\n        >\n        <span\n          class=\"badge badge-pill  landing-badge clickable\"\n          (click)=\"searchBrexit()\"\n          >Brexit Decision</span\n        >\n        <span\n          class=\"badge badge-pill  landing-badge clickable\"\n          (click)=\"searchCarnival()\"\n          >Carnival World</span\n        >\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(newsapi, router) {
        this.newsapi = newsapi;
        this.router = router;
        this.search = "Evanston";
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.newsapi.hideHeader();
        this.newsapi.closeDrawer();
        var that = this;
        $('#searchform').on('keypress', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                e.preventDefault();
                that.searchQuery();
                // return false;
            }
        });
        document.getElementById('search').addEventListener('input', function (evt) {
            that.search = document.getElementById('search').value;
        });
    };
    HomepageComponent.prototype.searchQuery = function () {
        // this.newsapi.openDrawer();
        this.newsapi.showHeader();
        this.router.navigate(['/', 'newspage'], { queryParams: { search: this.search } });
    };
    HomepageComponent.prototype.searchCarnival = function () {
        // this.newsapi.openDrawer();
        this.newsapi.showHeader();
        this.router.navigate(['/', 'newspage'], { queryParams: { search: "Carnival" } });
    };
    HomepageComponent.prototype.searchAlabama = function () {
        // this.newsapi.openDrawer();
        this.newsapi.showHeader();
        this.router.navigate(['/', 'newspage'], { queryParams: { search: "Alabama Tornadoes" } });
    };
    HomepageComponent.prototype.searchTop = function () {
        // this.newsapi.openDrawer();
        this.newsapi.showHeader();
        this.router.navigate(['/', 'newspage'], { queryParams: { id: 0 } });
    };
    HomepageComponent.prototype.searchBrexit = function () {
        this.newsapi.showHeader();
        this.router.navigate(['/', 'newspage'], { queryParams: { search: "Brexit" } });
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leaderboard\">\n  <h1>\n    <!-- <mat-icon style=\"vertical-align: middle\">poll</mat-icon> -->\n    <svg class=\"ico-cup\">\n      <use xlink:href=\"#cup\"></use>\n    </svg>\n    Leaderboard\n  </h1>\n  <ol style=\"list-style: none;\">\n    <li>\n      <mark>Jessie Schmidt</mark>\n      <small>5620</small>\n    </li>\n    <li>\n      <mark>Subrat Franzen</mark>\n      <small>3278</small>\n    </li>\n    <li>\n      <mark>Jordan Hammond</mark>\n      <small>2000</small>\n    </li>\n    <li>\n      <mark>Trevor McCormick</mark>\n      <small>1800</small>\n    </li>\n    <li>\n      <mark>Andrew Fox</mark>\n      <small>1542</small>\n    </li>\n    <li>\n      <mark>Lukas Yang</mark>\n      <small>1300</small>\n    </li>\n  </ol>\n</div>\n\n\n<svg style=\"display: none;\">\n  <symbol id=\"cup\" x=\"0px\" y=\"0px\"\n    width=\"25px\" height=\"26px\" viewBox=\"0 0 25 26\" enable-background=\"new 0 0 25\n    26\" xml:space=\"preserve\">\n    <path fill=\"#ffffff\"\n      d=\"M21.215,1.428c-0.744,0-1.438,0.213-2.024,0.579V0.865c0-0.478-0.394-0.865-0.88-0.865H6.69\n      C6.204,0,5.81,0.387,5.81,0.865v1.142C5.224,1.641,4.53,1.428,3.785,1.428C1.698,1.428,0,3.097,0,5.148\n      C0,7.2,1.698,8.869,3.785,8.869h1.453c0.315,0,0.572,0.252,0.572,0.562c0,0.311-0.257,0.563-0.572,0.563\n      c-0.486,0-0.88,0.388-0.88,0.865c0,0.478,0.395,0.865,0.88,0.865c0.421,0,0.816-0.111,1.158-0.303\n      c0.318,0.865,0.761,1.647,1.318,2.31c0.686,0.814,1.515,1.425,2.433,1.808c-0.04,0.487-0.154,1.349-0.481,2.191\n      c-0.591,1.519-1.564,2.257-2.975,2.257H5.238c-0.486,0-0.88,0.388-0.88,0.865v4.283c0,0.478,0.395,0.865,0.88,0.865h14.525\n      c0.485,0,0.88-0.388,0.88-0.865v-4.283c0-0.478-0.395-0.865-0.88-0.865h-1.452c-1.411,0-2.385-0.738-2.975-2.257\n      c-0.328-0.843-0.441-1.704-0.482-2.191c0.918-0.383,1.748-0.993,2.434-1.808c0.557-0.663,1-1.445,1.318-2.31\n      c0.342,0.192,0.736,0.303,1.157,0.303c0.486,0,0.88-0.387,0.88-0.865c0-0.478-0.394-0.865-0.88-0.865\n      c-0.315,0-0.572-0.252-0.572-0.563c0-0.31,0.257-0.562,0.572-0.562h1.452C23.303,8.869,25,7.2,25,5.148\n      C25,3.097,23.303,1.428,21.215,1.428z\n      M5.238,7.138H3.785c-1.116,0-2.024-0.893-2.024-1.99c0-1.097,0.908-1.99,2.024-1.99\n      c1.117,0,2.025,0.893,2.025,1.99v2.06C5.627,7.163,5.435,7.138,5.238,7.138z\n      M18.883,21.717v2.553H6.118v-2.553H18.883\n      L18.883,21.717z\n      M13.673,18.301c0.248,0.65,0.566,1.214,0.947,1.686h-4.24c0.381-0.472,0.699-1.035,0.947-1.686\n      c0.33-0.865,0.479-1.723,0.545-2.327c0.207,0.021,0.416,0.033,0.627,0.033c0.211,0,0.42-0.013,0.627-0.033\n      C13.195,16.578,13.344,17.436,13.673,18.301z\n      M12.5,14.276c-2.856,0-4.93-2.638-4.93-6.273V1.73h9.859v6.273\n      C17.43,11.638,15.357,14.276,12.5,14.276z\n      M21.215,7.138h-1.452c-0.197,0-0.39,0.024-0.572,0.07v-2.06\n      c0-1.097,0.908-1.99,2.024-1.99c1.117,0,2.025,0.893,2.025,1.99C23.241,6.246,22.333,7.138,21.215,7.138z\"\n      />\n    </symbol>\n  </svg>\n\n\n  <!-- <a class=\"the-most\" target=\"_blank\"\n    href=\"https://codepen.io/2016/popular/pens/8/\">\n    <img\n      src=\"https://raw.githubusercontent.com/supahfunk/supah-codepen/master/themost-2016.png\">\n  </a> -->\n"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.scss":
/*!********************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--------------------\nBody\n// --------------------*/\nbody {\n  min-height: 450px;\n  height: 100%;\n  margin: 0;\n  background: radial-gradient(ellipse farthest-corner at center top, #e5e5e5 0%, #cacaca 100%);\n  color: #fff;\n  font-family: 'Open Sans', sans-serif; }\n.leaderboard {\n  width: auto;\n  height: auto;\n  margin-bottom: 30px;\n  background: linear-gradient(to bottom, #3a404d, #181c26);\n  border-radius: 10px;\n  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);\n  text-overflow: ellipsis; }\n.leaderboard h1 {\n    font-size: 18px;\n    color: #ffffff;\n    padding: 12px 13px 18px; }\n.leaderboard h1 svg {\n      width: 25px;\n      height: 26px;\n      position: relative;\n      top: 3px;\n      margin-right: 6px;\n      vertical-align: baseline; }\n.leaderboard ol {\n    counter-reset: leaderboard;\n    padding: 0px 0px 0px 0px; }\n.leaderboard ol li {\n      position: relative;\n      z-index: 1;\n      font-size: 14px;\n      counter-increment: leaderboard;\n      padding: 18px 10px 18px 50px;\n      cursor: pointer;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n.leaderboard ol li::before {\n        content: counter(leaderboard);\n        position: absolute;\n        z-index: 2;\n        top: 15px;\n        left: 15px;\n        width: 20px;\n        height: 20px;\n        line-height: 20px;\n        color: #cacaca;\n        background: #fff;\n        border-radius: 20px;\n        text-align: center; }\n.leaderboard ol li mark {\n        position: absolute;\n        z-index: 2;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        padding: 18px 10px 18px 50px;\n        margin: 0;\n        background: none;\n        color: #fff; }\n.leaderboard ol li mark::before, .leaderboard ol li mark::after {\n          content: '';\n          position: absolute;\n          z-index: 1;\n          bottom: -11px;\n          left: -9px;\n          border-top: 10px solid #2e7ef6;\n          border-left: 10px solid transparent;\n          transition: all .1s ease-in-out;\n          opacity: 0; }\n.leaderboard ol li mark::after {\n          left: auto;\n          right: -9px;\n          border-left: none;\n          border-right: 10px solid transparent; }\n.leaderboard ol li small {\n        position: relative;\n        z-index: 2;\n        display: block;\n        text-align: right;\n        font-size: 24px;\n        color: #ffffff; }\n.leaderboard ol li::after {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: #2e7ef6;\n        box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);\n        transition: all .3s ease-in-out;\n        opacity: 0; }\n.leaderboard ol li:nth-child(1) {\n        background: #2e7ef6; }\n.leaderboard ol li:nth-child(1)::after {\n          background: #2e7ef6; }\n.leaderboard ol li:nth-child(2) {\n        background: #e5e5e5; }\n.leaderboard ol li:nth-child(2)::after {\n          background: #e5e5e5;\n          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08); }\n.leaderboard ol li:nth-child(2) mark::before, .leaderboard ol li:nth-child(2) mark::after {\n          border-top: 6px solid #e5e5e5;\n          bottom: -7px; }\n.leaderboard ol li:nth-child(3) {\n        background: #d6d6d6; }\n.leaderboard ol li:nth-child(3)::after {\n          background: #d6d6d6;\n          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11); }\n.leaderboard ol li:nth-child(3) mark::before, .leaderboard ol li:nth-child(3) mark::after {\n          border-top: 2px solid #d6d6d6;\n          bottom: -3px; }\n.leaderboard ol li:nth-child(4) {\n        background: #cacaca; }\n.leaderboard ol li:nth-child(4)::after {\n          background: #cacaca;\n          box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15); }\n.leaderboard ol li:nth-child(4) mark::before, .leaderboard ol li:nth-child(4) mark::after {\n          top: -7px;\n          bottom: auto;\n          border-top: none;\n          border-bottom: 6px solid #cacaca; }\n.leaderboard ol li:nth-child(5) {\n        background: #cacaca; }\n.leaderboard ol li:nth-child(5)::after {\n          background: #cacaca;\n          box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15); }\n.leaderboard ol li:nth-child(5) mark::before, .leaderboard ol li:nth-child(5) mark::after {\n          top: -7px;\n          bottom: auto;\n          border-top: none;\n          border-bottom: 6px solid #cacaca; }\n.leaderboard ol li:nth-child(6) {\n        background: #cacaca;\n        border-radius: 0 0 10px 10px; }\n.leaderboard ol li:nth-child(6)::after {\n          background: #cacaca;\n          box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\n          border-radius: 0 0 10px 10px; }\n.leaderboard ol li:nth-child(6) mark::before, .leaderboard ol li:nth-child(6) mark::after {\n          top: -9px;\n          bottom: auto;\n          border-top: none;\n          border-bottom: 8px solid #cacaca; }\n.leaderboard ol li:hover {\n      z-index: 2;\n      overflow: visible; }\n.leaderboard ol li:hover::after {\n        opacity: 1;\n        -webkit-transform: scaleX(1.06) scaleY(1.03);\n                transform: scaleX(1.06) scaleY(1.03); }\n.leaderboard ol li:hover mark::before, .leaderboard ol li:hover mark::after {\n        opacity: 1;\n        transition: all .35s ease-in-out; }\n.the-most {\n  position: fixed;\n  z-index: 1;\n  bottom: 0;\n  left: 0;\n  width: 50vw;\n  max-width: 200px;\n  padding: 10px; }\n.the-most img {\n    max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcmljaGFyZC9Eb2N1bWVudHMvTm9ydGh3ZXN0ZXJuL1dpbnRlciBRdWFydGVyL0VFQ1MzMzAvUHJvamVjdC9KdXN0TmV3cy9hbmd1bGFyLWFwcC9zcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7d0JDRXdCO0FET3hCO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsNEZBRUk7RUFDSixXQUFXO0VBQ1gsb0NBQW9DLEVBQUE7QUFJdEM7RUFDRSxXQUFXO0VBQ1gsWUFBVztFQUNYLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLDJDQUEwQztFQUMxQyx1QkFBdUIsRUFBQTtBQVB6QjtJQVNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCLEVBQUE7QUFYM0I7TUFjTSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsaUJBQWlCO01BQ2pCLHdCQUF3QixFQUFBO0FBbkI5QjtJQXlCSSwwQkFBMEI7SUFDMUIsd0JBQXdCLEVBQUE7QUExQjVCO01BNEJNLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsZUFBZTtNQUNmLDhCQUE4QjtNQUM5Qiw0QkFBNEI7TUFDNUIsZUFBZTtNQUNmLG1DQUEyQjtjQUEzQiwyQkFBMkIsRUFBQTtBQWxDakM7UUFzQ1EsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixjQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBO0FBakQxQjtRQXFEUSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVztRQUNYLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixXQUFXLEVBQUE7QUE5RG5CO1VBaUVVLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsVUFBVTtVQUNWLGFBQWE7VUFDYixVQUFVO1VBQ1YsOEJBQThCO1VBQzlCLG1DQUFtQztVQUNuQywrQkFBK0I7VUFDL0IsVUFBVSxFQUFBO0FBekVwQjtVQTZFVSxVQUFVO1VBQ1YsV0FBVztVQUNYLGlCQUFpQjtVQUNqQixvQ0FBb0MsRUFBQTtBQWhGOUM7UUFxRlEsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQUFjLEVBQUE7QUExRnRCO1FBK0ZRLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFFQTtRQUNBLHVDQUFzQztRQUV0QywrQkFBK0I7UUFDL0IsVUFBVSxFQUFBO0FBNUdsQjtRQWdIUSxtQkFHQSxFQUFBO0FBbkhSO1VBcUhVLG1CQUNBLEVBQUE7QUF0SFY7UUEySFEsbUJBRUEsRUFBQTtBQTdIUjtVQStIVSxtQkFFQTtVQUNBLHVDQUFzQyxFQUFBO0FBbEloRDtVQXVJWSw2QkFDQTtVQUNBLFlBQVksRUFBQTtBQXpJeEI7UUErSVEsbUJBQ0EsRUFBQTtBQWhKUjtVQWtKVSxtQkFDQTtVQUNBLHVDQUFzQyxFQUFBO0FBcEpoRDtVQXlKWSw2QkFDQTtVQUNBLFlBQVksRUFBQTtBQTNKeEI7UUFpS1EsbUJBQ0EsRUFBQTtBQWxLUjtVQW9LVSxtQkFDQTtVQUNBLHdDQUF1QyxFQUFBO0FBdEtqRDtVQTJLWSxTQUFTO1VBQ1QsWUFBWTtVQUNaLGdCQUFnQjtVQUNoQixnQ0FDQSxFQUFBO0FBL0taO1FBb0xRLG1CQUNBLEVBQUE7QUFyTFI7VUF1TFUsbUJBQ0E7VUFDQSx3Q0FBdUMsRUFBQTtBQXpMakQ7VUE4TFksU0FBUztVQUNULFlBQVk7VUFDWixnQkFBZ0I7VUFDaEIsZ0NBQ0EsRUFBQTtBQWxNWjtRQXdNUSxtQkFDQTtRQUNBLDRCQUE0QixFQUFBO0FBMU1wQztVQTRNVSxtQkFDQTtVQUNBLDBDQUF5QztVQUN6Qyw0QkFBNEIsRUFBQTtBQS9NdEM7VUFvTlksU0FBUztVQUNULFlBQVk7VUFDWixnQkFBZ0I7VUFDaEIsZ0NBQ0EsRUFBQTtBQXhOWjtNQWlPTSxVQUFVO01BQ1YsaUJBQWlCLEVBQUE7QUFsT3ZCO1FBcU9RLFVBQVU7UUFDViw0Q0FBb0M7Z0JBQXBDLG9DQUFvQyxFQUFBO0FBdE81QztRQTJPVSxVQUFVO1FBQ1YsZ0NBQWdDLEVBQUE7QUFZMUM7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFQZjtJQVVJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxuQm9keVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLy8gKixcbi8vICo6OmJlZm9yZSxcbi8vICo6OmFmdGVyIHtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vIH1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDsgIFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgY2VudGVyIHRvcCwgI2U1ZTVlNVxuIDAlLCAjY2FjYWNhXG4gMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7ICBcbn1cblxuXG4ubGVhZGVyYm9hcmQge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OmF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzYTQwNGQsICMxODFjMjYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDdweCAzMHB4IHJnYmEoNjIsIDksIDExLCAuMyk7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDEycHggMTNweCAxOHB4O1xuXG4gICAgJiBzdmcge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDNweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIH1cblxuICB9XG5cbiAgb2wge1xuICAgIGNvdW50ZXItcmVzZXQ6IGxlYWRlcmJvYXJkO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY291bnRlci1pbmNyZW1lbnQ6IGxlYWRlcmJvYXJkO1xuICAgICAgcGFkZGluZzogMThweCAxMHB4IDE4cHggNTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBjb3VudGVyKGxlYWRlcmJvYXJkKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogI2NhY2FjYSAgICAgICAgO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1hcmsge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMThweCAxMHB4IDE4cHggNTBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3R0b206IC0xMXB4O1xuICAgICAgICAgIGxlZnQ6IC05cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMmU3ZWY2O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgIHJpZ2h0OiAtOXB4O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmU3ZWY2XG5cbiAgICAgICAgO1xuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAwIHJnYmEoMCwgMCwgMCwgLjA4KTtcbiAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZVgoMS4wNikgc2NhbGVZKDEuMDMpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyZTdlZjZcblxuXG4gICAgICAgIDtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZTdlZjZcbiAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1XG5cbiAgICAgICAgO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U1ZTVlNVxuXG4gICAgICAgICAgO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAuMDgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBtYXJrIHtcbiAgICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjZTVlNWU1XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBib3R0b206IC03cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Q2ZDZkNlxuICAgICAgICA7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDZkNmQ2XG4gICAgICAgICAgO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBtYXJrIHtcbiAgICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDZkNmQ2XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBib3R0b206IC0zcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NhY2FjYVxuICAgICAgICA7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2FjYWNhXG4gICAgICAgICAgO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgbWFyayB7XG4gICAgICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XG4gICAgICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNjYWNhY2FcbiAgICAgICAgICAgIDs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCg1KSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjYWNhY2FcbiAgICAgICAgO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2NhY2FjYVxuICAgICAgICAgIDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgICAgIH1cblxuICAgICAgICAmIG1hcmsge1xuICAgICAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgdG9wOiAtN3B4O1xuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjY2FjYWNhXG4gICAgICAgICAgICA7O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOm50aC1jaGlsZCg2KSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjYWNhY2FcbiAgICAgICAgO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2NhY2FjYVxuICAgICAgICAgIDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIC0yLjVweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJiBtYXJrIHtcbiAgICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICAgICAgICAgIHRvcDogLTlweDtcbiAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI2NhY2FjYVxuICAgICAgICAgICAgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gaG92ZXJcbiAgICBsaTpob3ZlciB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4wNikgc2NhbGVZKDEuMDMpO1xuICAgICAgfVxuXG4gICAgICAmIG1hcmsge1xuICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuKiB7XG4gIC8vZGlzcGxheTogbm9uZTtcbn1cblxuLnRoZS1tb3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MHZ3O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkJvZHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmJvZHkge1xuICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCBjZW50ZXIgdG9wLCAjZTVlNWU1IDAlLCAjY2FjYWNhIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XG5cbi5sZWFkZXJib2FyZCB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzYTQwNGQsICMxODFjMjYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDdweCAzMHB4IHJnYmEoNjIsIDksIDExLCAwLjMpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubGVhZGVyYm9hcmQgaDEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxMnB4IDEzcHggMThweDsgfVxuICAgIC5sZWFkZXJib2FyZCBoMSBzdmcge1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDNweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG4gIC5sZWFkZXJib2FyZCBvbCB7XG4gICAgY291bnRlci1yZXNldDogbGVhZGVyYm9hcmQ7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4OyB9XG4gICAgLmxlYWRlcmJvYXJkIG9sIGxpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb3VudGVyLWluY3JlbWVudDogbGVhZGVyYm9hcmQ7XG4gICAgICBwYWRkaW5nOiAxOHB4IDEwcHggMThweCA1MHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubGVhZGVyYm9hcmQgb2wgbGk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIobGVhZGVyYm9hcmQpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjY2FjYWNhO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIC5sZWFkZXJib2FyZCBvbCBsaSBtYXJrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMTBweCAxOHB4IDUwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpIG1hcms6OmJlZm9yZSwgLmxlYWRlcmJvYXJkIG9sIGxpIG1hcms6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3R0b206IC0xMXB4O1xuICAgICAgICAgIGxlZnQ6IC05cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMmU3ZWY2O1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgb3BhY2l0eTogMDsgfVxuICAgICAgICAubGVhZGVyYm9hcmQgb2wgbGkgbWFyazo6YWZ0ZXIge1xuICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgcmlnaHQ6IC05cHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50OyB9XG4gICAgICAubGVhZGVyYm9hcmQgb2wgbGkgc21hbGwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzJlN2VmNjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICBvcGFjaXR5OiAwOyB9XG4gICAgICAubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzJlN2VmNjsgfVxuICAgICAgICAubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDEpOjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzJlN2VmNjsgfVxuICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7IH1cbiAgICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCgyKTo6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpOyB9XG4gICAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoMikgbWFyazo6YmVmb3JlLCAubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDIpIG1hcms6OmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgI2U1ZTVlNTtcbiAgICAgICAgICBib3R0b206IC03cHg7IH1cbiAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoMykge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZDZkNmQ2OyB9XG4gICAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDZkNmQ2O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKTsgfVxuICAgICAgICAubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDMpIG1hcms6OmJlZm9yZSwgLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCgzKSBtYXJrOjphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkNmQ2ZDY7XG4gICAgICAgICAgYm90dG9tOiAtM3B4OyB9XG4gICAgICAubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NhY2FjYTsgfVxuICAgICAgICAubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDQpOjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2NhY2FjYTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpOyB9XG4gICAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNCkgbWFyazo6YmVmb3JlLCAubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDQpIG1hcms6OmFmdGVyIHtcbiAgICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNjYWNhY2E7IH1cbiAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2FjYWNhOyB9XG4gICAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNSk6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2FjYWNhO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7IH1cbiAgICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCg1KSBtYXJrOjpiZWZvcmUsIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNSkgbWFyazo6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogLTdweDtcbiAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2NhY2FjYTsgfVxuICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCg2KSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjYWNhY2E7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7IH1cbiAgICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCg2KTo6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNjYWNhY2E7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAtMi41cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7IH1cbiAgICAgICAgLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCg2KSBtYXJrOjpiZWZvcmUsIC5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNikgbWFyazo6YWZ0ZXIge1xuICAgICAgICAgIHRvcDogLTlweDtcbiAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI2NhY2FjYTsgfVxuICAgIC5sZWFkZXJib2FyZCBvbCBsaTpob3ZlciB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7IH1cbiAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjA2KSBzY2FsZVkoMS4wMyk7IH1cbiAgICAgIC5sZWFkZXJib2FyZCBvbCBsaTpob3ZlciBtYXJrOjpiZWZvcmUsIC5sZWFkZXJib2FyZCBvbCBsaTpob3ZlciBtYXJrOjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0OyB9XG5cbi50aGUtbW9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTB2dztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDsgfVxuICAudGhlLW1vc3QgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/leaderboard/leaderboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent() {
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
    };
    LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.scss */ "./src/app/leaderboard/leaderboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    background: linear-gradient(to bottom, #3a404d, #181c26);\n}\n\n.app-title {\n  color: white;\n  font-weight: 700;\n}\n\n.app-title:hover {\n  color: #2e7ef6!important;\n  cursor: pointer;\n}\n\n.profile-button:hover {\n  background-color: #2e7ef6!important;\n}\n\n.profile-button{\n    background:url('jessie.jpg');\n    background-size: contain;\n}\n\n.profile-button:focus,.profile-button:active {\n  outline: none !important;\n  box-shadow: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0RBQXdEO0FBQzVEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0lBQ0ksNEJBQXlDO0lBQ3pDLHdCQUF3QjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM2E0MDRkLCAjMTgxYzI2KTtcbn1cblxuLmFwcC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFwcC10aXRsZTpob3ZlciB7XG4gIGNvbG9yOiAjMmU3ZWY2IWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU3ZWY2IWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vYXNzZXRzL2plc3NpZS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ucHJvZmlsZS1idXR0b246Zm9jdXMsLnByb2ZpbGUtYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n  rel=\"stylesheet\">\n<link rel=\"stylesheet\"\n  href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"\n  crossorigin=\"anonymous\">\n\n<nav id=\"navbar\" class=\"navbar navbar-dark\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"height: 56px\">\n    <button style=\"border-color: transparent\" class=\"navbar-toggler\" type=\"button\" (click)=\"drawer.toggle()\"\n      data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\"\n      aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n      <!--<mat-icon>menu</mat-icon>-->\n    </button>\n    <div class=\"navbar-text white-icon margin-left app-title clickable\"\n      (click)=\"goToLandingPage()\">J u s t N e w s\n    </div>\n  </div>\n  <button *ngIf=\"router.url !== '/profile'\" class=\"profile-button\" mat-fab (click)=\"goToProfilePage()\">\n  </button>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users-service */ "./src/app/services/users-service.ts");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var NavbarComponent = /** @class */ (function () {
    // public user: User;
    function NavbarComponent(newsapi, router, users) {
        this.newsapi = newsapi;
        this.router = router;
        this.users = users;
        this.image = "assets/jessie.jpg";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    NavbarComponent.prototype.goToProfilePage = function () {
        this.router.navigate(['/', 'profile']);
    };
    NavbarComponent.prototype.goToLandingPage = function () {
        this.newsapi.closeDrawer();
        this.router.navigate(['/', 'home']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"])
    ], NavbarComponent.prototype, "drawer", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_newsapi_service__WEBPACK_IMPORTED_MODULE_3__["NewsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news-card/news-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/news-card/news-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-card {\n  width: 45vw;\n  margin: 20px;\n  height: 190px;\n}\n\n.source-title {\n  height:48px;\n  word-wrap: break-word;\n  overflow: hidden;\n  margin-bottom: 0px;\n}\n\n.news-image {\n  max-height: 190px;\n  max-width: 250px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-bottom-left-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.card-pad {\n  padding-right: 30px;\n  padding-left: 10px;\n  padding-bottom: 0px;\n  padding-top:10px;\n}\n\n.white-text {\n  color: whitesmoke;\n}\n\n.source-badge {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 7px;\n  padding-left: 7px;\n  margin-right: 10px;\n  background-color: #E5E5E5;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  border-radius: 15px;\n}\n\n.mask {\n  color: #757577 !important;\n  background-color: #eaebee!important;\n}\n\n.mask:hover {\n  color: #757577 !important;\n}\n\n.reveal {\n  background-color: #eaebee !important;\n}\n\n.left {\n  color: #2e7ef6 !important;\n}\n\n.right {\n  color: #f97173 !important;\n}\n\n.neutral {\n  color: #757577 !important;\n}\n\n.left:hover {\n  color: #2e7ef6 !important;\n  box-shadow: 0 2px 5px 0 rgba(44, 122, 239, 0.24);\n  cursor: default;\n}\n\n.neutral:hover {\n  color: #757577 !important;\n  box-shadow: 0 2px 5px 0 rgba(161, 161, 164, 0.32);\n  cursor: default;\n}\n\n.right:hover {\n  color: #f97173 !important;\n  box-shadow: 0 2px 5px 0 rgba(247, 112, 115, 0.38);\n  cursor: default;\n}\n\n.source-date {\n  margin: 0;\n  color: #757577!important;\n}\n\n.card-action {\n  height: 36px;\n}\n\n.sub-info {\n  height: 24px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.source-description {\n  height: 66px;\n  margin-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  line-height: 1.4em;\n  max-height: 4em;\n  color: #757577!important;\n}\n\n.mask-button {\n  margin-left: -15px;\n}\n\n.remove-outline:focus,.remove-outline:active {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.collapse-expand {\n  color: #757575;\n}\n\n.news-image:hover {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1jYXJkL25ld3MtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFHeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnREFBZ0Q7RUFDaEQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uZXdzLWNhcmQvbmV3cy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1jYXJkIHtcbiAgd2lkdGg6IDQ1dnc7XG4gIG1hcmdpbjogMjBweDtcbiAgaGVpZ2h0OiAxOTBweDtcbn1cblxuLnNvdXJjZS10aXRsZSB7XG4gIGhlaWdodDo0OHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm5ld3MtaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiAxOTBweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5jYXJkLXBhZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy10b3A6MTBweDtcbn1cblxuLndoaXRlLXRleHQge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnNvdXJjZS1iYWRnZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLm1hc2sge1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYmVlIWltcG9ydGFudDtcbn1cblxuLm1hc2s6aG92ZXIge1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xufVxuXG4ucmV2ZWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWJlZSAhaW1wb3J0YW50O1xufVxuXG4ubGVmdCB7XG4gIGNvbG9yOiAjMmU3ZWY2ICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodCB7XG4gIGNvbG9yOiAjZjk3MTczICFpbXBvcnRhbnQ7XG59XG5cbi5uZXV0cmFsIHtcbiAgY29sb3I6ICM3NTc1NzcgIWltcG9ydGFudDtcbn1cblxuLmxlZnQ6aG92ZXIge1xuICBjb2xvcjogIzJlN2VmNiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDQ0LCAxMjIsIDIzOSwgMC4yNCk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLm5ldXRyYWw6aG92ZXIge1xuICBjb2xvcjogIzc1NzU3NyAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDE2MSwgMTYxLCAxNjQsIDAuMzIpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5yaWdodDpob3ZlciB7XG4gIGNvbG9yOiAjZjk3MTczICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMjQ3LCAxMTIsIDExNSwgMC4zOCk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNvdXJjZS1kYXRlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzc1NzU3NyFpbXBvcnRhbnQ7XG59XG4uY2FyZC1hY3Rpb24ge1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uc3ViLWluZm8ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uc291cmNlLWRlc2NyaXB0aW9uIHtcbiAgaGVpZ2h0OiA2NnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgbWF4LWhlaWdodDogNGVtO1xuICBjb2xvcjogIzc1NzU3NyFpbXBvcnRhbnQ7XG59XG5cbi5tYXNrLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLnJlbW92ZS1vdXRsaW5lOmZvY3VzLC5yZW1vdmUtb3V0bGluZTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jb2xsYXBzZS1leHBhbmQge1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLm5ld3MtaW1hZ2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/news-card/news-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/news-card/news-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card news-card\">\n\n  <div fxLayout=\"row\">\n    <!-- Card image -->\n    <img (click)=\"goToArticle()\" fxFlex class=\"news-image\"\n      src=\"{{article.image}}\" alt=\"Card\n      image cap\">\n\n    <!-- Card content -->\n    <div fxFlex=\"65\" style=\"margin-left: 10px\" class=\"card-body card-pad\">\n      <!-- Title -->\n      <a data-toggle=\"tooltip\" title=\"{{article.title}}\" placement='left'>\n        <h5 (click)=\"goToArticle()\" class=\"source-title\"><a>{{article.title}}</a></h5>\n      </a>\n\n      <!-- Text -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"sub-info\">\n        <!--Source-->\n        <span id=\"sourceBadge\" *ngIf=\"!maskAll && !maskThis || maskAll &&\n          !maskThis\" class=\"source-badge badge reveal badge-light\n          {{article.bias}}\">{{article.source}}</span>\n        <span *ngIf=\"maskAll && maskThis || !maskAll && maskThis\"\n          class=\"source-badge badge badge-light mask\">Hidden Source</span>\n\n        <!-- Date -->\n        <p class=\"source-date\">\n          <small>Published:\n            {{getTimeString()}}\n          </small>\n        </p>\n\n      </div>\n      <p class=\"card-text source-description\">{{article.description}}</p>\n      <!-- <span *ngIf=\"maskAll && maskThis\" class=\"source-badge badge badge-dark\n        white-text\" (click)=\"removeMask()\">Reveal Source</span>\n      <span *ngIf=\"!maskAll || !maskThis\" class=\"source-badge badge badge-dark\n        white-text\" (click)=\"addMask()\">Mask Source</span> -->\n      <div class=\"card-action\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <button mat-button class=\"mask-button remove-outline\"\n          (click)=\"toggleMask()\">{{maskButton}}</button>\n        <div>\n          <label></label>\n          <button mat-button class=\"remove-outline\"\n            (click)=\"buildSummaryDialog()\">\n            Brief Summary\n          </button>\n          <button mat-button class=\"remove-outline\"\n            (click)=\"goToArticle()\">\n            Full Article\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news-card/news-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-card/news-card.component.ts ***!
  \**************************************************/
/*! exports provided: NewsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardComponent", function() { return NewsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_summarizer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/summarizer.service */ "./src/app/services/summarizer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _summarydialog_summarydialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../summarydialog/summarydialog.component */ "./src/app/summarydialog/summarydialog.component.ts");







var NewsCardComponent = /** @class */ (function () {
    function NewsCardComponent(newsapi, router, summarizer, dialog) {
        this.newsapi = newsapi;
        this.router = router;
        this.summarizer = summarizer;
        this.dialog = dialog;
        this.maskCurrent = true;
        this.maskButton = "Mask Source";
        this.collapse = false;
        this.summary = [];
    }
    NewsCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsapi.mask.subscribe(function (value) { _this.maskAll = value; _this.maskThis = value; _this.checkMask(); });
    };
    NewsCardComponent.prototype.buildSummaryDialog = function () {
        var dialogRef = this.dialog.open(_summarydialog_summarydialog_component__WEBPACK_IMPORTED_MODULE_6__["SummarydialogComponent"], {
            width: '600px',
            minHeight: '600px',
            data: { url: this.article.url, img: this.article.image, title: this.article.title }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    NewsCardComponent.prototype.checkMask = function () {
        this.maskCurrent = this.maskAll && this.maskThis;
        this.maskButton = this.maskThis ? "Unmask Source" : "Mask Source";
    };
    NewsCardComponent.prototype.getTimeString = function () {
        var hour = this.article.publishedAt.getHours();
        var tod = "AM";
        var minutes = this.article.publishedAt.getMinutes();
        var minString = minutes.toString().padEnd(2, "0");
        if (hour > 12) {
            tod = "PM";
        }
        if (hour == 0 || 12) {
            hour = 12;
        }
        else {
            hour = hour % 12;
        }
        return hour + ":" + minString + tod + " " + (this.article.publishedAt.getMonth() + 1) + "/" + this.article.publishedAt.getDate() + "/" + this.article.publishedAt.getFullYear();
    };
    NewsCardComponent.prototype.searchNews = function () {
        var search = document.getElementById("search").nodeValue;
        this.newsapi.showHeader();
        this.router.navigate(['/', 'newspage'], { queryParams: { search: search } });
    };
    NewsCardComponent.prototype.goToArticle = function () {
        this.router.navigate(['/', 'article'], {
            queryParams: {
                author: this.article.author,
                title: this.article.title,
                description: this.article.description,
                url: this.article.url,
                image: this.article.image,
                publishedAt: this.article.publishedAt,
                content: this.article.content,
                source: this.article.source,
                bias: this.article.bias,
                maskThis: this.maskThis,
                maskAll: this.maskAll
            }
        });
    };
    NewsCardComponent.prototype.removeMask = function () {
        this.maskThis = false;
    };
    NewsCardComponent.prototype.addMask = function () {
        this.maskThis = true;
    };
    NewsCardComponent.prototype.toggleMask = function () {
        this.maskThis = !this.maskThis;
        this.maskButton = this.maskThis ? "Unmask Source" : "Mask Source";
        this.checkMask();
    };
    NewsCardComponent.prototype.toggleCollapse = function () {
        this.collapse = !this.collapse;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsCardComponent.prototype, "article", void 0);
    NewsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'news-card',
            template: __webpack_require__(/*! ./news-card.component.html */ "./src/app/news-card/news-card.component.html"),
            styles: [__webpack_require__(/*! ./news-card.component.css */ "./src/app/news-card/news-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_summarizer_service__WEBPACK_IMPORTED_MODULE_4__["SummarizerService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], NewsCardComponent);
    return NewsCardComponent;
}());



/***/ }),

/***/ "./src/app/newspage/bias.json":
/*!************************************!*\
  !*** ./src/app/newspage/bias.json ***!
  \************************************/
/*! exports provided: left, neutral, right, default */
/***/ (function(module) {

module.exports = {"left":["ABC News","AlterNet","BuzzFeed News","CBS News","CNN","Daily Beast","Daily Kos","Democracy Now","Huffpost.com","Jacobin","Mother Jones","MSNBC","NBCNews.com","New York Times - News","New York Times - Opinion","The New York Times","Newsweek","NPR Editorial","Politico","Salon","San Francisco Chronicle","Slate","The Atlantic","The Boston Globe","The Economist","The Guardian","The Intercept","The Nation","The New Yorker","ThinkProgress","Time Magazine","U.S. News & World Report","Vanity Fair","Vox","The Washington Post"],"neutral":["Al Jazeera","Associated Press","Axios","BBC News","Bloomberg","Chicago Tribune","Christian Science Monitor","FactCheck.org","FiveThirtyEight","Forbes","NPR News","RealClearPolitics","Reuters","The Hill","USA Today","Wall Street Journal - News"],"right":["American Spectator","Breitbart News","CBN","Daily Mail","Fox News","Investor's Business Daily","National Review","New York Post","Newsmax","Reason","The Daily Caller","The Daily Wire","The Federalist","The Libertarian Republic","The Weekly Standard","TheBlaze.com","Townhall","The Wall Street Journal","Washington Examiner","Washington Times","Abc3340.com"]};

/***/ }),

/***/ "./src/app/newspage/newspage.component.css":
/*!*************************************************!*\
  !*** ./src/app/newspage/newspage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggle {\n    height: 42px;\n    padding-top: 10px;\n}\n\n.search {\n    width: 756px;\n}\n\n.toggle-label {\n    font-weight: 500;\n    font-size: 18px;\n    font-family: \"Nunito Sans\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3BhZ2UvbmV3c3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQ0FBc0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9uZXdzcGFnZS9uZXdzcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZSB7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgICB3aWR0aDogNzU2cHg7XG59XG4udG9nZ2xlLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/newspage/newspage.component.html":
/*!**************************************************!*\
  !*** ./src/app/newspage/newspage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css\"\n  />\n<div class=\"homepage-container\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\" fxLayoutGap=\"10px\">\n    <div class=\"search\" fxLayout=\"row\" fxLayoutAlign=\"space-between end\" fxLayoutGap=\"20px\">\n      <search-card></search-card>\n      <div class=\"toggle\">\n        <mat-slide-toggle class=\"toggle-label\" [(ngModel)]=\"maskAll\"\n          (change)=\"toggleMaskAll()\">All\n          Sources Masked</mat-slide-toggle>\n      </div>\n    </div>\n    <div class=\"news-card\" *ngFor=\"let article of articles\">\n      <news-card [article]=\"article\"></news-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/newspage/newspage.component.ts":
/*!************************************************!*\
  !*** ./src/app/newspage/newspage.component.ts ***!
  \************************************************/
/*! exports provided: NewspageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspageComponent", function() { return NewspageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bias_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bias.json */ "./src/app/newspage/bias.json");
var _bias_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./bias.json */ "./src/app/newspage/bias.json", 1);





var NewspageComponent = /** @class */ (function () {
    function NewspageComponent(news, _route) {
        var _this = this;
        this.news = news;
        this._route = _route;
        this.articles = [];
        this.query = 0;
        this.search = "";
        this.maskAll = true;
        this.newsapi = news;
        this._route.queryParams.subscribe(function (params) {
            _this.query = params["id"] || 0;
            _this.search = params["search"];
            _this.getQuery(params["id"], params["search"]);
        });
    }
    NewspageComponent.prototype.getQuery = function (id, search) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (id) {
                    case "0": //TOP NEWS IN US
                        this.newsapi.getHeadlinesInUS().subscribe(function (response) {
                            _this.data = response["articles"];
                            _this.getArticles();
                        });
                        break;
                    case "1": //TOP NEWS IN WORLD
                        this.newsapi.getArticleByQuery("World News").subscribe(function (response) {
                            _this.data = response["articles"];
                            _this.getArticles();
                        });
                        break;
                    case "2": //TOP NEWS IN US
                        break;
                    case "3": //TOP NEWS IN CHICAGO
                        this.newsapi.getArticleByQuery("Chicago").subscribe(function (response) {
                            _this.data = response["articles"];
                            _this.getArticles();
                        });
                        break;
                    case "4": //TOP NEWS IN TECHNOLOGY
                        this.newsapi.getArticleByQuery("Technology").subscribe(function (response) {
                            _this.data = response["articles"];
                            _this.getArticles();
                        });
                        break;
                    default:
                        this.newsapi.getArticleByQuery(search).subscribe(function (response) {
                            _this.data = response["articles"];
                            _this.getArticles();
                        });
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    NewspageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsapi.mask.subscribe(function (value) {
            _this.maskAll = value;
        });
    };
    NewspageComponent.prototype.toggleMaskAll = function () {
        this.newsapi.setMask(this.maskAll);
    };
    NewspageComponent.prototype.createArticle = function (d) {
        var bias_mode = "neutral";
        if (_bias_json__WEBPACK_IMPORTED_MODULE_4__["left"].includes(d["source"]["name"])) {
            bias_mode = "left";
        }
        else if (_bias_json__WEBPACK_IMPORTED_MODULE_4__["right"].includes(d["source"]["name"])) {
            bias_mode = "right";
        }
        var content = d["content"];
        if (content != null && content.endsWith("]")) {
            content = String(content);
            content = content.substring(0, content.lentgh - 8) + " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nisi quis eleifend quam adipiscing. Facilisis sed odio morbi quis commodo odio aenean sed. Amet facilisis magna etiam tempor orci eu lobortis. Molestie nunc non blandit massa enim nec. Massa enim nec dui nunc mattis. Enim ut sem viverra aliquet eget sit amet tellus. Mauris a diam maecenas sed enim ut. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Orci eu lobortis elementum nibh tellus. In nulla posuere sollicitudin aliquam ultrices sagittis orci.\n" +
                "\n" +
                "Sit amet commodo nulla facilisi nullam vehicula ipsum. A scelerisque purus semper eget duis at tellus at. Viverra aliquet eget sit amet. Justo nec ultrices dui sapien eget mi proin sed. Tempus iaculis urna id volutpat lacus laoreet. Cras tincidunt lobortis feugiat vivamus at. Elementum curabitur vitae nunc sed velit dignissim. Purus semper eget duis at tellus at urna condimentum. Pellentesque adipiscing commodo elit at. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eu consequat ac felis donec et. Scelerisque in dictum non consectetur a. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Commodo nulla facilisi nullam vehicula ipsum. Suspendisse sed nisi lacus sed viverra.\n" +
                "\n";
        }
        else {
            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nisi quis eleifend quam adipiscing. Facilisis sed odio morbi quis commodo odio aenean sed. Amet facilisis magna etiam tempor orci eu lobortis. Molestie nunc non blandit massa enim nec. Massa enim nec dui nunc mattis. Enim ut sem viverra aliquet eget sit amet tellus. Mauris a diam maecenas sed enim ut. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Orci eu lobortis elementum nibh tellus. In nulla posuere sollicitudin aliquam ultrices sagittis orci.\n" +
                "\n" +
                "Sit amet commodo nulla facilisi nullam vehicula ipsum. A scelerisque purus semper eget duis at tellus at. Viverra aliquet eget sit amet. Justo nec ultrices dui sapien eget mi proin sed. Tempus iaculis urna id volutpat lacus laoreet. Cras tincidunt lobortis feugiat vivamus at. Elementum curabitur vitae nunc sed velit dignissim. Purus semper eget duis at tellus at urna condimentum. Pellentesque adipiscing commodo elit at. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eu consequat ac felis donec et. Scelerisque in dictum non consectetur a. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Commodo nulla facilisi nullam vehicula ipsum. Suspendisse sed nisi lacus sed viverra.\n" +
                "\n" +
                "Quis lectus nulla at volutpat diam ut venenatis tellus. Enim ut sem viverra aliquet eget sit amet. Rhoncus aenean vel elit scelerisque mauris pellentesque. Amet justo donec enim diam vulputate ut. Consectetur adipiscing elit ut aliquam purus. Scelerisque mauris pellentesque pulvinar pellentesque. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Maecenas volutpat blandit aliquam etiam. Vel risus commodo viverra maecenas. Gravida cum sociis natoque penatibus. Consectetur a erat nam at lectus urna duis convallis. Et molestie ac feugiat sed lectus.";
        }
        return {
            author: d["author"],
            title: d["title"],
            description: d["description"],
            url: d["url"],
            image: d["urlToImage"],
            publishedAt: new Date(d["publishedAt"]),
            content: content,
            source: d["source"]["name"],
            bias: bias_mode
        };
    };
    NewspageComponent.prototype.getArticles = function () {
        this.articles = [];
        for (var i in this.data) {
            var d = this.data[i];
            var a = this.createArticle(d);
            this.articles.push(a);
        }
    };
    NewspageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "newspage",
            template: __webpack_require__(/*! ./newspage.component.html */ "./src/app/newspage/newspage.component.html"),
            styles: [__webpack_require__(/*! ./newspage.component.css */ "./src/app/newspage/newspage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NewspageComponent);
    return NewspageComponent;
}());



/***/ }),

/***/ "./src/app/profilepage/awarddialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profilepage/awarddialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".requirements {\n  text-align: start;\n  font-weight: 700;\n  color: #A4ABBA;\n  width: 100%;\n}\n\n.lock {\n  -webkit-filter: grayscale(100%) opacity(25%);\n          filter: grayscale(100%) opacity(25%);\n}\n\n.but {\n  width: 10%;\n  margin-left: 45%;\n  margin-top: 10px;\n}\n\n.clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXBhZ2UvYXdhcmRkaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRDQUFvQztVQUFwQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlcGFnZS9hd2FyZGRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVpcmVtZW50cyB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0E0QUJCQTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2NrIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgyNSUpO1xufVxuXG4uYnV0IHtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/profilepage/awarddialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/profilepage/awarddialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css\"\n  />\n\n<div mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <img *ngIf=\"data.achieved\"\n    src={{data.img}}\n    class=\"rounded-circle t clickable award\"\n    width=\"100px\"\n    height=\"100px\" />\n\n\n  <img *ngIf=\"!data.achieved\"\n    src={{data.img}}\n    class=\"rounded-circle t clickable award lock\"\n    width=\"100px\"\n    height=\"100px\" />\n\n  <h1 mat-dialog-title style=\"text-align: center\">{{data.award}}</h1>\n\n  <p class=\"requirements\">Requirements:</p>\n  <p style=\"text-align: justify\">Lorem ipsum dolor sit amet, consectetur\n    adipiscing elit, sed do eiusmod tempor\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n    nostrud exercitation ullamco laboris nisi\n    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n    in voluptate velit esse cillum dolore eu\n    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt\n    in culpa qui officia deserunt mollit\n    anim id est laborum.</p>\n  <p *ngIf=\"data.achieved\" style=\"width: 100%;text-align: start;color:\n    #9e9e9e;\">Earned on: October 15th 2018</p>\n  <p *ngIf=\"!data.achieved\" style=\"width: 100%;text-align: start;color:\n    #9e9e9e;\">Not yet earned</p>\n</div>\n<div\n  class=\"but badge badge-pill badge-primary clickable\"\n  (click)=\"onNoClick()\">Close\n</div>\n"

/***/ }),

/***/ "./src/app/profilepage/awarddialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profilepage/awarddialog.component.ts ***!
  \******************************************************/
/*! exports provided: AwardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardDialogComponent", function() { return AwardDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AwardDialogComponent = /** @class */ (function () {
    function AwardDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AwardDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AwardDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'awarddialog',
            template: __webpack_require__(/*! ./awarddialog.component.html */ "./src/app/profilepage/awarddialog.component.html"),
            styles: [__webpack_require__(/*! ./awarddialog.component.css */ "./src/app/profilepage/awarddialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AwardDialogComponent);
    return AwardDialogComponent;
}());



/***/ }),

/***/ "./src/app/profilepage/profilepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profilepage/profilepage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-wrapper {\n  /* padding-left: 20%; */\n  /* padding-top: 45px; */\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.badge {\n  width: 64px;\n  height: 64px;\n}\n\n.routing {\n  width: 100%;\n}\n\n.remove-outline:focus, .remove-outline:active {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.hline {\n  width: 100%;\n  height: 2px;\n  background: #000000;\n  margin-top: 1%;\n  margin-bottom: 1%\n}\n\n.no-pad {\n  padding: 0;\n}\n\n.t {\n  background: transparent;\n}\n\np {\n  margin-bottom: 12px;\n}\n\n/* mat-grid-tile {\n  background: lightblue;\n} */\n\n.progress-container {\n  margin: 10px;\n}\n\n.grid-content {\n  width: calc(100% - 10px);\n  height: calc(100% - 10px);\n}\n\n.small-pad {\n  padding: 20px;\n}\n\n.lock {\n  -webkit-filter: grayscale(100%) opacity(25%);\n          filter: grayscale(100%) opacity(25%);\n}\n\n.spacer {\n  height: 20px;\n}\n\n.spacer2 {\n  margin: 1%;\n}\n\n.profile-name {\n  font-weight: bold;\n  margin-top: 20px;\n  margin-bottom: 0;\n}\n\n.progress {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.glow {\n  border-color: #2e7ef6;\n  box-shadow: 0 0 8px #2e7ef6;\n  overflow: visible;\n}\n\n.container {\n  margin-top: 80px;\n}\n\n.award-descriptor {\n  color: #3a3a3a;\n  margin-top: 10px;\n}\n\n.clickable:hover {\n  border-color: #2e7ef6;\n  box-shadow: 0 0 8px #2e7ef6;\n  overflow: visible;\n  cursor: pointer;\n}\n\n.profile-header {\n  text-align: center;\n  font-weight: 700;\n  color: #A4ABBA;\n}\n\n.award {\n  display: block;\n  margin: auto;\n  margin-bottom: 35px;\n}\n\n.profile-container {\n  margin-top: 0!important;\n  padding: 0!important;\n}\n\n.glow:hover {\n  border-color: #1a498f;\n  box-shadow: 0 0 8px #1a498f;\n  overflow: visible;\n}\n\n.last-week {\n  background: #2e7ef6;\n  height: 20px;\n  overflow: visible;\n}\n\n.this-week {\n  margin-left: 1px;\n  background: #6da3f6;\n  height: 20px;\n  overflow: visible;\n}\n\n.goal {\n  margin-right: 10px;\n  background: transparent;\n  height: 20px;\n  overflow: visible;\n  text-align: right;\n  color: #868b98\n}\n\n.progress-title {\n  margin-top: 40px;\n}\n\n.progress-legend {\n  height: 40px;\n  margin-top: 40px;\n}\n\n.legend-last-week {\n  height: 20px;\n  border-radius: 10px;\n  width: 20px;\n  margin-right: 10px;\n  background-color: #2e7ef6;\n}\n\n.legend-this-week {\n  height: 20px;\n  border-radius: 10px;\n  width: 20px;\n  margin-right: 10px;\n  background-color: #6da3f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXBhZ2UvcHJvZmlsZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZXBhZ2UvcHJvZmlsZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXdyYXBwZXIge1xuICAvKiBwYWRkaW5nLWxlZnQ6IDIwJTsgKi9cbiAgLyogcGFkZGluZy10b3A6IDQ1cHg7ICovXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5iYWRnZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5yb3V0aW5nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZW1vdmUtb3V0bGluZTpmb2N1cywgLnJlbW92ZS1vdXRsaW5lOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmhsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSVcbn1cblxuLm5vLXBhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4vKiBtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufSAqL1xuXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZ3JpZC1jb250ZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuXG4uc21hbGwtcGFkIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmxvY2sge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDI1JSk7XG59XG5cbi5zcGFjZXIge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zcGFjZXIyIHtcbiAgbWFyZ2luOiAxJTtcbn1cblxuLnByb2ZpbGUtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbn1cblxuLmdsb3cge1xuICBib3JkZXItY29sb3I6ICMyZTdlZjY7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggIzJlN2VmNjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG4uYXdhcmQtZGVzY3JpcHRvciB7XG4gIGNvbG9yOiAjM2EzYTNhO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2xpY2thYmxlOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmU3ZWY2O1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICMyZTdlZjY7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9maWxlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNBNEFCQkE7XG59XG5cbi5hd2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbn1cblxuLmdsb3c6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMxYTQ5OGY7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggIzFhNDk4ZjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5sYXN0LXdlZWsge1xuICBiYWNrZ3JvdW5kOiAjMmU3ZWY2O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4udGhpcy13ZWVrIHtcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgYmFja2dyb3VuZDogIzZkYTNmNjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmdvYWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM4NjhiOThcbn1cblxuLnByb2dyZXNzLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnByb2dyZXNzLWxlZ2VuZCB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmxlZ2VuZC1sYXN0LXdlZWsge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTdlZjY7XG59XG5cbi5sZWdlbmQtdGhpcy13ZWVrIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmRhM2Y2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profilepage/profilepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/profilepage/profilepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.3/css/mdb.min.css\"\n  rel=\"stylesheet\"\n  />\n\n<link\n  rel=\"stylesheet\"\n  href=\"https://cdn.jsdelivr.net/npm/plottable@3.7.0/plottable.css\"\n  />\n<div class=\"profile-wrapper\">\n  <mat-grid-list class=\"profile-container\" cols=\"9\" rowHeight=\"50px\">\n\n    <!-- SPACE -->\n    <mat-grid-tile [colspan]=\"9\" [rowspan]=\"1\">\n      <div fxLayout=\"row\" class=\"routing\" fxLayoutAlign=\"start center\">\n        <button mat-button class=\"mask-button remove-outline no-pad\"\n          (click)=\"back()\"><mat-icon>keyboard_arrow_left</mat-icon>Back</button>\n      </div>\n    </mat-grid-tile>\n\n    <!-- PROFILE AVATAR -->\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"7\">\n      <div class=\"grid-content\">\n        <div class=\"d-flex flex-column no-pad justify-content-center\">\n          <div class=\"p-2\" align=\"center\">\n            <img [src]=\"image\" class=\"rounded-circle t\" width=\"300\" />\n            <h5 class=\"card-title m-t-10 text-center profile-name\">{{ name }}</h5>\n          </div>\n          <!--<h6 class=\"card-subtitle text-center\">Age: {{age}}</h6>-->\n        </div>\n      </div>\n    </mat-grid-tile>\n\n    <!-- HISTORY SUMMARY -->\n    <mat-grid-tile [colspan]=\"5\" [rowspan]=\"7\">\n      <div class=\"grid-content\" style=\"margin-left: 30px;margin-right: 30px\">\n        <div class=\"d-flex flex-column no-pad justify-content-center\">\n          <div class=\"p-2 profile-header\" style=\"text-align: left\">\n            WEEKLY SUMMARY\n          </div>\n          <div class=\"p-2\" style=\"text-align: center\">\n            <div style=\"display: inline-block\">\n              <p style=\"text-align: justify; line-height: 1.8em\">\n                <b style=\"color: #A4ABBA\">Strengths:</b> It looks like you did a\n                pretty good job in terms of breaking\n                out of your bubble! You already made very good progress in\n                reaching your monthly goals for reading 100\n                different articles and exploring 4 new sources. Furthermore, it\n                looks like that you are in a balanced\n                state from Tuesday to Friday which is very good. Finally, you\n                earned the speed reader award this week\n                because you read 5 complete articles within 1 hour. Congrats on\n                that!\n              </p>\n              <p style=\"text-align: justify; line-height: 1.8em\">\n                <b style=\"color: #A4ABBA\">Weaknesses:</b> Nonetheless, you may\n                want to spend a little more time reading\n                articles since the month is half over. I addition, the weekly\n                bias below shows that there are a few\n                things you can brush up on. During the weekend and start of the\n                work week is where you tend to focus\n                more on reading from the right. This might be caused by feeling\n                you are reading more for pleasure, as\n                opposed to reading something to stay up to date. Consider this\n                for next week!\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-grid-tile>\n\n    <!-- AWARDS -->\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"19\">\n      <div class=\"grid-content\">\n        <div class=\"d-flex flex-column no-pad justify-content-center\">\n          <div class=\"p-2 profile-header\">\n            AWARDS\n          </div>\n          <div class=\"p-2\">\n            <a data-toggle=\"tooltip\" title=\"Source Detective\" placement='left'>\n              <img (click)=\"buildAwardDialog('Source\n                Detective','assets/bullseye.png',true)\"\n                src=\"assets/bullseye.png\"\n                class=\"rounded-circle t clickable award\"\n                width=\"100px\"\n                height=\"100px\"\n                />\n            </a>\n          </div>\n          <div class=\"p-2\">\n            <a data-toggle=\"tooltip\" title=\"Stay for one week on the first\n              position of the leaderboard!\"\n              placement='left'>\n              <img (click)=\"buildAwardDialog('Weeklong\n                Leader','assets/leader.png',false)\"\n                src=\"assets/leader.png\"\n                class=\"rounded-circle t clickable award lock\"\n                width=\"100px\"\n                height=\"100px\"\n                />\n            </a>\n          </div>\n          <div class=\"p-2\">\n            <a data-toggle=\"tooltip\" title=\"Stay for one week in a mode of\n              complete balance and unbiasedness!\"\n              placement='left'>\n              <img (click)=\"buildAwardDialog('Balance\n                Master','assets/torch.png',false)\"\n                src=\"assets/torch.png\"\n                class=\"rounded-circle t clickable award lock\"\n                width=\"100px\"\n                height=\"100px\"\n                />\n            </a>\n          </div>\n          <div class=\"p-2\">\n            <a data-toggle=\"tooltip\" title=\"Speed Reader\" placement='left'>\n              <img (click)=\"buildAwardDialog('Speed\n                Reader','assets/time.png',true)\"\n                src=\"assets/time.png\"\n                class=\"rounded-circle t clickable award\"\n                width=\"100px\"\n                height=\"100px\"\n                />\n            </a>\n          </div>\n          <div class=\"p-2\">\n            <a data-toggle=\"tooltip\" title=\"Daily User\" placement='left'>\n              <img (click)=\"buildAwardDialog('Daily\n                User','assets/reader.png',true)\"\n                src=\"assets/reader.png\"\n                class=\"rounded-circle t clickable award\"\n                width=\"100px\"\n                height=\"100px\"\n                /></a>\n          </div>\n        </div>\n\n      </div>\n    </mat-grid-tile>\n\n    <!-- SPACE -->\n\n\n    <!-- PROGRESS INFORMATION -->\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"9\">\n      <div class=\"grid-content\" style=\"margin-left: 30px\">\n        <div class=\"d-flex flex-column no-pad justify-content-center\">\n\n          <div>\n            <div class=\"p-2 profile-header\" style=\"text-align: left\">\n              CHANGE PROGRESS\n            </div>\n            <div class=\"p-2\">\n              Monthly Reading Time\n            </div>\n            <div\n              class=\"progress md-progress progress-base\"\n              style=\"width: 100%;height: 20px;overflow:\n              visible;\">\n              <div\n                class=\"progress-bar progress glow progress-highlight last-week\"\n                role=\"progressbar\"\n                style=\"width: 25%;\"aria-valuenow=\"25\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"Last Week\" placement='bottom'>25%</a>\n              </div>\n\n              <div\n                class=\"progress-bar progress glow this-week\"\n                role=\"progressbar\"\n                style=\"width: 10%\"\n                aria-valuenow=\"10\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"This Week\" placement='bottom'>10%</a>\n              </div>\n              <div\n                class=\"progress-bar goal\"\n                role=\"progressbar\"\n                style=\"width: 65%;\"\n                aria-valuenow=\"65\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"Monthly Goal\"\n                  placement='bottom'>500 min. </a>\n              </div>\n            </div>\n            <div class=\"p-2 progress-title\">\n              Monthly Number of Articles\n            </div>\n            <div\n              class=\"progress md-progress progress-base\"\n              style=\"width: 100%;height: 20px;overflow:\n              visible;\">\n              <div\n                class=\"progress-bar progress glow progress-highlight last-week\"\n                role=\"progressbar\"\n                style=\"width: 7%;\"aria-valuenow=\"7\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"Last Week\" placement='bottom'>7%</a>\n              </div>\n\n              <div\n                class=\"progress-bar progress glow this-week\"\n                role=\"progressbar\"\n                style=\"width: 45%\"\n                aria-valuenow=\"45\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"This Week\" placement='bottom'>45%</a>\n              </div>\n              <div\n                class=\"progress-bar goal\"\n                role=\"progressbar\"\n                style=\"width: 48%;\"\n                aria-valuenow=\"48\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"Monthly Goal\"\n                  placement='bottom'>100 articles</a>\n              </div>\n            </div>\n            <div class=\"p-2 progress-title\">\n              Monthly Newly Discovered Sources\n            </div>\n            <div\n              class=\"progress md-progress progress-base\"\n              style=\"width: 100%;height: 20px;overflow:\n              visible;\">\n\n              <div\n                class=\"progress-bar progress glow progress-highlight last-week\"\n                role=\"progressbar\"\n                style=\"width: 25%;\"aria-valuenow=\"25\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"Last Week\" placement='bottom'>25%</a>\n              </div>\n\n              <div\n                class=\"progress-bar progress glow this-week\"\n                role=\"progressbar\"\n                style=\"width: 25%\"\n                aria-valuenow=\"25\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"This Week\" placement='bottom'>25%</a>\n              </div>\n              <div\n                class=\"progress-bar goal\"\n                role=\"progressbar\"\n                style=\"width: 50%;\"\n                aria-valuenow=\"50\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\">\n                <a data-toggle=\"tooltip\" title=\"Monthly Goal\"\n                  placement='bottom'>4 new sources</a>\n              </div>\n            </div>\n            <div fxLayout=\"row\" class=\"progress-legend\" fxLayoutAlign=\"start\n              center\">\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n                style=\"margin-right: 40px\">\n                <div class=\"legend-last-week\"></div>\n                Last Week\n              </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <div class=\"legend-this-week\"></div>\n                This Week\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-grid-tile>\n\n    <!-- CHART AREA -->\n    <mat-grid-tile [colspan]=\"5\" [rowspan]=\"9\">\n      <div class=\"grid-content\" style=\"margin-left: 30px;margin-right: 30px\">\n        <div class=\"p-2 profile-header\" style=\"text-align: left;margin-bottom:\n          5px\">\n          WEEKLY BIAS\n        </div>\n        <chart style=\"width: 100%;height: 90%;\"></chart>\n      </div>\n    </mat-grid-tile>\n\n    <!-- LEADERBOARD -->\n    <mat-grid-tile [colspan]=\"3\" [rowspan]=\"12\">\n      <!-- <div class=\"grid-content\">\n        <div class=\"d-flex flex-column no-pad justify-content-center\">\n          <app-leaderboard></app-leaderboard>\n        </div>\n      </div> -->\n    </mat-grid-tile>\n\n  </mat-grid-list>\n\n</div>\n<script>\n  $(function () {\n    $('[data-toggle=\"tooltip\"]').tooltip();\n  });\n</script>\n"

/***/ }),

/***/ "./src/app/profilepage/profilepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profilepage/profilepage.component.ts ***!
  \******************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users-service */ "./src/app/services/users-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _awarddialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./awarddialog.component */ "./src/app/profilepage/awarddialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent(users, dialog, _location) {
        this.users = users;
        this.dialog = dialog;
        this._location = _location;
        this.name = "Jessie Schmidt";
        this.age = 31;
        this.boints = 5620;
        this.bointsGoal = 50;
        this.bointsToday = 23;
        this.awards = [
            "Speed Reader",
            "Bias Expert",
            "Daily User",
            "Source Detective",
            "Fact Hero"
        ];
        this.image = "assets/jessie.jpg";
        this.data = [0.1, 0.023, -0.09, -0.17, -0.08, 0, 0.2];
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        this.makeChart();
    };
    ProfilepageComponent.prototype.makeChart = function () {
    };
    ProfilepageComponent.prototype.buildAwardDialog = function (award, img, achieved) {
        var dialogRef = this.dialog.open(_awarddialog_component__WEBPACK_IMPORTED_MODULE_4__["AwardDialogComponent"], {
            width: '500px',
            data: { award: award, img: img, achieved: achieved }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ProfilepageComponent.prototype.back = function () {
        this._location.back();
    };
    ProfilepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profilepage",
            template: __webpack_require__(/*! ./profilepage.component.html */ "./src/app/profilepage/profilepage.component.html"),
            styles: [__webpack_require__(/*! ./profilepage.component.css */ "./src/app/profilepage/profilepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "./src/app/search-card/search-card.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-card/search-card.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchBar {\n  height: 42px;\n  background: #f3f3f3;\n  border-radius: 21px;\n  margin-top: 50px;\n}\n\n#searchBar:hover {\n  background: #e5e5e5;\n}\n\ninput {\n  margin-left: 15px;\n  margin-right: 15px;\n  outline: none;\n  border-color: transparent;\n  background: transparent;\n  border: 0;\n  border-bottom-color: transparent;\n  box-shadow: transparent;\n}\n\nbutton {\n  border-top-right-radius: 21px;\n  border-bottom-right-radius: 21px;\n  margin: 0;\n  height: 42px;\n}\n\nform {\n  padding: 0;\n  border: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  height: 42px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWNhcmQvc2VhcmNoLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdDQUFnQztFQUNoQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7RUFDVCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLWNhcmQvc2VhcmNoLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hCYXIge1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbiNzZWFyY2hCYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIxcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMXB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNDJweDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search-card/search-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-card/search-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"searchBar\" size=\"40\">\n  <input\n    id=\"search-bar-input\"\n    type=\"text\"\n    size=\"36\"\n    autocomplete=\"off\"\n    placeholder=\"Search for Topics\"\n    />\n  <button\n    id=\"search-button\"\n    class=\"btn btn-elegant btn-rounded btn-sm my-0\"\n    size=\"4\"\n    type=\"button\"\n    (click)=\"searchTopic()\">\n    <i class=\"material-icons\">search</i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/search-card/search-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-card/search-card.component.ts ***!
  \******************************************************/
/*! exports provided: SearchCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCardComponent", function() { return SearchCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/newsapi-service */ "./src/app/services/newsapi-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchCardComponent = /** @class */ (function () {
    function SearchCardComponent(router, newsapi) {
        this.router = router;
        this.newsapi = newsapi;
        this.s = "";
    }
    SearchCardComponent.prototype.ngOnInit = function () {
        var input = document.getElementById("search-bar-input");
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("search-button").click();
            }
        });
    };
    SearchCardComponent.prototype.searchTopic = function () {
        var search = document.getElementById("search-bar-input").value;
        this.router.navigate(['/', 'newspage'], { queryParams: { search: search } });
    };
    SearchCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search-card',
            template: __webpack_require__(/*! ./search-card.component.html */ "./src/app/search-card/search-card.component.html"),
            styles: [__webpack_require__(/*! ./search-card.component.css */ "./src/app/search-card/search-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]])
    ], SearchCardComponent);
    return SearchCardComponent;
}());



/***/ }),

/***/ "./src/app/services/newsapi-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/newsapi-service.ts ***!
  \*********************************************/
/*! exports provided: NewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsApiService", function() { return NewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);




var NewsApiService = /** @class */ (function () {
    function NewsApiService(http) {
        this.http = http;
        this.api_key = '488fbf928009426ebd6abd22e4fb3fca';
        // hideNavbar: boolean = false;
        this.showNavbar = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.showDrawer = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.mask = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](true);
    }
    NewsApiService.prototype.setMask = function (value) {
        this.mask.next(value);
    };
    NewsApiService.prototype.openDrawer = function () {
        this.showDrawer.next(true);
    };
    NewsApiService.prototype.closeDrawer = function () {
        this.showDrawer.next(false);
    };
    NewsApiService.prototype.hideHeader = function () {
        this.showNavbar.next(true);
    };
    NewsApiService.prototype.showHeader = function () {
        this.showNavbar.next(true);
    };
    NewsApiService.prototype.initSources = function () {
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.initArticles = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getArticlesByID = function (source) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getHeadlinesInWorld = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?' + 'apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getHeadlinesInUS = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us' + '&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getArticleBySource = function (source) {
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=" + source + "&apiKey=" + this.api_key);
    };
    NewsApiService.prototype.getArticleByCountry = function (country) {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getArticleByQuery = function (query) {
        return this.http.get('https://newsapi.org/v2/everything?q=' + query + '&apiKey=' + this.api_key);
    };
    NewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NewsApiService);
    return NewsApiService;
}());



/***/ }),

/***/ "./src/app/services/summarizer.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/summarizer.service.ts ***!
  \************************************************/
/*! exports provided: SummarizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummarizerService", function() { return SummarizerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SummarizerService = /** @class */ (function () {
    function SummarizerService(http) {
        this.http = http;
        this.api_key = '7791b12e-4853-468a-a389-c14813c72868';
    }
    SummarizerService.prototype.getSummary = function (url) {
        return this.http.get("https://api.intellexer.com/summarize?apikey=" + this.api_key + "&conceptsRestriction=10&&returnedTopicsCount=2&summaryRestriction=30&textStreamLength=2000&url=" + url);
    };
    SummarizerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SummarizerService);
    return SummarizerService;
}());



/***/ }),

/***/ "./src/app/services/users-service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users-service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var userData = {
    "Users": [
        {
            "Name": "Jessie Schmidt",
            "Age": 31,
            "Boints": 5620,
            "BointsGoal": 50,
            "BointsToday": 23,
            "Ranking": 1,
            "Awards": [
                "Speed Reader",
                "Bias Expert",
                "Daily User",
                "Source Detective",
                "Fact Hero"
            ],
            "Image": "assets/jessie.jpg",
            "History": [
                {
                    "Bias": 0.1,
                    "Day": "Sunday"
                },
                {
                    "Bias": 0.023,
                    "Day": "Saturday"
                },
                {
                    "Bias": -0.09,
                    "Day": "Friday"
                },
                {
                    "Bias": -0.17,
                    "Day": "Thursday"
                },
                {
                    "Bias": -0.08,
                    "Day": "Wednesday"
                },
                {
                    "Bias": 0,
                    "Day": "Tuesday"
                },
                {
                    "Bias": 0.2,
                    "Day": "Monday"
                }
            ]
        },
        {
            "Name": "Subrat Franzen",
            "Age": 24,
            "Boints": 2773,
            "BointsGoal": 35,
            "BointsToday": 17,
            "Ranking": 6,
            "Awards": [
                "Weekley User",
                "Speed Reader",
                "Sports Lover"
            ],
            "Image": "assets/subrat.jpg",
            "History": [
                {
                    "Bias": 0.3,
                    "Day": "Sunday"
                },
                {
                    "Bias": 0.45,
                    "Day": "Saturday"
                },
                {
                    "Bias": 0.27,
                    "Day": "Friday"
                },
                {
                    "Bias": 0.17,
                    "Day": "Thursday"
                },
                {
                    "Bias": 0.35,
                    "Day": "Wednesday"
                },
                {
                    "Bias": -0.7,
                    "Day": "Tuesday"
                },
                {
                    "Bias": -0.2,
                    "Day": "Monday"
                }
            ]
        },
        {
            "Name": "Jordan Hammond",
            "Age": 27,
            "Boints": 624,
            "BointsGoal": 10,
            "BointsToday": 7,
            "Ranking": 25,
            "Awards": [
                "Monthly User",
                "Bias Novice"
            ],
            "Image": "assets/jordan.jpg",
            "History": [
                {
                    "Bias": 0.85,
                    "Day": "Sunday"
                },
                {
                    "Bias": -0.5,
                    "Day": "Saturday"
                },
                {
                    "Bias": -0.55,
                    "Day": "Friday"
                },
                {
                    "Bias": 0.65,
                    "Day": "Thursday"
                },
                {
                    "Bias": -0.47,
                    "Day": "Wednesday"
                },
                {
                    "Bias": -0.5,
                    "Day": "Tuesday"
                },
                {
                    "Bias": 0.66,
                    "Day": "Monday"
                }
            ]
        }
    ]
};
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.Users = [];
        this.updateUser = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.currentUser); // {1} FALSE == HIDING
        this.userChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userChange.subscribe(function (value) {
            _this.currentUser = value;
        });
        this.loadUsers();
    }
    UserService.prototype.loadUsers = function () {
        for (var ind in userData['Users']) {
            this.Users.push(userData['Users'][ind]);
        }
        this.setUser(0);
    };
    UserService.prototype.setUser = function (index) {
        var s = this.Users[index];
        this.userChange.next(s);
    };
    UserService.prototype.getFirstUser = function () {
        return userData.Users[0];
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/summarydialog/summarydialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/summarydialog/summarydialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-image {\n    max-height: 190px;\n    max-width: 250px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-bottom-left-radius: 0.25rem;\n    border-top-left-radius: 0.25rem;\n}\n\n.summary {\n    text-align: center;\n    font-weight: 800;\n    color: #A4ABBA;\n    width: 100%;\n    \n}\n\n.scrollable {\n    overflow-y: scroll;\n}\n\n.but{\n    width:20%;\n    margin-left:40%;\n    margin-top:10px;\n}\n\n.clickable{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeWRpYWxvZy9zdW1tYXJ5ZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeWRpYWxvZy9zdW1tYXJ5ZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1pbWFnZSB7XG4gICAgbWF4LWhlaWdodDogMTkwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5zdW1tYXJ5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogI0E0QUJCQTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbn1cblxuLnNjcm9sbGFibGUge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmJ1dHtcbiAgICB3aWR0aDoyMCU7XG4gICAgbWFyZ2luLWxlZnQ6NDAlO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuLmNsaWNrYWJsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/summarydialog/summarydialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/summarydialog/summarydialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\"\n  href=\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.1/css/mdb.min.css\"\n  />\n\n<div mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <img\n    src={{data.img}}\n    class=\"news-image\"\n    fxFlex/>\n\n  <h1 mat-dialog-title fxFlex style=\"text-align: center\">{{data.title}}</h1>\n\n  <p class=\"summary\" fxFlex>Summary</p>\n  <div *ngIf=\"loading\">\n    <div class=\"spinner-border text-primary\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n  <div *ngIf=\"!loading\" class=\"scrollable\">\n    <p style=\"text-align: justify\" *ngFor=\"let item of sentences\">\n      {{item}}\n    </p>\n  </div>\n\n</div>\n<div\n  *ngIf=\"!loading\"\n  class=\"but badge badge-pill badge-primary clickable\"\n  (click)=\"onNoClick()\">Close\n</div>"

/***/ }),

/***/ "./src/app/summarydialog/summarydialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/summarydialog/summarydialog.component.ts ***!
  \**********************************************************/
/*! exports provided: SummarydialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummarydialogComponent", function() { return SummarydialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_summarizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/summarizer.service */ "./src/app/services/summarizer.service.ts");




var SummarydialogComponent = /** @class */ (function () {
    function SummarydialogComponent(dialogRef, summarizer, data) {
        this.dialogRef = dialogRef;
        this.summarizer = summarizer;
        this.data = data;
        this.loading = true;
        this.sentences = [];
        this.getSummary(data.url);
    }
    SummarydialogComponent.prototype.ngOnInit = function () {
    };
    SummarydialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SummarydialogComponent.prototype.getSummary = function (url) {
        var _this = this;
        this.summarizer.getSummary(url).subscribe(function (value) { _this.loadItems(value["items"]); }, function (error) { _this.loadTemplate(); });
    };
    SummarydialogComponent.prototype.loadItems = function (items) {
        for (var i in items) {
            if (items[i]["weight"] > 0.5)
                this.sentences.push(items[i]["text"]);
        }
        this.loading = false;
    };
    SummarydialogComponent.prototype.loadTemplate = function () {
        this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.");
        this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.");
        this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.");
        this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.");
        this.loading = false;
    };
    SummarydialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summarydialog',
            template: __webpack_require__(/*! ./summarydialog.component.html */ "./src/app/summarydialog/summarydialog.component.html"),
            styles: [__webpack_require__(/*! ./summarydialog.component.css */ "./src/app/summarydialog/summarydialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_summarizer_service__WEBPACK_IMPORTED_MODULE_3__["SummarizerService"], Object])
    ], SummarydialogComponent);
    return SummarydialogComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jackrichard/Documents/Northwestern/Winter Quarter/EECS330/Project/JustNews/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map