(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button (click)=\"help()\">\n        <ion-icon name=\"help\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"clearTrack()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>EasyTrack</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form *ngIf=\"track_Form\" [formGroup]=\"track_Form\" (submit)=\"fillCarrierCode(track_Form.value)\">\n\n    <ion-button (click)=\"scanPGCode()\" class=\"submit-btn\" expand=\"block\" style=\"height:50px ; \" color=\"tertiary\">\n      <ion-icon name=\"barcode\"></ion-icon> Scan Barcode\n    </ion-button>\n\n    <ion-item>\n      <!-- <ion-label>Tracking#</ion-label> -->\n      <ion-input type=\"text\" placeholder=\"Enter Tracking #\" (input)=\"onSearchChange($event.target.value)\"\n        formControlName=\"TrackingNo\" required></ion-input>\n      <!-- <ion-buttons color=\"light\" clear slot=\"end\"><ion-button  color=\"light\"  > <ion-icon (click)=\"scanCode()\" color=\"tertiary\" name=\"barcode\"></ion-icon></ion-button></ion-buttons> -->\n    </ion-item>\n\n    <ion-button class=\"submit-btn\" color=\"tertiary\" type=\"submit\" style=\"height: 38px;\" expand=\"block\"\n      [disabled]=\"!track_Form.valid\">Track</ion-button>\n    <ion-select [hidden]=\"isCarrier\" #carrierList okText=\"Okay\" (ionChange)=\"doTrack(track_Form.value)\"\n      cancelText=\"Dismiss\">\n      <ion-select-option value=\"U\">UPS</ion-select-option>\n      <ion-select-option value=\"S\">USPS</ion-select-option>\n      <ion-select-option value=\"F\">FedEx </ion-select-option>\n      <ion-select-option value=\"D\">DHL</ion-select-option>\n      <ion-select-option value=\"P\">Purolator</ion-select-option>\n      <ion-select-option value=\"O\">OnTrac</ion-select-option>\n      <ion-select-option value=\"C\">Canpar</ion-select-option>\n      <ion-select-option value=\"L\">LSO</ion-select-option>\n    </ion-select>\n  </form>\n  <ion-grid>\n    <!-- <ion-row>\n      <ion-col>\n        <img width=\"85%\" height=\"90%\" src=\"../../../assets/logos/All.png\">\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col>\n        <img width=\"55px\" height=\"61px\" src=\"../../../assets/logos/UPS-Logo.png\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img width=\"105px\" height=\"28px\" src=\"../../../assets/logos/FedEx-Logo.png\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img width=\"65px\" height=\"50px\" src=\"../../../assets/logos/USPS-Logo.png\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img width=\"100px\" height=\"17px\" src=\"../../../assets/logos/Purolator-Logo.png\">\n      </ion-col>\n      <ion-col>\n        <img width=\"63px\" height=\"29px\" src=\"../../../assets/logos/DHL-Logo.png\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img width=\"99px\" height=\"25px\" src=\"../../../assets/logos/Canpar-Logo.png\">\n      </ion-col>\n      <ion-col>\n        <img width=\"71px\" height=\"35px\" src=\"../../../assets/logos/Ontrac-Logo.png\">\n      </ion-col>\n      <ion-col>\n        <img width=\"90px\" height=\"31px\" src=\"../../../assets/logos/LSO-Logo.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-help-fab></app-help-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-label-stacked .input-wrapper,\n.input-wrapper {\n  flex-direction: column-reverse; }\n\n.label-md[stacked] {\n  margin-top: 0; }\n\nsvg {\n  height: 20px;\n  padding-top: 4px; }\n\nion-row {\n  text-align: center;\n  margin: 0 auto; }\n\nion-item {\n  padding-bottom: 5px;\n  padding-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcQ29kZVxcRWFzeVRyYWNrQW5kcm9pZFxcSW9uaWNcXENvZGVcXEVhc3lUcmFja19BbmRyb2lkL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUFJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFDaEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVkO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWxhYmVsLXN0YWNrZWQgLmlucHV0LXdyYXBwZXIsXG4uaW5wdXQtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuLmxhYmVsLW1kW3N0YWNrZWRdIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuLy9pb24tYnV0dG9uc3twYWRkaW5nLXRvcDogMjBweH1cbnN2Z3toZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDRweDt9XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_tracking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/tracking.service */ "./src/services/tracking.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/QueryParams */ "./src/app/models/QueryParams.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/active-packages */ "./src/app/models/active-packages.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var src_app_providers_helper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/providers/helper.service */ "./src/app/providers/helper.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_services_fcm_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/fcm.service */ "./src/services/fcm.service.ts");


// import { Component, OnInit } from '@angular/core';





//import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';








// import { WebIntent } from '@ionic-native/web-intent/ngx';
var TrackingMode;
(function (TrackingMode) {
    TrackingMode[TrackingMode["Scanned"] = 0] = "Scanned";
    TrackingMode[TrackingMode["Typed"] = 1] = "Typed";
    TrackingMode[TrackingMode["Shared"] = 2] = "Shared";
    TrackingMode[TrackingMode["Notification"] = 3] = "Notification";
})(TrackingMode || (TrackingMode = {}));
var HomePage = /** @class */ (function () {
    // items: any;
    // result: JSON;
    // allData: any;
    // trackingNoObject: any;
    // tslint:disable-next-line: max-line-length
    function HomePage(route, platform, splashScreen, barcodeScanner, storage, formBuilder, //private zbar: ZBar,
    loadingController, helper, trackService, navCtrl, fcm, menuCtrl
    // private webIntent: WebIntent
    ) {
        this.route = route;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.barcodeScanner = barcodeScanner;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.helper = helper;
        this.trackService = trackService;
        this.navCtrl = navCtrl;
        this.fcm = fcm;
        this.menuCtrl = menuCtrl;
        this.carrierCode = '';
        this.SCAC = '';
        this.isCarrier = true;
        this.trackNo = '';
        this.subComponentOpened = false;
        this.track_Form = this.formBuilder.group({
            TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        // localStorage.setItem("isScanned", 'false');
    }
    HomePage.prototype.gotoScanner = function () {
        this.navCtrl.navigateForward("/barcode-scanner");
    };
    // Phonegap Scanner
    HomePage.prototype.scanPGCode = function () {
        var _this = this;
        this.trackingMode = TrackingMode.Scanned;
        this.subComponentOpened = true;
        this.barcodeScannerOptions = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scan area',
            disableAnimations: true,
            orientation: 'portrait'
        };
        this.barcodeScanner
            .scan(this.barcodeScannerOptions)
            .then(function (barcodeData) {
            if (barcodeData !== null) {
                //alert(JSON.stringify(barcodeData));
                _this.trackNo = barcodeData.text.replace('\u001d', '');
                _this.GetCarrierByTNC(_this.trackNo, TrackingMode.Scanned, true);
            }
            else {
                _this.loadingController.presentToast('Warning', 'No Data Available');
                _this.subComponentOpened = false;
            }
            if (barcodeData.cancelled == true) {
                _this.clearTrack();
            }
        })
            .catch(function (error) {
            _this.clearTrack();
            _this.trackService.logError(JSON.stringify(error), 'barcode Scan issue');
            _this.loadingController.presentToast('Error', 'Something went wrong');
        });
    };
    HomePage.prototype.CorrectTrackingNo = function (trackNo) {
        if ((trackNo.length > 20) && trackNo.substring(0, 3) == '420') {
            trackNo = trackNo.substring(8);
        }
        return trackNo;
    };
    // Phonegap Scanner	
    HomePage.prototype.scanzBarCode = function () {
        // let options: ZBarOptions = {
        //   flash: 'off',
        //   drawSight: true
        // }
        // this.zbar.scan(options)
        //   .then(result => {
        //     alert(JSON.stringify(result));
        //     if (result !== null) {
        //       alert(JSON.stringify(result));
        //       this.trackNo = result.text.replace('\u001d', '');
        //       this.GetCarrierByTNC(this.trackNo);
        //       this.track_Form = this.formBuilder.group({
        //         TrackingNo: new FormControl(this.trackNo),
        //         Carrier: new FormControl(this.carCode)
        //       });
        //       this.trackService.logError(JSON.stringify(result), 'Tracking No');
        //       // 	
        //     } else {
        //       this.loadingController.presentToast('Warning', 'No Data Available');
        //     }
        //   })
        //   .catch(error => {
        //     this.fillCarrierCode('');
        //     this.trackService.logError(JSON.stringify(error), 'barcode Scan issue');
        //     this.loadingController.presentToast('Error', 'Something went wrong');
        //   });
    };
    HomePage.prototype.ValidateTrackNo = function (trakNo) {
        if (trakNo.length > 3 && trakNo.substring(0, 3).toLowerCase() === 'tba') {
            this.loadingController.presentToast('Warning', 'Please track via amazon.');
            return false;
        }
        return true;
    };
    HomePage.prototype.help = function () {
        this.navCtrl.navigateForward("/help");
    };
    HomePage.prototype.ngOnInit = function () {
        // this.platform.ready().then(() => {
        //   this.loadingController.presentToast('dark', 'platform is ready');
        // });
        // this.getIntentValueIfAvailable();
        this.track_Form = this.formBuilder.group({
            TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.fillIntentValue();
    };
    HomePage.prototype.fillIntentValue = function () {
        var TrackingNo = localStorage.getItem("intent");
        // alert(this.trackNo);
        if (TrackingNo !== null && TrackingNo !== undefined && TrackingNo !== '') {
            //alert(this.trackNo);
            this.trackingMode = TrackingMode.Shared;
            TrackingNo = TrackingNo.replace('\u001d', '');
            this.GetCarrierByTNC(TrackingNo, TrackingMode.Shared, false);
            localStorage.setItem("intent", '');
            // alert('end' + this.trackNo);
        }
        else {
            this.clearTrack();
        }
    };
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.backButtonSubscription = this.platform.backButton.subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = window.location.pathname === "/home";
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.menuCtrl.isOpen("start")];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a && !this.subComponentOpened) {
                            navigator['app'].exitApp();
                        }
                        return [4 /*yield*/, this.menuCtrl.isOpen("start")];
                    case 3:
                        if (_b.sent()) {
                            this.closeMenu();
                        }
                        this.subComponentOpened = false;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.backButtonSubscription.unsubscribe();
    };
    HomePage.prototype.closeMenu = function () {
        this.menuCtrl.close("start");
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.splashScreen.hide();
        this.closeMenu();
        //this.fillIntentValue();	
        this.clearTrack();
        var isLastScanned = localStorage.getItem("isScanned");
        if (isLastScanned === 'true' && this.trackingMode == TrackingMode.Scanned) {
            this.scanPGCode();
        }
        if (this.trackNo === 'SHIPMATRIX') {
            this.fillIntentValue();
        }
        this.setfilteringDatestoSession();
        localStorage.setItem("isScanned", 'false');
    };
    HomePage.prototype.fillCarrierCode = function (formVal) {
        this.trackingMode = TrackingMode.Typed;
        this.GetCarrierByTNC(formVal.TrackingNo, TrackingMode.Typed);
    };
    HomePage.prototype.GetCarrierByTNC = function (TrackingNo, mode, isScanned) {
        var _this = this;
        if (isScanned === void 0) { isScanned = false; }
        if (TrackingNo === 'SHIPMATRIX') {
            this.navCtrl.navigateForward("/url-changer");
        }
        else {
            if (this.ValidateTrackNo(TrackingNo) && TrackingNo) {
                if (mode != TrackingMode.Shared) {
                    this.loadingController.present('Verifying Carrier....');
                    this.subComponentOpened = true;
                }
                TrackingNo = this.CorrectTrackingNo(TrackingNo);
                this.track_Form = this.formBuilder.group({
                    TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](TrackingNo)
                });
                this.trackService.TNCapi(TrackingNo).subscribe(function (data) {
                    _this.track_Form = _this.formBuilder.group({
                        TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](TrackingNo)
                    });
                    _this.carrierCode = data.ResponseData.Carrier;
                    try {
                        _this.SCAC = data.ResponseData.SCAC;
                    }
                    catch (err) {
                        _this.SCAC = "";
                        _this.trackService.logError(JSON.stringify(err), 'fillCarrierCode');
                    }
                    localStorage.setItem("SCAC", _this.SCAC);
                    if (mode != TrackingMode.Shared) {
                        _this.loadingController.dismiss();
                        _this.subComponentOpened = false;
                    }
                    if (_this.carrierCode === null || _this.carrierCode === 'null' || _this.carrierCode === '' || _this.carrierCode === undefined) {
                        localStorage.setItem("SCAC", '');
                        _this.carrierSelectRef.open();
                    }
                    else {
                        if (isScanned === true) {
                            localStorage.setItem("isScanned", 'true');
                        }
                        else {
                            localStorage.setItem("isScanned", 'false');
                        }
                        _this.doTrack(data.ResponseData.TrackingNo, _this.carrierCode);
                    }
                }, function (error) {
                    _this.track_Form = _this.formBuilder.group({
                        TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](TrackingNo)
                    });
                    _this.carrierCode = '';
                    if (mode != TrackingMode.Shared) {
                        _this.loadingController.dismiss();
                        _this.subComponentOpened = false;
                    }
                    _this.carrierSelectRef.open();
                    _this.loadingController.presentToast('Error', 'Unable to verify carrier.');
                    _this.trackService.logError(JSON.stringify(error), 'fillCarrierCode');
                });
            }
            else {
                this.carrierCode = '';
                this.track_Form = this.formBuilder.group({
                    TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](TrackingNo)
                });
            }
        }
    };
    HomePage.prototype.onSearchChange = function (searchValue) {
        this.trackNo = searchValue;
        if (searchValue === 'SHIPMATRIX') {
            this.navCtrl.navigateForward("/url-changer");
        }
    };
    HomePage.prototype.doTrack = function (trackingNumber, ccode) {
        if (ccode === void 0) { ccode = "NA"; }
        try {
            localStorage.setItem("intent", '');
            this.carrierCode = ccode == "NA" ? this.carrierSelectRef.value : ccode;
            this.queryParam = new src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_6__["QueryParams"]();
            this.queryParam.TrackingNo = trackingNumber;
            this.queryParam.Carrier = this.carrierCode;
            this.queryParam.Description = '';
            this.queryParam.Residential = 'true';
            this.trackService.getTrackingDetails(this.queryParam);
        }
        catch (Exception) {
            this.trackService.logError(JSON.stringify(Exception), 'doTrack-home');
            this.loadingController.presentToast('Error', JSON.stringify(Exception));
        }
    };
    HomePage.prototype.clearTrack = function () {
        this.carrierCode = '';
        localStorage.setItem("SCAC", '');
        this.track_Form = this.formBuilder.group({
            TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.track_Form.reset();
    };
    HomePage.prototype.resInfoAlert = function () {
        this.loadingController.presentAlert('Info', 
        // tslint:disable-next-line: max-line-length
        'Check the box to the right if your package will be delivered to a residence.Uncheck the box if your package will be delivered to commercial location.If unsure , leave the box checked.');
    };
    HomePage.prototype.setfilteringDatestoSession = function () {
        var _filteringDates = new src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_8__["FilteringDates"]();
        _filteringDates.Today = new Date();
        _filteringDates.ThisWeek = this.trackService.getFirstLastDayOfWeek(new Date());
        _filteringDates.Yesterday = moment__WEBPACK_IMPORTED_MODULE_9__(_filteringDates.Today).subtract(1, 'days').toDate();
        var dateoflastweek = moment__WEBPACK_IMPORTED_MODULE_9__(_filteringDates.ThisWeek.firstDate).subtract(1, 'days').toDate();
        _filteringDates.LastWeek = this.trackService.getFirstLastDayOfWeek(dateoflastweek);
        src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_8__["SessionData"].filteringDates = _filteringDates;
        // this.storage.get('_activePackages').then(tData => {
        //   if (tData == null) {tData = []; return; }
        //   this.trackService.setPackagestoSession(tData);
        // });
        // this.storage.get('_archivePackages').then(aData => {
        //   if (aData == null) {aData = []; return; }
        //   this.trackService.setarchivePackagestoSession(aData);
        // });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carrierList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelect"])
    ], HomePage.prototype, "carrierSelectRef", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            src_app_providers_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"], src_services_tracking_service__WEBPACK_IMPORTED_MODULE_4__["TrackingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_services_fcm_service__WEBPACK_IMPORTED_MODULE_14__["FcmService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
            // private webIntent: WebIntent
        ])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map