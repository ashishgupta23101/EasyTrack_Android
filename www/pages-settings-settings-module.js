(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./src/app/models/configuration.ts":
/*!*****************************************!*\
  !*** ./src/app/models/configuration.ts ***!
  \*****************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.days = 30;
        this.pickUpscan = true;
        this.outforDelivery = true;
        this.delivered = true;
        this.nofinaldeliveredstatus = true;
        this.isDamaged = 1;
        this.isWeatherDelay = 1;
    }
    return Configuration;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n      <ion-button (click)=\"fillForm()\">\n          <ion-icon  name=\"refresh\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Settings</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <form *ngIf=\"setting_Form\" [formGroup]=\"setting_Form\" (submit)=\"saveSettings(setting_Form.value)\">\n      <ion-card><ion-item-divider color=\"tertiary\">Set Notification Options</ion-item-divider>\n          <ion-card-content>\n            \n              <ion-grid>\n                  <ion-row><ion-col><ion-checkbox  color=\"tertiary\" formControlName=\"PickUp\"></ion-checkbox>  Pick Up type scan</ion-col></ion-row>\n                  <ion-row><ion-col><ion-checkbox  color=\"tertiary\" formControlName=\"OutforDelivery\"></ion-checkbox>  Out for Delivery</ion-col></ion-row>\n                  <ion-row><ion-col><ion-checkbox  color=\"tertiary\" formControlName=\"Delivered\"></ion-checkbox>  Delivered(includes lcoation)</ion-col></ion-row>\n                  <ion-row><ion-col><ion-checkbox  color=\"tertiary\" formControlName=\"NFDeliveryStaus\"></ion-checkbox>  No Final Delivery Status</ion-col></ion-row>\n                  <ion-row><ion-col><ion-checkbox  color=\"tertiary\" formControlName=\"Damages\"></ion-checkbox>  Damages</ion-col></ion-row>\n                  <ion-row><ion-col><ion-checkbox  color=\"tertiary\" formControlName=\"Weather\"></ion-checkbox>  Weather Delay</ion-col></ion-row>\n              </ion-grid>\n          \n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-item-divider >Other Settings</ion-item-divider>\n            <ion-card-content>\n        <ion-grid #otherSettings >\n            <ion-row><ion-col class=\"margincol\">Auto Archive(Days)</ion-col><ion-col><ion-input type=\"number\" formControlName=\"archiveDays\"></ion-input></ion-col></ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n      <ion-button class=\"submit-btn\" color=\"tertiary\"  type=\"submit\" expand=\"block\" [disabled]=\"!setting_Form.valid\">Save</ion-button>\n    </form>\n\n  </ion-content>\n  <!--<ion-footer>\n    <app-footertab></app-footertab>\n    </ion-footer>-->"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-block: 2px dotted;\n  border-block-color: #2d2e2e; }\n\nion-card-content {\n  padding: 7px 0px 0px 0px;\n  background-color: #f8e8ff; }\n\nion-card-content ion-col {\n    font-family: Verdana;\n    font-size: 12px;\n    color: #9906d8;\n    padding: 0px;\n    line-height: 27px; }\n\nion-item-divider {\n  background-color: #cf5fff;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #ffffff; }\n\nion-toggle {\n  padding-left: 65px; }\n\n.margincol {\n  margin: auto; }\n\nion-checkbox {\n  float: left;\n  margin: 2px 6px 6px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRDpcXENvZGVcXGlPUyBBcHBcXFZhaWJoYXZcXEFuZHJvaWRcXENvZGUvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVMsd0JBQXdCO0VBQUUsMkJBQTBCLEVBQUE7O0FBQzdEO0VBQWlCLHdCQUF3QjtFQUFDLHlCQUF5QixFQUFBOztBQUFuRTtJQUVJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsY0FBYztJQUVkLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWxCO0VBQVcsa0JBQWtCLEVBQUE7O0FBQzdCO0VBQVcsWUFBWSxFQUFBOztBQUN2QjtFQUNJLFdBQVc7RUFDWCxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmR7Ym9yZGVyLWJsb2NrOiAycHggZG90dGVkOyBib3JkZXItYmxvY2stY29sb3I6IzJkMmUyZX1cbmlvbi1jYXJkLWNvbnRlbnR7cGFkZGluZzogN3B4IDBweCAwcHggMHB4O2JhY2tncm91bmQtY29sb3I6ICNmOGU4ZmY7XG4gaW9uLWNvbHsgICAgXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjOTkwNmQ4O1xuICAgIC8vZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG59XG5pb24taXRlbS1kaXZpZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjVmZmY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5pb24tdG9nZ2xle3BhZGRpbmctbGVmdDogNjVweDt9XG4ubWFyZ2luY29se21hcmdpbjogYXV0bzt9XG5pb24tY2hlY2tib3h7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAycHggNnB4IDZweCAwO1xuICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var src_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/tracking.service */ "./src/services/tracking.service.ts");
