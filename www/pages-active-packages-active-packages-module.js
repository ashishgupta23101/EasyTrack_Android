(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-active-packages-active-packages-module"],{

/***/ "./src/app/pages/active-packages/active-packages.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/active-packages/active-packages.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActivePackagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePackagesPageModule", function() { return ActivePackagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _active_packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./active-packages.page */ "./src/app/pages/active-packages/active-packages.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");
/* harmony import */ var src_app_pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipe/order-by.pipe */ "./src/app/pipe/order-by.pipe.ts");









var routes = [
    {
        path: '',
        component: _active_packages_page__WEBPACK_IMPORTED_MODULE_6__["ActivePackagesPage"]
    }
];
var ActivePackagesPageModule = /** @class */ (function () {
    function ActivePackagesPageModule() {
    }
    ActivePackagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_active_packages_page__WEBPACK_IMPORTED_MODULE_6__["ActivePackagesPage"], src_app_pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderByPipe"]]
        })
    ], ActivePackagesPageModule);
    return ActivePackagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/active-packages/active-packages.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/active-packages/active-packages.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n    <ion-button (click)=\"refreshList()\">\n        <ion-icon name=\"help-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-searchbar placeholder=\"Search\"\n    [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"searchPackages()\"\n  ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-list>\n      <ion-segment *ngIf=\"sessionData\" color=\"medium\" scrollable=\"true\" [(ngModel)]=\"daySelect\" (ionChange)=\"segmentChanged()\">\n          <ion-segment-button value=\"All\"><p>All</p><ion-badge color=\"danger\" *ngIf=\"sessionData.packages.All.length > 0\" >{{sessionData.packages.All.length}}</ion-badge></ion-segment-button>\n          <ion-segment-button value=\"Today\"><p>Today</p><ion-badge color=\"danger\" *ngIf=\"sessionData.packages.Today.length > 0\" >{{sessionData.packages.Today.length}}</ion-badge></ion-segment-button>\n          <ion-segment-button value=\"Yesterday\"><p>Yesterday</p><ion-badge color=\"danger\" *ngIf=\"sessionData.packages.Yesterday.length > 0\" >{{sessionData.packages.Yesterday.length}}</ion-badge></ion-segment-button>\n          <ion-segment-button value=\"ThisWeek\"><p>This week</p><ion-badge color=\"danger\" *ngIf=\"sessionData.packages.ThisWeek.length > 0\" >{{sessionData.packages.ThisWeek.length}}</ion-badge></ion-segment-button>\n          <ion-segment-button value=\"LastWeek\"><p>Last week</p><ion-badge color=\"danger\" *ngIf=\"sessionData.packages.LastWeek.length > 0\" >{{sessionData.packages.LastWeek.length}}</ion-badge></ion-segment-button>\n        </ion-segment>\n      <!-- <ion-list-header>\n          <ion-label>Active Packages</ion-label>\n        </ion-list-header> -->\n        <ion-item-divider>\n          \n<p>\n<ion-select [(ngModel)]=\"sortBy\" (ionChange)=\"sortByDates()\" interface=\"popover\" aria-placeholder=\"Sort By\">\n    <ion-select-option value=\"1\">Date Created</ion-select-option>\n    <ion-select-option value=\"2\">Expected By</ion-select-option>\n    <ion-select-option value=\"3\">Last Updated</ion-select-option>\n    </ion-select></p>\n    \n        <ion-icon style=\"cursor: pointer;padding-bottom: 9px;padding-right: 6px\"  color=\"tertiary\" title=\"Filter by Date\" name=\"calendar\" (click)=\"picker.open()\" slot=\"end\"></ion-icon>\n        <ion-datetime #picker [(ngModel)]=\"dateSelected\" min=\"2010\" max=\"2050\" (ionChange)=\"searchByDate()\" display-format=\"MM/DD/YYYY\"></ion-datetime>\n        <ion-icon  color=\"tertiary\" style=\"cursor: pointer;padding-bottom: 9px;\" title=\"refresh\" name=\"refresh\" (click)=\"this.refreshList(true)\" slot=\"end\"></ion-icon>\n</ion-item-divider>\n          <ion-card *ngIf=\"activeItems.length === 0 && readyToLoad\">\n          <ion-card-content  >\n            <ion-grid><ion-row><ion-col>No Package Available</ion-col></ion-row></ion-grid> \n        </ion-card-content>\n      </ion-card>\n  \n          <ion-item-sliding *ngFor=\"let item of activeItems | orderBy: (sortBy === '1'? 'DateCreated':(sortBy === '2'? 'ExpectedDate':(sortBy === '3'? 'LastUpdated': 'DateCreated'))) \">\n\n          \n              <ion-item (click)=\"showDetail(item.Key)\">\n    \n                  <ion-avatar slot=\"start\">\n                    <img [src]=\"item.ImgUrl\">\n                  </ion-avatar>\n                  <ion-label>\n                      <p style=\"color:black\">Tracking #: <span style=\"color: #8810a9 !important;line-height: 25px;\">{{item.TrackingNo}}</span></p>\n                      <p>Status: {{item.Status}}</p>\n                      <p>{{sortbyDate}}: {{(sortBy === '1'? item.DateCreated:(sortBy === '2'? item.ExpectedDate:(sortBy === '3'? item.LastUpdated:item.DateCreated))) | date:'MM/dd/yyyy'}}</p>\n                      \n                    </ion-label>\n                </ion-item>\n          \n              <ion-item-options side=\"end\">\n                  <ion-item-option color=\"tertiary\" (click)=\"archive(item.Key)\"><ion-icon title=\"Archive\" name=\"archive\"></ion-icon></ion-item-option>\n                  <ion-item-option color=\"tertiary\" (click)=\"MarkasDelievered(item.Key)\"><ion-icon title=\"Mark Delivered\" name=\"checkmark-circle-outline\"></ion-icon></ion-item-option>\n                  <ion-item-option color=\"tertiary\" (click)=\"share()\" ><app-social-sharing [Key]=\"item\"></app-social-sharing></ion-item-option>\n                <ion-item-option color=\"tertiary\" (click)=\"editPackages(item.Key)\"><ion-icon  title=\"Edit\"  name=\"create\"></ion-icon></ion-item-option>\n                <ion-item-option color=\"tertiary\" (click)=\"delete(item.Key)\"><ion-icon title=\"Remove\"  name=\"trash\"></ion-icon></ion-item-option>\n                <ion-item-option color=\"tertiary\" (click)=\"locate(item.Key)\"><ion-icon title=\"Locate\" name=\"locate\"></ion-icon></ion-item-option>\n                <ion-item-option color=\"tertiary\" (click)=\"retrack(item.Key)\"><ion-icon ios=\"ios-repeat\" md=\"md-repeat\"></ion-icon></ion-item-option>\n              </ion-item-options>\n            </ion-item-sliding>\n \n</ion-list>\n<app-help-fab></app-help-fab>\n</ion-content>\n<!-- <ion-footer>\n<app-footertab></app-footertab>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/pages/active-packages/active-packages.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/active-packages/active-packages.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  border-radius: 30px !important; }\n\nion-list {\n  padding-top: 2px !important; }\n\nion-item-divider {\n  height: 35px;\n  padding-top: 3px !important;\n  padding-bottom: 3px !important;\n  padding-left: 3px !important;\n  padding-right: 3px !important;\n  background: #f2e4ff !important; }\n\nion-segment {\n  background: #f2e4ff;\n  padding: 0px 2px 0px 2px; }\n\nion-segment-button {\n  height: 40px !important;\n  color: #9906d8 !important; }\n\nion-segment-button ion-badge {\n    position: absolute;\n    top: -1px;\n    right: 0;\n    opacity: 0.9;\n    font-size: 10px;\n    min-width: 20px;\n    padding: 2px 2px; }\n\na {\n  color: #9906d8 !important; }\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked, .sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked.activated {\n  background: #c15aeccf;\n  color: #ffffff !important; }\n\nion-select {\n  color: #9906d8;\n  font-weight: bolder;\n  font-size: 13px; }\n\nion-card {\n  border-block: 2px dotted;\n  border-block-color: #2d2e2e; }\n\nion-card-content {\n  padding: 0px 0px 0px 0px;\n  background: #ffe4e4 !important; }\n\nion-card-content ion-col {\n    font-family: Verdana;\n    font-size: 12px;\n    color: #8c0606;\n    padding: 2px; }\n\nion-datetime {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZlLXBhY2thZ2VzL0Q6XFxDb2RlXFxpT1MgQXBwXFxWYWliaGF2XFxBbmRyb2lkXFxDb2RlL3NyY1xcYXBwXFxwYWdlc1xcYWN0aXZlLXBhY2thZ2VzXFxhY3RpdmUtcGFja2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsOEJBQThCLEVBQUE7O0FBQzVDO0VBQVMsMkJBQTJCLEVBQUE7O0FBQ3BDO0VBQ0MsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFDRCxFQUFBOztBQUNBO0VBQVksbUJBQW1CO0VBQUUsd0JBQXdCLEVBQUE7O0FBQ3pEO0VBQ0MsdUJBQXVCO0VBQ3ZCLHlCQUF5QixFQUFBOztBQUYxQjtJQUlFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUFFLHlCQUF5QixFQUFBOztBQUMzQjtFQUNJLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDQyxjQUFjO0VBQ1gsbUJBQW1CO0VBQUMsZUFBZSxFQUFBOztBQUN2QztFQUFTLHdCQUF3QjtFQUFFLDJCQUEwQixFQUFBOztBQUM3RDtFQUFpQix3QkFBd0I7RUFBQyw4QkFBOEIsRUFBQTs7QUFBeEU7SUFDUyxvQkFBb0I7SUFBRSxlQUFlO0lBQUUsY0FBYztJQUFDLFlBQVksRUFBQTs7QUFHM0U7RUFBYSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2ZS1wYWNrYWdlcy9hY3RpdmUtcGFja2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhcntib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7fVxuaW9uLWxpc3R7cGFkZGluZy10b3A6IDJweCAhaW1wb3J0YW50O31cbmlvbi1pdGVtLWRpdmlkZXJ7XG5cdGhlaWdodDogMzVweDtcblx0cGFkZGluZy10b3A6IDNweCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctbGVmdDogM3B4ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kOiAjZjJlNGZmICFpbXBvcnRhbnRcbn1cbmlvbi1zZWdtZW50e2JhY2tncm91bmQ6ICNmMmU0ZmY7IHBhZGRpbmc6IDBweCAycHggMHB4IDJweDt9XG5pb24tc2VnbWVudC1idXR0b24ge1xuXHRoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcblx0Y29sb3I6ICM5OTA2ZDggIWltcG9ydGFudDtcblx0aW9uLWJhZGdlIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAtMXB4O1xuXHRcdHJpZ2h0OiAwO1xuXHRcdG9wYWNpdHk6IDAuOTtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0bWluLXdpZHRoOiAyMHB4O1xuXHRcdHBhZGRpbmc6IDJweCAycHg7XG5cdH1cbn1cbmF7Y29sb3I6ICM5OTA2ZDggIWltcG9ydGFudDt9XG4uc2MtaW9uLXNlZ21lbnQtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQsIC5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZC5hY3RpdmF0ZWQge1xuICAgIGJhY2tncm91bmQ6ICNjMTVhZWNjZjtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuaW9uLXNlbGVjdHsgICAgXG5cdGNvbG9yOiAjOTkwNmQ4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7Zm9udC1zaXplOiAxM3B4O31cbmlvbi1jYXJke2JvcmRlci1ibG9jazogMnB4IGRvdHRlZDsgYm9yZGVyLWJsb2NrLWNvbG9yOiMyZDJlMmV9XG5pb24tY2FyZC1jb250ZW50e3BhZGRpbmc6IDBweCAwcHggMHB4IDBweDtiYWNrZ3JvdW5kOiAjZmZlNGU0ICFpbXBvcnRhbnQ7XG5cdGlvbi1jb2x7Zm9udC1mYW1pbHk6IFZlcmRhbmE7IGZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM4YzA2MDY7cGFkZGluZzogMnB4fVxuICAgfVxuXG5pb24tZGF0ZXRpbWV7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O30iXX0= */"

