(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-package-edit-package-module"],{

/***/ "./src/app/models/EditPackage.ts":
/*!***************************************!*\
  !*** ./src/app/models/EditPackage.ts ***!
  \***************************************/
/*! exports provided: EditPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPackage", function() { return EditPackage; });
var EditPackage = /** @class */ (function () {
    function EditPackage() {
        this.isPickUpscan = true;
        this.isOutforDelivery = true;
        this.isDelivered = true;
        this.isNofinaldeliveredstatus = true;
        this.isDamaged = true;
        this.isWeatherDelay = true;
    }
    return EditPackage;
}());



/***/ }),

/***/ "./src/app/pages/edit-package/edit-package.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-package/edit-package.module.ts ***!
  \***********************************************************/
/*! exports provided: EditPackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPackagePageModule", function() { return EditPackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-package.page */ "./src/app/pages/edit-package/edit-package.page.ts");







var routes = [
    {
        path: '',
        component: _edit_package_page__WEBPACK_IMPORTED_MODULE_6__["EditPackagePage"]
    }
];
var EditPackagePageModule = /** @class */ (function () {
    function EditPackagePageModule() {
    }
    EditPackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_package_page__WEBPACK_IMPORTED_MODULE_6__["EditPackagePage"]]
        })
    ], EditPackagePageModule);
    return EditPackagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/edit-package/edit-package.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-package/edit-package.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar color=\"tertiary\">\n     <ion-buttons slot=\"start\">\n       <ion-button (click)=\"goBack()\">\n           <ion-icon slot=\"icon-only\" ios=\"ios-arrow-back\"  md=\"md-arrow-back\"></ion-icon>\n         </ion-button>\n         \n     </ion-buttons>\n     <ion-buttons slot=\"end\">\n         <ion-button (click)=\"refreshPackage()\">\n             <ion-icon  name=\"refresh\"></ion-icon>\n           </ion-button>\n         </ion-buttons>\n     <ion-title>Edit Package</ion-title>\n   </ion-toolbar>\n </ion-header>\n <ion-content>\n    <form *ngIf=\"edit_package_Form\" [formGroup]=\"edit_package_Form\" (submit)=\"editPackageDetails(edit_package_Form.value)\">\n         <ion-card>\n           <ion-item-divider >Package Information</ion-item-divider>\n            <ion-card-content>\n             <ion-grid>\n                  <ion-row class=\"ionrow\"><ion-col size=\"4\" class=\"margincol\">Tracking#</ion-col><ion-col size=\"8\">{{TrackingNo}}</ion-col></ion-row>\n                  <ion-row class=\"ionrow\"><ion-col size=\"4\" class=\"margincol\">Carrier</ion-col><ion-col size=\"8\">{{Carrier}}</ion-col></ion-row>\n             </ion-grid>\n           </ion-card-content>\n         </ion-card>\n      <ion-card><ion-item-divider color=\"tertiary\">Other Settings</ion-item-divider>\n         <ion-card-content>\n    <ion-grid>\n      <ion-row><ion-col><ion-checkbox color=\"tertiary\" formControlName=\"chkPS\"></ion-checkbox>  Pick Up type scan</ion-col></ion-row>\n      <ion-row><ion-col><ion-checkbox color=\"tertiary\" formControlName=\"chkOD\"></ion-checkbox>  Out for Delivery</ion-col></ion-row>\n      <ion-row><ion-col><ion-checkbox color=\"tertiary\" formControlName=\"chkDL\"></ion-checkbox>  Delivered(includes lcoation)</ion-col></ion-row>\n      <ion-row><ion-col><ion-checkbox color=\"tertiary\" formControlName=\"chkNF\"></ion-checkbox>  No Final Delivery Status</ion-col></ion-row>\n      <ion-row><ion-col><ion-checkbox color=\"tertiary\" formControlName=\"chkDM\"></ion-checkbox>  Damages</ion-col></ion-row>\n      <ion-row><ion-col><ion-checkbox color=\"tertiary\" formControlName=\"chkWD\"></ion-checkbox>  Weather Delay</ion-col></ion-row>\n  </ion-grid>\n</ion-card-content>\n</ion-card>\n  <ion-button class=\"submit-btn\" color=\"tertiary\"  type=\"submit\" expand=\"block\" [disabled]=\"!edit_package_Form.valid\">Save</ion-button>\n </form>\n \n </ion-content>"

