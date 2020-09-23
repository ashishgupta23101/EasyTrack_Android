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

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n    <ion-button (click)=\"clearTrack()\">\n        <ion-icon  name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>EasyTrack</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form *ngIf=\"track_Form\" [formGroup]=\"track_Form\" (submit)=\"doTrack(track_Form.value)\">\n\n         <ion-item>\n            <!-- <ion-label>Tracking#</ion-label> -->\n            <ion-input type=\"text\" placeholder=\"Enter Tracking #\" (input)=\"onSearchChange($event.target.value)\"\n             (ionBlur)=\"fillCarrierCode(track_Form.value)\" formControlName=\"TrackingNo\" required></ion-input>\n            <ion-icon (click)=\"scanPGCode()\" color=\"tertiary\" name=\"barcode\"></ion-icon>\n            <!-- <ion-buttons color=\"light\" clear slot=\"end\"><ion-button  color=\"light\"  > <ion-icon (click)=\"scanCode()\" color=\"tertiary\" name=\"barcode\"></ion-icon></ion-button></ion-buttons> -->\n          </ion-item>\n        \n            <ion-item>\n              <ion-label position=\"floating\">Carrier</ion-label>\n              <ion-select [value]=\"carCode\" okText=\"Okay\" formControlName=\"Carrier\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"U\">UPS</ion-select-option>\n                <ion-select-option value=\"S\">USPS</ion-select-option>\n                <ion-select-option value=\"D\">DHL</ion-select-option>\n                <ion-select-option value=\"M\">DHLGM</ion-select-option>\n                <ion-select-option value=\"F\">FedEx Express</ion-select-option>\n                <ion-select-option value=\"R\">FedEx Ground</ion-select-option>\n                <ion-select-option value=\"P\">Purolator</ion-select-option>\n                <ion-select-option value=\"O\">OnTrac</ion-select-option>\n              </ion-select>\n            </ion-item>\n        \n          <ion-item>\n              \n            <!-- <ion-label>Description</ion-label> -->\n            <ion-textarea type=\"text\"  placeholder=\"Enter Description\" formControlName=\"Description\"></ion-textarea>\n            \n          </ion-item>\n          \n          <ion-item>\n            <ion-label style=\"z-index: 999999;\">Residential Delivery</ion-label>\n            <ion-checkbox color=\"tertiary\" formControlName=\"Res_Del\"></ion-checkbox>\n            <ion-icon slot=\"end\" style=\"z-index: 999999; cursor:pointer;height: 20px;\"  (click)=\"resInfoAlert()\" color=\"primary\"  name=\"information-circle-outline\"></ion-icon>\n          </ion-item>\n        <ion-button class=\"submit-btn\" color=\"tertiary\"  type=\"submit\" expand=\"block\" [disabled]=\"!track_Form.valid\">Track</ion-button>\n      </form>\n      <app-help-fab></app-help-fab>\n</ion-content>\n<!--<ion-footer>\n<app-footertab></app-footertab>\n</ion-footer>-->\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-label-stacked .input-wrapper,\n.input-wrapper {\n  flex-direction: column-reverse; }\n\n.label-md[stacked] {\n  margin-top: 0; }\n\nsvg {\n  height: 20px;\n  padding-top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcQ29kZVxcRWFzeVRyYWNrQW5kcm9pZFxcSW9uaWNcXENvZGVcXEVhc3lUcmFja19BbmRyb2lkL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUFJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1sYWJlbC1zdGFja2VkIC5pbnB1dC13cmFwcGVyLFxuLmlucHV0LXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cbi5sYWJlbC1tZFtzdGFja2VkXSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbi8vaW9uLWJ1dHRvbnN7cGFkZGluZy10b3A6IDIwcHh9XG5zdmd7aGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA0cHg7fVxuIl19 */"

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

// import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';






//import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';