/***/ }),

/***/ "./src/app/pages/active-packages/active-packages.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/active-packages/active-packages.page.ts ***!
  \***************************************************************/
/*! exports provided: ActivePackagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePackagesPage", function() { return ActivePackagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/tracking.service */ "./src/services/tracking.service.ts");
/* harmony import */ var src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/active-packages */ "./src/app/models/active-packages.ts");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/QueryParams */ "./src/app/models/QueryParams.ts");
/* harmony import */ var src_app_components_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/social-sharing/social-sharing.component */ "./src/app/components/social-sharing/social-sharing.component.ts");











var ActivePackagesPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function ActivePackagesPage(trackService, router, loading, alertController, navCtrl, storage) {
        this.trackService = trackService;
        this.router = router;
        this.loading = loading;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.searchTerm = '';
        this.sortbyDate = 'Date Created';
        this.daySelect = 'All';
        this.dateSelected = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'MM/dd/yyyy', 'en');
        this.sortBy = '1';
        this.activeItems = [];
        this.readyToLoad = false;
    }
    ActivePackagesPage.prototype.ngOnInit = function () {
    };
    ActivePackagesPage.prototype.ionViewWillEnter = function () {
        this.loading.present('Loading Records...');
        this.loadPackages();
    };
    ActivePackagesPage.prototype.retrackAll = function () {
        if (this.sessionData !== '' && this.sessionData !== undefined && this.sessionData !== null) {
            this.trackService.refreshTrackingDetails(this.sessionData.packages.All);
        }
    };
    ActivePackagesPage.prototype.searchPackages = function () {
        if (this.searchTerm === '' || this.searchTerm === undefined || this.searchTerm === null) {
            this.refreshList();
        }
        else {
            switch (this.daySelect) {
                case 'All':
                    this.activeItems = this.trackService.filterItems(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.All, this.searchTerm);
                    break;
                case 'Today':
                    this.activeItems = this.trackService.filterItems(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.Today, this.searchTerm);
                    break;
                case 'Yesterday':
                    this.activeItems = this.trackService.filterItems(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.Yesterday, this.searchTerm);
                    break;
                case 'ThisWeek':
                    this.activeItems = this.trackService.filterItems(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.ThisWeek, this.searchTerm);
                    break;
                case 'LastWeek':
                    this.activeItems = this.trackService.filterItems(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.LastWeek, this.searchTerm);
                    break;
                default:
                    this.activeItems = this.trackService.filterItems(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.All, this.searchTerm);
                    break;
            }
        }
    };
    ActivePackagesPage.prototype.loadPackages = function () {
        var _this = this;
        this.storage.get('_activePackages').then(function (value) {
            if (value !== '' && value !== undefined && value !== null) {
                _this.trackService.setPackagestoSession(value);
                _this.sessionData = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"];
                _this.activeItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.All;
                _this.segmentChanged();
                _this.sortByDates();
            }
            _this.readyToLoad = true;
            _this.loading.dismiss();
        });
    };
    ActivePackagesPage.prototype.refreshList = function (showLoader) {
        var _this = this;
        if (showLoader === void 0) { showLoader = false; }
        if (showLoader) {
            this.loading.present('Refreshing...');
        }
        // tslint:disable-next-line: only-arrow-functions
        this.searchTerm = '';
        this.dateSelected = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'MM/dd/yyyy', 'en');
        setTimeout(function () {
            _this.loadPackages();
        }, 800);
    };
    ActivePackagesPage.prototype.segmentChanged = function () {
        switch (this.daySelect) {
            case 'All':
                this.activeItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.All;
                break;
            case 'Today':
                this.activeItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.Today;
                break;
            case 'Yesterday':
                this.activeItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.Yesterday;
                break;
            case 'ThisWeek':
                this.activeItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.ThisWeek;
                break;
            case 'LastWeek':
                this.activeItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.LastWeek;
                break;
            default:
                this.activeItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.All;
                break;
        }
    };
    ActivePackagesPage.prototype.showDetail = function (key) {
        this.navCtrl.navigateForward("/details/" + key);
    };
    ActivePackagesPage.prototype.sortByDates = function () {
        switch (this.sortBy) {
            case '1':
                this.sortbyDate = 'Date Created';
                break;
            case '2':
                this.sortbyDate = 'Expected By';
                break;
            case '3':
                this.sortbyDate = 'Last Updated';
                break;
            default:
                this.sortbyDate = 'Date Created';
                break;
        }
    };
    ActivePackagesPage.prototype.searchByDate = function () {
        if (this.sessionData !== undefined && this.sessionData !== null) {
            this.activeItems = this.trackService.filterDatewise(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.All, this.dateSelected);
        }
    };
    ActivePackagesPage.prototype.archive = function (key) {
        this.presentConfirm(key, 'Archive', 'Do you want to archive the package?', 'arc');
    };
    ActivePackagesPage.prototype.retrack = function (key) {
        this.presentConfirm(key, 'Re-Track', 'Do you want to Re-Track the package?', 'rtrck');
    };
    ActivePackagesPage.prototype.share = function () {
        //this.social.presentActionSheet();
        this.social.presentActionSheet2();
    };
    ActivePackagesPage.prototype.delete = function (key) {
        this.presentConfirm(key, 'Delete', 'Do you want to delete the package?', 'del');
    };
    ActivePackagesPage.prototype.locate = function (key) {
        var _this = this;
        this.storage.get('_activePackages').then(function (aData) {
            var val1 = aData.find(function (item) { return item.trackingNo === key; });
            if (val1 !== undefined && val1 !== '' && val1 !== null && val1.scans.length > 0) {
                var navigationExtras = {
                    queryParams: {
                        scans: JSON.stringify(val1.scans)
                    }
                };
                _this.router.navigate(['show-map'], navigationExtras);
            }
            else {
                _this.loading.presentToast('Warning', 'No Scans to Locate.');
            }
        });
    };
    ActivePackagesPage.prototype.MarkasDelievered = function (key) {
        this.presentConfirm(key, 'Mark as Delivered', 'Do you want to mark the package delivered?', 'masd');
    };
    ActivePackagesPage.prototype.editPackages = function (key) {
        this.navCtrl.navigateForward("/edit-package/" + key);
    };
    // tslint:disable-next-line: variable-name
    ActivePackagesPage.prototype.presentConfirm = function (key, _header, _message, _opration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.alertController.create({
                                header: _header,
                                message: _message,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Ok',
                                        handler: function () {
                                            switch (_opration) {
                                                case 'arc':
                                                    _this.loading.present('Archiving...');
                                                    _this.storage.get('_activePackages').then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
                                                            // tslint:disable-next-line: no-shadowed-variable
                                                            var record_1 = tData.find(function (item) { return item.trackingNo === key.trim(); });
                                                            tData.splice(index, 1);
                                                            _this.storage.set('_activePackages', tData);
                                                            _this.storage.get('_archivePackages').then(function (aData) {
                                                                if (aData == null) {
                                                                    aData = [];
                                                                }
                                                                var index1 = aData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                                if (index1 >= 0) {
                                                                    aData.splice(index1, 1);
                                                                }
                                                                aData.push(record_1);
                                                                _this.storage.set('_archivePackages', aData).then(function () {
                                                                    // this.loading.dismiss();
                                                                    _this.refreshList();
                                                                });
                                                            });
                                                        }
                                                    });
                                                    break;
                                                case 'del':
                                                    _this.loading.present('Deleting...');
                                                    _this.storage.get('_activePackages').then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
                                                            tData.splice(index, 1);
                                                            _this.storage.set('_activePackages', tData).then(function () {
                                                                // this.loading.dismiss();
                                                                _this.refreshList();
                                                            });
                                                        }
                                                    });
                                                    break;
                                                case 'masd':
                                                    _this.loading.present('Processing...');
                                                    _this.storage.get('_activePackages').then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
                                                            var record_2 = tData.find(function (item) { return item.trackingNo === key.trim(); });
                                                            tData.splice(index, 1);
                                                            record_2.Trackingheader.Status = 'Delivered';
                                                            tData.push(record_2);
                                                            _this.storage.set('_activePackages', tData).then(function () {
                                                                // this.loading.dismiss();
                                                                _this.refreshList();
                                                            });
                                                        }
                                                    });
                                                    break;
                                                case 'rtrck':
                                                    var queryParam = new src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_9__["QueryParams"]();
                                                    var record = key.split('-');
                                                    console.log(record);
                                                    if (record.length === 2) {
                                                        queryParam.TrackingNo = record[0];
                                                        queryParam.Carrier = record[1];
                                                        queryParam.Description = '';
                                                        queryParam.Residential = 'false';
                                                        _this.trackService.getTrackingDetails(queryParam);
                                                    }
                                                    else {
                                                        _this.loading.presentToast('error', 'Invalid Packages to retract.');
                                                    }
                                                    break;
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.trackService.logError(error_1, 'presentConfirm-activePackage');
                        this.loading.presentToast('Error', 'Something went wrong!');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_10__["SocialSharingComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_10__["SocialSharingComponent"])
    ], ActivePackagesPage.prototype, "social", void 0);
    ActivePackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-packages',
            template: __webpack_require__(/*! ./active-packages.page.html */ "./src/app/pages/active-packages/active-packages.page.html"),
            styles: [__webpack_require__(/*! ./active-packages.page.scss */ "./src/app/pages/active-packages/active-packages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__["TrackingService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], ActivePackagesPage);
    return ActivePackagesPage;
}());



/***/ }),

/***/ "./src/app/pipe/order-by.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipe/order-by.pipe.ts ***!
  \***************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, propertyName) {
        if (propertyName) {
            return value.sort(function (a, b) { return b[propertyName].localeCompare(a[propertyName]); });
        }
        else {
            return value;
        }
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-active-packages-active-packages-module.js.map