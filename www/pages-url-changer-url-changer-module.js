(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-url-changer-url-changer-module"],{

/***/ "./src/app/pages/url-changer/url-changer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/url-changer/url-changer.module.ts ***!
  \*********************************************************/
/*! exports provided: UrlChangerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlChangerPageModule", function() { return UrlChangerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _url_changer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url-changer.page */ "./src/app/pages/url-changer/url-changer.page.ts");







var routes = [
    {
        path: '',
        component: _url_changer_page__WEBPACK_IMPORTED_MODULE_6__["UrlChangerPage"]
    }
];
var UrlChangerPageModule = /** @class */ (function () {
    function UrlChangerPageModule() {
    }
    UrlChangerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_url_changer_page__WEBPACK_IMPORTED_MODULE_6__["UrlChangerPage"]]
        })
    ], UrlChangerPageModule);
    return UrlChangerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/url-changer/url-changer.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/url-changer/url-changer.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title color=\"light\">Choose API</ion-title>\n  \n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-item>\n      <ion-label position=\"floating\">API Type</ion-label>\n      <ion-select [value]=\"apiType\" [(ngModel)]=\"apiType\" okText=\"Okay\" (ionChange)=\"onTypeChange()\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"P\">Production Api Url</ion-select-option>\n        <ion-select-option value=\"B\">Beta Api Url</ion-select-option>\n        <ion-select-option value=\"C\">Custom Api Url</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"apiUrl\" placeholder=\"Enter API Url\"></ion-input>\n      </ion-item>\n      <ion-button class=\"submit-btn\" color=\"tertiary\"  type=\"submit\" expand=\"block\" (click)=\"saveUrl()\">Save</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/url-changer/url-changer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/url-changer/url-changer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VybC1jaGFuZ2VyL3VybC1jaGFuZ2VyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/url-changer/url-changer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/url-changer/url-changer.page.ts ***!
  \*******************************************************/
/*! exports provided: UrlChangerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlChangerPage", function() { return UrlChangerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/active-packages */ "./src/app/models/active-packages.ts");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var src_services_tracking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/tracking.service */ "./src/services/tracking.service.ts");
/* harmony import */ var src_services_fcm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/fcm.service */ "./src/services/fcm.service.ts");









var UrlChangerPage = /** @class */ (function () {
    function UrlChangerPage(navCtrl, trackService, loadingController, fcm, storage) {
        this.navCtrl = navCtrl;
        this.trackService = trackService;
        this.loadingController = loadingController;
        this.fcm = fcm;
        this.storage = storage;
        this.apiType = '';
        this.apiUrl = '';
        debugger;
        var id = localStorage.getItem("deviceID");
        if (id !== 'null' && id !== null && id !== undefined && id !== '') {
            this.loadingController.presentToast('alert', 'DeviceId - ' + id);
        }
        else {
            this.trackService.GenerateDeviceID();
        }
        var deviceToken = localStorage.getItem("deviceToken");
        if (deviceToken !== 'null' && deviceToken !== null && deviceToken !== undefined && deviceToken !== '') {
            this.loadingController.presentToast('alert', 'DeviceToken - ' + deviceToken);
        }
        else {
            this.fcm.notificationSetup();
        }
        this.apiType = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_5__["SessionData"].apiType;
        this.apiUrl = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_5__["SessionData"].apiURL;
        if (this.apiType === 'P') {
            this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_Url_Prod;
            this.apiType = 'P';
        }
        else if (this.apiType === 'B') {
            this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_Url_Beta;
            this.apiType = 'B';
        }
        else {
            this.apiUrl = this.apiUrl;
            this.apiType = 'C';
        }
        this.trackService.saveToken();
    }
    UrlChangerPage.prototype.onTypeChange = function () {
        if (this.apiType === 'P') {
            this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_Url_Prod;
        }
        else if (this.apiType === 'B') {
            this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_Url_Beta;
        }
        else {
            this.apiUrl = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_5__["SessionData"].apiURL;
        }
    };
    UrlChangerPage.prototype.ngOnInit = function () {
    };
    UrlChangerPage.prototype.saveUrl = function () {
        try {
            if (this.apiUrl === null || this.apiUrl === undefined || this.apiUrl === '') {
                this.loadingController.presentToast('Error', 'Invalid API url');
            }
            else {
                this.storage.set('apiData', {
                    apiURL: this.apiUrl,
                    apiType: this.apiType
                });
                src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_5__["SessionData"].apiURL = this.apiUrl;
                src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_5__["SessionData"].apiType = this.apiType;
                this.trackService.saveToken();
                this.loadingController.presentToast('alert', 'API url successfully updated.');
                this.navCtrl.pop();
            }
        }
        catch (Exception) {
        }
    };
    UrlChangerPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    UrlChangerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-url-changer',
            template: __webpack_require__(/*! ./url-changer.page.html */ "./src/app/pages/url-changer/url-changer.page.html"),
            styles: [__webpack_require__(/*! ./url-changer.page.scss */ "./src/app/pages/url-changer/url-changer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_services_tracking_service__WEBPACK_IMPORTED_MODULE_7__["TrackingService"],
            src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            src_services_fcm_service__WEBPACK_IMPORTED_MODULE_8__["FcmService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], UrlChangerPage);
    return UrlChangerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-url-changer-url-changer-module.js.map