/***/ }),

/***/ "./src/app/pages/edit-package/edit-package.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-package/edit-package.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-block: 2px dotted;\n  border-block-color: #2d2e2e; }\n\nion-card-content {\n  padding: 7px 0px 0px 0px;\n  background-color: #f8e8ff; }\n\nion-card-content ion-col {\n    font-family: Verdana;\n    font-size: 12px;\n    color: #9906d8;\n    padding: 0px;\n    line-height: 27px; }\n\nion-item-divider {\n  background-color: #cf5fff;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #ffffff; }\n\nion-toggle {\n  padding-left: 65px; }\n\n.margincol {\n  margin: auto;\n  height: 25px !important; }\n\n.ionrow {\n  height: 25px !important; }\n\nion-checkbox {\n  float: left;\n  margin: 2px 6px 6px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wYWNrYWdlL0Q6XFxDb2RlXFxFYXN5VHJhY2tBbmRyb2lkXFxJb25pY1xcQ29kZVxcRWFzeVRyYWNrX0FuZHJvaWQvc3JjXFxhcHBcXHBhZ2VzXFxlZGl0LXBhY2thZ2VcXGVkaXQtcGFja2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUyx3QkFBd0I7RUFBRSwyQkFBMEIsRUFBQTs7QUFDN0Q7RUFBaUIsd0JBQXdCO0VBQUMseUJBQXlCLEVBQUE7O0FBQW5FO0lBRUksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixjQUFjO0lBRWQsWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFbEI7RUFBVyxrQkFBa0IsRUFBQTs7QUFDN0I7RUFBVyxZQUFZO0VBQUMsdUJBQXVCLEVBQUE7O0FBQy9DO0VBQVEsdUJBQXVCLEVBQUE7O0FBQy9CO0VBQ0ksV0FBVztFQUNYLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wYWNrYWdlL2VkaXQtcGFja2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtib3JkZXItYmxvY2s6IDJweCBkb3R0ZWQ7IGJvcmRlci1ibG9jay1jb2xvcjojMmQyZTJlfVxuaW9uLWNhcmQtY29udGVudHtwYWRkaW5nOiA3cHggMHB4IDBweCAwcHg7YmFja2dyb3VuZC1jb2xvcjogI2Y4ZThmZjtcbiBpb24tY29seyAgICBcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5OTA2ZDg7XG4gICAgLy9mb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbn1cbn1cbmlvbi1pdGVtLWRpdmlkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNWZmZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi10b2dnbGV7cGFkZGluZy1sZWZ0OiA2NXB4O31cbi5tYXJnaW5jb2x7bWFyZ2luOiBhdXRvO2hlaWdodDoyNXB4ICFpbXBvcnRhbnQgO31cbi5pb25yb3d7aGVpZ2h0OjI1cHggIWltcG9ydGFudCA7fVxuaW9uLWNoZWNrYm94e1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMnB4IDZweCA2cHggMDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/edit-package/edit-package.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-package/edit-package.page.ts ***!
  \*********************************************************/
/*! exports provided: EditPackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPackagePage", function() { return EditPackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/tracking.service */ "./src/services/tracking.service.ts");
/* harmony import */ var src_app_models_EditPackage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/EditPackage */ "./src/app/models/EditPackage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var src_app_providers_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/helper.service */ "./src/app/providers/helper.service.ts");