/* harmony import */ var src_app_models_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/configuration */ "./src/app/models/configuration.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var SettingsPage = /** @class */ (function () {
    function SettingsPage(trackService, router, storage, formBuilder, loadingController) {
        this.trackService = trackService;
        this.router = router;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.fillForm();
    };
    SettingsPage.prototype.saveSettings = function (value) {
        var _this = this;
        try {
            this.loadingController.present('Saving Configuration.');
            var _config_1 = new src_app_models_configuration__WEBPACK_IMPORTED_MODULE_6__["Configuration"]();
            var id = localStorage.getItem("deviceID");
            if (id !== 'null' && id !== null && id !== undefined && id !== '') {
                _config_1.deviceid = id;
                _config_1.days = value.archiveDays;
                _config_1.delivered = value.Delivered;
                _config_1.pickUpscan = value.PickUp;
                _config_1.outforDelivery = value.OutforDelivery;
                _config_1.nofinaldeliveredstatus = value.NFDeliveryStaus;
                _config_1.isDamaged = value.Damages ? 1 : 0;
                _config_1.isWeatherDelay = value.Weather ? 1 : 0;
                this.trackService.saveDeviceConfiguration(_config_1).subscribe(function (data) {
                    // tslint:disable-next-line: no-debugger
                    if (data.Error === true) {
                        _this.loadingController.dismiss();
                        _this.trackService.logError(JSON.stringify(data.Message), 'saveSettings');
                        _this.loadingController.presentToast('Error', data.Message);
                        return;
                    }
                    // Tracking Response
                    _this.storage.set('_deviceConfig', _config_1);
                    _this.loadingController.presentToast('Info', 'Settings saved successfully');
                    _this.loadingController.dismiss();
                }, function (error) {
                    _this.trackService.logError(JSON.stringify(error), 'saveSettings');
                    _this.loadingController.presentToast('Error', 'Something went wrong in API request');
                    _this.loadingController.dismiss();
                });
            }
            else {
                this.loadingController.presentToast('Error', 'No device id found.');
                this.loadingController.dismiss();
            }
        }
        catch (Exception) {
            this.trackService.logError(JSON.stringify(Exception), 'saveSettings');
            this.loadingController.presentToast('Error', 'Something went wrong!');
            this.loadingController.dismiss();
        }
    };
    SettingsPage.prototype.refresh = function (config) {
        if (config === void 0) { config = new src_app_models_configuration__WEBPACK_IMPORTED_MODULE_6__["Configuration"](); }
        this.setting_Form = this.formBuilder.group({
            PickUp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](config.pickUpscan),
            OutforDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](config.outforDelivery),
            Delivered: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](config.delivered),
            NFDeliveryStaus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](config.nofinaldeliveredstatus),
            Damages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](config.isDamaged === 1 ? true : false),
            Weather: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](config.isWeatherDelay === 1 ? true : false),
            archiveDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](config.days)
        });
    };
    SettingsPage.prototype.fillForm = function () {
        var _this = this;
        this.storage.get('_deviceConfig').then(function (result) {
            var config = new src_app_models_configuration__WEBPACK_IMPORTED_MODULE_6__["Configuration"]();
            if (result !== null && result !== undefined) {
                config = result;
            }
            _this.refresh(config);
        });
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__["TrackingService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map