// import { WebIntent } from '@ionic-native/web-intent/ngx';
var HomePage = /** @class */ (function () {
    // backButtonSubscription;
    // items: any;
    // result: JSON;
    // allData: any;
    // trackingNoObject: any;
    // tslint:disable-next-line: max-line-length
    function HomePage(route, platform, splashScreen, barcodeScanner, storage, formBuilder, //private zbar: ZBar, 
    loadingController, helper, trackService, navCtrl, fcm
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
        this.carCode = '';
        this.trackNo = '';
    }
    HomePage.prototype.onSearchChange = function (searchValue) {
        this.trackNo = searchValue;
        if (searchValue === 'SHIPMATRIX') {
            this.navCtrl.navigateForward("/url-changer");
        }
        else {
            this.carCode = this.helper.GetCarrierCode(searchValue);
        }
    };
    HomePage.prototype.gotoScanner = function () {
        this.navCtrl.navigateForward("/barcode-scanner");
    };
    // Phonegap Scanner
    HomePage.prototype.scanPGCode = function () {
        var _this = this;
        this.barcodeScannerOptions = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: false,
            prompt: 'Place a barcode inside the scan area'
        };
        this.barcodeScanner
            .scan(this.barcodeScannerOptions)
            .then(function (barcodeData) {
            if (barcodeData !== null) {
                //alert(JSON.stringify(barcodeData));
                _this.trackNo = barcodeData.text.replace('\u001d', '');
                _this.trackNo = _this.CorrectTrackingNo(_this.trackNo);
                _this.carCode = _this.helper.GetCarrierCode(_this.trackNo);
                _this.track_Form = _this.formBuilder.group({
                    TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this.trackNo),
                    Carrier: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this.carCode),
                    Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(250)),
                    Res_Del: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
                });
                _this.trackService.logError(JSON.stringify(barcodeData), 'Tracking No');
                // 
            }
            else {
                _this.loadingController.presentToast('Warning', 'No Data Available');
            }
            if (barcodeData.cancelled == true) {
                _this.carCode = _this.helper.GetCarrierCode('');
                _this.track_Form = _this.formBuilder.group({
                    Res_Del: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
                });
            }
        })
            .catch(function (error) {
            _this.fillCarrierCode('');
            _this.trackService.logError(JSON.stringify(error), 'barcode Scan issue');
            _this.loadingController.presentToast('Error', 'Something went wrong');
        });
    };
    HomePage.prototype.CorrectTrackingNo = function (trackNo) {
        if ((trackNo.length > 20) && trackNo.substring(0, 3) == '420') {
            this.trackNo = this.trackNo.substring(8);
        }
        return this.trackNo;
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
        //       this.carCode = this.helper.GetCarrierCode(this.trackNo);
        //       this.track_Form = this.formBuilder.group({
        //         TrackingNo: new FormControl(this.trackNo),
        //         Carrier: new FormControl(this.carCode),
        //         Description: new FormControl('', Validators.max(250)),
        //         Res_Del: new FormControl(false)
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
    HomePage.prototype.help = function () {
        this.navCtrl.navigateForward("/help");
    };
    HomePage.prototype.ngOnInit = function () {
        // this.platform.ready().then(() => {
        //   this.loadingController.presentToast('dark', 'platform is ready');
        // });
        // this.getIntentValueIfAvailable();
        this.fillIntentValue();
    };
    HomePage.prototype.fillIntentValue = function () {
        this.trackNo = localStorage.getItem("intent");
        // alert(this.trackNo);
        if (this.trackNo !== null && this.trackNo !== undefined && this.trackNo !== '') {
            //alert(this.trackNo);
            this.trackNo = this.trackNo.replace('\u001d', '');
            this.carCode = this.helper.GetCarrierCode(this.trackNo);
            this.track_Form = this.formBuilder.group({
                TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.trackNo),
                Carrier: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.carCode),
                Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(250)),
                Res_Del: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
            });
            localStorage.setItem("intent", '');
            // alert('end' + this.trackNo);
        }
        else {
            this.track_Form = this.formBuilder.group({
                TrackingNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                Carrier: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(250)),
                Res_Del: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
            });
        }
    };
    // ngAfterViewInit() {
    //   this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
    //     if (window.location.pathname === "/home") {
    //       // this.loadingController.presentToast('dark', 'window.location.pathname is ' + window.location.pathname);
    //     navigator['app'].exitApp();
    //     }
    //   });
    // }
    // ngOnDestroy() { 
    //   this.backButtonSubscription.unsubscribe();
    // }
    // ionViewDidLoad() {
    //   // this.platform.ready().then(() => {
    //   (<any>window).plugins.intent.getCordovaIntent(
    //     function (Intent) {
    //       //you should filter on the intents you actually want to receive based on Intent.action
    //       this.loadingController.presentToast('dark', 'intent received on app launch1');
    //       localStorage.setItem('intent', JSON.stringify(Intent));
    //     },
    //     function () {
    //       console.log('Error getting cordova intent');
    //     }
    //   );
    //   // });
    // }
    // ionViewDidEnter() {
    //   // this.platform.ready().then(() => {
    //   (<any>window).plugins.intent.setNewIntentHandler(
    //     function (Intent) {
    //       this.loadingController.presentToast('dark', 'intent received on app launch2');
    //       localStorage.setItem('intent', JSON.stringify(Intent));
    //     }
    //   );
    //   // });
    // }
    HomePage.prototype.ionViewWillEnter = function () {
        var id = localStorage.getItem("deviceID");
        if (id === 'null' || id === null || id === undefined || id === '') {
            this.trackService.GenerateDeviceID();
        }
        var deviceToken = localStorage.getItem("deviceToken");
        if (deviceToken === 'null' || deviceToken === null || deviceToken === undefined || deviceToken === '') {
            this.fcm.notificationSetup();
        }
        this.trackService.saveToken();
        //this.fillIntentValue();
        if (this.trackNo === 'SHIPMATRIX') {
            this.fillIntentValue();
        }
        this.setfilteringDatestoSession();
        this.splashScreen.hide();
    };
    HomePage.prototype.fillCarrierCode = function (formVal) {
        if (formVal.TrackingNo === 'SHIPMATRIX') {
            this.navCtrl.navigateForward("/url-changer");
        }
        else {
            this.carCode = this.helper.GetCarrierCode(formVal.TrackingNo);
            if (this.carCode === '' || this.carCode === undefined || this.carCode === null) {
                this.loadingController.presentToast('Error', 'Invalid Packages.');
                this.clearTrack();
            }
        }
    };
    HomePage.prototype.doTrack = function (value) {
        try {
            localStorage.setItem("intent", '');
            this.queryParam = new src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_6__["QueryParams"]();
            if (this.ValidateTrackNo(value.TrackingNo) === true) {
                // alert('1111');
                this.queryParam.TrackingNo = value.TrackingNo;
                this.queryParam.Carrier = value.Carrier;
                this.queryParam.Description = value.Description;
                this.queryParam.Residential = value.Res_Del;
                this.trackService.getTrackingDetails(this.queryParam);
            }
        }
        catch (Exception) {
            this.trackService.logError(JSON.stringify(Exception), 'doTrack-home');
            this.loadingController.presentToast('Error', JSON.stringify(Exception));
        }
    };
    HomePage.prototype.clearTrack = function () { this.track_Form.reset(); };
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
    HomePage.prototype.ValidateTrackNo = function (trakNo) {
        if (trakNo.length > 3 && trakNo.substring(0, 3).toLowerCase() === 'tba') {
            this.loadingController.presentToast('Warning', 'Please track this package via your amazon account.');
            return false;
        }
        if (trakNo.length === 10 && /^[a-zA-Z]{5}/.test(trakNo)) {
            this.loadingController.presentToast('Warning', 'Invalid Tracking No');
            return false;
        }
        return true;
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        })
        // export class HomePage implements OnInit, OnDestroy, AfterViewInit {
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            src_app_providers_helper_service__WEBPACK_IMPORTED_MODULE_12__["HelperService"], src_services_tracking_service__WEBPACK_IMPORTED_MODULE_4__["TrackingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_services_fcm_service__WEBPACK_IMPORTED_MODULE_14__["FcmService"]
            // private webIntent: WebIntent
        ])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map