var EditPackagePage = /** @class */ (function () {
    function EditPackagePage(route, formBuilder, storage, navCtrl, trackingService, loadService, helpService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.trackingService = trackingService;
        this.loadService = loadService;
        this.helpService = helpService;
    }
    EditPackagePage.prototype.ngOnInit = function () {
    };
    EditPackagePage.prototype.ionViewWillEnter = function () {
        this.loadService.present('Loading data');
        this.trackNo = this.route.snapshot.paramMap.get('any');
        var record = this.trackNo.split('-');
        if (record.length === 2) {
            this.TrackingNo = record[0];
            this.Carrier = this.helpService.GetCarrierName(record[1]);
        }
        else {
            this.loadService.presentToast('error', 'Invalid Packages to Edit.');
            this.goBack();
        }
        this.fillForm();
    };
    EditPackagePage.prototype.editPackageDetails = function (value) {
        var _this = this;
        try {
            this.loadService.present('Updating Package.');
            var packgeDetails_1 = new src_app_models_EditPackage__WEBPACK_IMPORTED_MODULE_5__["EditPackage"]();
            var id = localStorage.getItem("deviceID");
            if (id !== 'null' && id !== null && id !== undefined && id !== '') {
                packgeDetails_1.deviceId = id;
                packgeDetails_1.TrackingNo = this.TrackingNo;
                packgeDetails_1.isDelivered = value.chkDL;
                packgeDetails_1.isDamaged = value.chkDM;
                packgeDetails_1.isNofinaldeliveredstatus = value.chkNF;
                packgeDetails_1.isOutforDelivery = value.chkOD;
                packgeDetails_1.isPickUpscan = value.chkPS;
                packgeDetails_1.isWeatherDelay = value.chkWD;
                this.trackingService.editPackageDetails(packgeDetails_1).subscribe(function (data) {
                    // tslint:disable-next-line: no-debugger
                    if (data.Error === true) {
                        _this.loadService.dismiss();
                        _this.trackingService.logError(JSON.stringify(data.Message), 'editPackageDetails');
                        _this.loadService.presentToast('Error', data.Message);
                        return;
                    }
                    // Tracking Response
                    _this.storage.get('_editPackages').then(function (tData) {
                        if (tData == null) {
                            tData = [];
                        }
                        // tslint:disable-next-line: max-line-length
                        var index = tData.findIndex(function (item) { return item.TrackingNo === _this.trackNo; });
                        if (index >= 0) {
                            tData.splice(index, 1);
                        }
                        var record = packgeDetails_1;
                        record.TrackingNo = _this.trackNo;
                        tData.push(record);
                        _this.storage.set('_editPackages', tData);
                        _this.loadService.presentToast('Info', 'Package updated successfully');
                        _this.loadService.dismiss();
                    });
                }, function (error) {
                    _this.trackingService.logError(JSON.stringify(error), 'editPackageDetails');
                    _this.loadService.presentToast('Error', 'Something went wrong with API!');
                    _this.loadService.dismiss();
                });
            }
            else {
                this.loadService.presentToast('Error', 'No device Id found.');
                return;
            }
        }
        catch (Exception) {
            this.trackingService.logError(JSON.stringify(Exception), 'editPackageDetails');
            this.loadService.presentToast('Error', 'Something went wrong!');
            this.loadService.dismiss();
        }
    };
    EditPackagePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EditPackagePage.prototype.refreshPackage = function () {
        this.loadService.present('Reloading...');
        this.fillForm();
    };
    EditPackagePage.prototype.fillForm = function () {
        var _this = this;
        this.storage.get('_editPackages').then(function (result) {
            var editpack;
            if (result === null || result === undefined) {
                editpack = new src_app_models_EditPackage__WEBPACK_IMPORTED_MODULE_5__["EditPackage"]();
            }
            else {
                editpack = result.find(function (item) { return item.TrackingNo === _this.trackNo; });
                if (editpack === null || editpack === undefined) {
                    editpack = new src_app_models_EditPackage__WEBPACK_IMPORTED_MODULE_5__["EditPackage"]();
                }
            }
            _this.edit_package_Form = _this.formBuilder.group({
                chkPS: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](editpack.isPickUpscan),
                chkOD: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](editpack.isOutforDelivery),
                chkDL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](editpack.isDelivered),
                chkNF: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](editpack.isNofinaldeliveredstatus),
                chkDM: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](editpack.isDamaged),
                chkWD: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](editpack.isWeatherDelay)
            });
            // tslint:disable-next-line: align
            _this.loadService.dismiss();
        });
    };
    EditPackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-package',
            template: __webpack_require__(/*! ./edit-package.page.html */ "./src/app/pages/edit-package/edit-package.page.html"),
            styles: [__webpack_require__(/*! ./edit-package.page.scss */ "./src/app/pages/edit-package/edit-package.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _services_tracking_service__WEBPACK_IMPORTED_MODULE_4__["TrackingService"], src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"], src_app_providers_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"]])
    ], EditPackagePage);
    return EditPackagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-package-edit-package-module.js.map