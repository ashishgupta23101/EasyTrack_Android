(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-barcode-scanner-barcode-scanner-module"],{

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.module.ts ***!
  \*****************************************************************/
/*! exports provided: BarcodeScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPageModule", function() { return BarcodeScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-scanner.page */ "./src/app/pages/barcode-scanner/barcode-scanner.page.ts");





//import { ZXingScannerModule } from '@zxing/ngx-scanner';


var routes = [
    {
        path: '',
        component: _barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeScannerPage"]
    }
];
var BarcodeScannerPageModule = /** @class */ (function () {
    function BarcodeScannerPageModule() {
    }
    BarcodeScannerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                //ZXingScannerModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeScannerPage"]]
        })
    ], BarcodeScannerPageModule);
    return BarcodeScannerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"goBack()\">\n              <ion-icon slot=\"icon-only\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n          </ion-button>\n\n      </ion-buttons>\n      <ion-title>Scanner</ion-title>\n      <ion-buttons slot=\"end\">\n\n           <ion-button title=\"clear Map\" (click)=\"toggleTorch()\" *ngIf=\"torchAvailable$ | async\">\n            <ion-icon slot=\"icon-only\"  ios=\"ios-flash\" md=\"md-flash\"></ion-icon>\n          </ion-button>\n\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"availableDevices\">\n    <select (change)=\"onDeviceSelectChange($event.target.value)\">\n      <option value=\"\" [selected]=\"!currentDevice\">No Device</option>\n      <option *ngFor=\"let device of availableDevices\" [value]=\"device.deviceId\" [selected]=\"currentDevice && device.deviceId === currentDevice.deviceId\">{{ device.label }}</option>\n    </select>\n  </ng-container>\n      <zxing-scanner [torch]=\"torchEnabled\" [(device)]=\"currentDevice\"\n      (scanSuccess)=\"onCodeResult($event)\"\n      (scanError)=\"scanError($event)\"\n      [formats]=\"formatsEnabled\" [tryHarder]=\"tryHarder\" (permissionResponse)=\"onHasPermission($event)\"\n      (camerasFound)=\"onCamerasFound($event)\" (torchCompatible)=\"onTorchCompatible($event)\"></zxing-scanner>\n      \n      <ng-container *ngIf=\"hasPermission === undefined\">\n      <ion-card>\n        <ion-card-header>\n          <h2>Waiting for permissions.</h2>\n        </ion-card-header>\n        <ion-card-content>\n          If your device does not has cameras, no permissions will be asked.\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n    <ng-container *ngIf=\"isFailed\">\n      <ion-card>\n        <ion-card-header>\n          <h2>Failed!</h2>\n        </ion-card-header>\n        <ion-card-content>\n          {{errorMsg}}. 😪\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n    <ng-container *ngIf=\"hasPermission === false\">\n      <ion-card>\n        <ion-card-header>\n          <h2>Access Denied to Camera</h2>\n        </ion-card-header>\n        <ion-card-content>\n          You denied the camera permission, we can't scan anything without it. 😪\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n    \n    <ng-container *ngIf=\"hasDevices === undefined\">\n      <ion-card>\n        <ion-card-header>\n          <h2>Couldn't check for devices.</h2>\n        </ion-card-header>\n        <ion-card-content>\n          This may be caused by some security error.\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n    \n    <ng-container *ngIf=\"hasDevices === false\">\n      <ion-card>\n        <ion-card-header>\n          <h2>No devices were found.</h2>\n        </ion-card-header>\n        <ion-card-content>\n          I believe your device has no media devices attached to.\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: black; }\n\nzxing-scanner {\n  background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFyY29kZS1zY2FubmVyL0Q6XFxDb2RlXFxpT1MgQXBwXFxWYWliaGF2XFxBbmRyb2lkXFxDb2RlL3NyY1xcYXBwXFxwYWdlc1xcYmFyY29kZS1zY2FubmVyXFxiYXJjb2RlLXNjYW5uZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsdUJBQXVCLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iYXJjb2RlLXNjYW5uZXIvYmFyY29kZS1zY2FubmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG56eGluZy1zY2FubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/barcode-scanner/barcode-scanner.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/barcode-scanner/barcode-scanner.page.ts ***!
  \***************************************************************/
/*! exports provided: BarcodeScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPage", function() { return BarcodeScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var src_services_tracking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/tracking.service */ "./src/services/tracking.service.ts");




//import { Result } from '@zxing/library';
//import { BarcodeFormat } from '@zxing/library';



var BarcodeScannerPage = /** @class */ (function () {
    function BarcodeScannerPage(route, trackService, navCtrl, loading) {
        this.route = route;
        this.trackService = trackService;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.currentDevice = null;
        this.isFailed = false;
        this.errorMsg = '';
        this.torchEnabled = false;
        this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.tryHarder = false;
        this.loading.present('Waiting for Camera..');
    }
    BarcodeScannerPage.prototype.ngOnInit = function () {
        // this.getLocations();
    };
    BarcodeScannerPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BarcodeScannerPage.prototype.clearResult = function () {
        this.qrResultString = null;
    };
    BarcodeScannerPage.prototype.scanError = function (resultString) {
        this.isFailed = true;
        this.errorMsg = resultString;
        this.trackService.logError(JSON.stringify(resultString), 'BarCode Scanner');
    };
    BarcodeScannerPage.prototype.onCamerasFound = function (devices) {
        this.loading.dismiss();
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    };
    BarcodeScannerPage.prototype.onCodeResult = function (resultString) {
        this.isFailed = false;
        this.qrResultString = resultString;
        this.navCtrl.navigateForward("/home/" + resultString);
    };
    BarcodeScannerPage.prototype.onDeviceSelectChange = function (selected) {
        var device = this.availableDevices.find(function (x) { return x.deviceId === selected; });
        this.currentDevice = device || null;
    };
    BarcodeScannerPage.prototype.onHasPermission = function (has) {
        this.hasPermission = has;
    };
    BarcodeScannerPage.prototype.onTorchCompatible = function (isCompatible) {
        this.torchAvailable$.next(isCompatible || false);
    };
    BarcodeScannerPage.prototype.toggleTorch = function () {
        this.torchEnabled = !this.torchEnabled;
    };
    BarcodeScannerPage.prototype.toggleTryHarder = function () {
        this.tryHarder = !this.tryHarder;
    };
    BarcodeScannerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barcode-scanner',
            template: __webpack_require__(/*! ./barcode-scanner.page.html */ "./src/app/pages/barcode-scanner/barcode-scanner.page.html"),
            styles: [__webpack_require__(/*! ./barcode-scanner.page.scss */ "./src/app/pages/barcode-scanner/barcode-scanner.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_services_tracking_service__WEBPACK_IMPORTED_MODULE_6__["TrackingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], BarcodeScannerPage);
    return BarcodeScannerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-barcode-scanner-barcode-scanner-module.js.map