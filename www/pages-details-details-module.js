(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-details-module"],{

/***/ "./src/app/models/TrackingHeader.ts":
/*!******************************************!*\
  !*** ./src/app/models/TrackingHeader.ts ***!
  \******************************************/
/*! exports provided: TrackingHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingHeader", function() { return TrackingHeader; });
var TrackingHeader = /** @class */ (function () {
    function TrackingHeader() {
    }
    return TrackingHeader;
}());



/***/ }),

/***/ "./src/app/models/TrackingResult.ts":
/*!******************************************!*\
  !*** ./src/app/models/TrackingResult.ts ***!
  \******************************************/
/*! exports provided: TrackingResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingResult", function() { return TrackingResult; });
var TrackingResult = /** @class */ (function () {
    function TrackingResult() {
    }
    return TrackingResult;
}());



/***/ }),

/***/ "./src/app/pages/details/details.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/details/details.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n          <ion-icon slot=\"icon-only\" ios=\"ios-arrow-back\"  md=\"md-arrow-back\"></ion-icon>\n        </ion-button>\n        \n    </ion-buttons>\n    <!-- <ion-title>Detail</ion-title> -->\n    <ion-buttons slot=\"end\">\n      <ion-button title=\"Edit Package\" *ngIf=\"isActive == true\" (click)=\"editPackages()\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-button>\n        <ion-button title=\"Refresh Package\" *ngIf=\"isActive == true\" (click)=\"refPackages()\">\n            <ion-icon name=\"refresh\"></ion-icon>      \n        </ion-button>\n        <ion-button title=\"Share\" *ngIf=\"isActive == true\" (click)=\"share()\">\n          <app-social-sharing [Key]=\"item\"></app-social-sharing>     \n      </ion-button>\n\n          <ion-button size=\"small\" title=\"More Options\" (click)=\"presentPopover($event)\">\n            <ion-icon name=\"more\"></ion-icon>\n          </ion-button>\n            <!--  <ion-button title=\"Refresh Package\" *ngIf=\"isActive == true\" (click)=\"refPackages()\">\n                <ion-icon name=\"refresh\"></ion-icon>\n              </ion-button>\n           <ion-button title=\"More Options\" (click)=\"presentPopover($event)\">\n                <ion-icon name=\"more\"></ion-icon>\n              </ion-button> -->\n        </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n    <ion-card><ion-item-divider>Tracking Details</ion-item-divider>\n        <ion-card-content *ngIf=\"hasData === false\" >\n        <ion-grid><ion-row><ion-col>No Record Available</ion-col></ion-row></ion-grid> \n        </ion-card-content>\n        <ion-card-content *ngIf=\"hasData === true\">\n          \n            <ion-grid>\n                <ion-row><ion-col>Tracking No#:</ion-col><ion-col>{{trackingResult?.TrackingNo}}</ion-col></ion-row>\n                <ion-row><ion-col>Description:</ion-col><ion-col>{{trackingResult?.Description}}</ion-col></ion-row>\n                <ion-row><ion-col>Carrier:</ion-col><ion-col>{{trackingheader?.CarrierCode}}</ion-col></ion-row>\n                <ion-row><ion-col>Status:</ion-col><ion-col>{{trackingheader?.Status}}</ion-col></ion-row>\n                <ion-row><ion-col>Ship Date:</ion-col><ion-col>{{trackingheader?.ShipDate}}</ion-col></ion-row>\n                <ion-row><ion-col>Delivery Date:</ion-col><ion-col>{{trackingheader?.DeliveredDateTime}}</ion-col></ion-row>\n                <ion-row><ion-col>Pickup Location:</ion-col><ion-col>{{trackingheader?.OriginLocation}}</ion-col></ion-row>\n                <ion-row><ion-col>Delivery Location:</ion-col><ion-col>{{trackingheader?.DeliveryLocation}}</ion-col></ion-row>\n                <ion-row><ion-col>Carrier Phone:</ion-col><ion-col>{{trackingResult?.OriginZip}}</ion-col></ion-row>\n              </ion-grid>\n        \n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-item-divider >Tracking Scans  </ion-item-divider>\n          <ion-card-content *ngIf=\"trackingScans.length > 0\" >\n      <ion-grid #scanGrid *ngFor=\"let scan of trackingScans\">\n          <ion-row><ion-col>Scan Date:</ion-col><ion-col>{{scan?.scanDateTime}}</ion-col></ion-row>\n          <ion-row><ion-col>Location:</ion-col><ion-col>{{scan?.location}}</ion-col></ion-row>\n          <ion-row><ion-col>Activity:</ion-col><ion-col>{{scan?.activity}}</ion-col></ion-row>\n          <ion-row><ion-col>Scan Note:</ion-col><ion-col>{{scan?.scanNote}}</ion-col></ion-row>\n          <ion-row class=\"seperator\"></ion-row>\n        </ion-grid>\n      </ion-card-content>\n      <ion-card-content *ngIf=\"trackingScans.length === 0\" >\n          <ion-grid><ion-row><ion-col>No Scans Available</ion-col></ion-row></ion-grid> \n      </ion-card-content>\n    </ion-card>\n    <!-- <app-help-fab></app-help-fab> -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n\n      <!-- <ion-fab-button color=\"tertiary\" size=\"small\">\n          <ion-icon color=\"light\" ios=\"ios-cog\" md=\"md-cog\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-list side=\"start\">\n        <ion-fab-button color=\"tertiary\" *ngIf=\"isActive == true\"  (click)=\"archive()\">\n          <ion-icon color=\"light\" name=\"archive\"></ion-icon></ion-fab-button>\n        <ion-fab-button color=\"tertiary\" *ngIf=\"isArchive == true\" (click)=\"retrack()\">\n          <ion-icon color=\"light\" ios=\"ios-repeat\" md=\"md-repeat\"></ion-icon></ion-fab-button>\n        <ion-fab-button color=\"tertiary\" *ngIf=\"isActive == true\" (click)=\"MarkasDelievered()\">\n          <ion-icon color=\"light\" name=\"checkmark-circle-outline\"></ion-icon></ion-fab-button>\n        <ion-fab-button color=\"tertiary\" *ngIf=\"isActive == true\" (click)=\"locate()\">\n          <ion-icon color=\"light\" name=\"locate\"></ion-icon></ion-fab-button>\n        <ion-fab-button  color=\"tertiary\" (click)=\"gotoSettings()\">\n          <ion-icon color=\"light\" name=\"construct\"></ion-icon></ion-fab-button>\n      </ion-fab-list>\n    \n      <ion-fab-list side=\"top\">\n        <ion-fab-button color=\"tertiary\" *ngIf=\"hasData === true\" title=\"Delete Package\" (click)=\"delete()\">\n          <ion-icon color=\"light\" name=\"trash\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"tertiary\" size=\"small\">\n          <ion-icon color=\"light\" *ngIf=\"isActive == true\" (click)=\"share()\" name=\"share\">\n              <app-social-sharing [Key]=\"item\"></app-social-sharing>\n          </ion-icon>\n        </ion-fab-button>\n      </ion-fab-list> -->\n    </ion-fab>\n</ion-content>\n<!--<ion-footer>\n    \n  <ion-toolbar>\n    <ion-tabs >\n     <ion-tab-bar>\n       <ion-tab-button *ngIf=\"isActive == true\"  (click)=\"archive()\">\n         <ion-icon color=\"tertiary\" name=\"archive\"></ion-icon>\n         <ion-label color=\"tertiary\">Archive</ion-label>\n       </ion-tab-button>\n       <ion-tab-button  *ngIf=\"isArchive == true\" (click)=\"retrack()\">\n        <ion-icon color=\"tertiary\" ios=\"ios-repeat\" md=\"md-repeat\"></ion-icon>\n        <ion-label color=\"tertiary\">Re-Track</ion-label>\n      </ion-tab-button>\n       <ion-tab-button *ngIf=\"isActive == true\" (click)=\"MarkasDelievered()\">\n         <ion-icon color=\"tertiary\" name=\"checkmark-circle-outline\"></ion-icon>\n         <ion-label color=\"tertiary\">Mark Delivered</ion-label>\n       </ion-tab-button>\n   \n       <ion-tab-button *ngIf=\"isActive == true\" color=\"tertiary\" (click)=\"locate()\">\n         <ion-icon color=\"tertiary\" name=\"locate\"></ion-icon>\n         <ion-label color=\"tertiary\">Show Map</ion-label>\n       </ion-tab-button>\n   \n       <ion-tab-button   color=\"tertiary\" (click)=\"gotoSettings()\">\n         <ion-icon color=\"tertiary\" name=\"construct\"></ion-icon>\n         <ion-label color=\"tertiary\">Setting</ion-label>\n       </ion-tab-button>\n\n     </ion-tab-bar>\n   </ion-tabs>\n   </ion-toolbar>\n</ion-footer>-->\n"

/***/ }),

/***/ "./src/app/pages/details/details.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-block: 2px dotted #9906d8;\n  border-block-color: #2d2e2e; }\n\nion-card-content {\n  padding: 7px 0px 0px 0px;\n  background-color: #f8e8ff; }\n\nion-card-content ion-col {\n    font-family: Verdana;\n    font-size: 12px;\n    color: #9906d8;\n    padding: 2px; }\n\nion-item-divider {\n  background-color: #cf5fff;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #ffffff; }\n\n.seperator {\n  border-bottom: 3px dotted #9906d8;\n  border-block-color: #2d2e2e; }\n\nion-tab-button {\n  background: #f2e4ff; }\n\napp-social-sharing {\n  font-size: 22px !important; }\n\nion-fab {\n  position: fixed !important;\n  bottom: 40px !important;\n  right: 15px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9EOlxcQ29kZVxcRWFzeVRyYWNrQW5kcm9pZFxcSW9uaWNcXENvZGVcXEVhc3lUcmFja19BbmRyb2lkL3NyY1xcYXBwXFxwYWdlc1xcZGV0YWlsc1xcZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUyxnQ0FBZ0M7RUFBRSwyQkFBMEIsRUFBQTs7QUFDckU7RUFBaUIsd0JBQXdCO0VBQUMseUJBQXlCLEVBQUE7O0FBQW5FO0lBRUksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixjQUFjO0lBRWQsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFbEI7RUFBVyxpQ0FBaUM7RUFBRSwyQkFBMEIsRUFBQTs7QUFDeEU7RUFBZSxtQkFBbUIsRUFBQTs7QUFDbEM7RUFBb0IsMEJBQTBCLEVBQUE7O0FBQzlDO0VBQWEsMEJBQTBCO0VBQ25DLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtib3JkZXItYmxvY2s6IDJweCBkb3R0ZWQgIzk5MDZkODsgYm9yZGVyLWJsb2NrLWNvbG9yOiMyZDJlMmV9XG5pb24tY2FyZC1jb250ZW50e3BhZGRpbmc6IDdweCAwcHggMHB4IDBweDtiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlOGZmO1xuIGlvbi1jb2x7ICAgIFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzk5MDZkODtcbiAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZzogMnB4O31cbn1cbmlvbi1pdGVtLWRpdmlkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmNWZmZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zZXBlcmF0b3J7Ym9yZGVyLWJvdHRvbTogM3B4IGRvdHRlZCAjOTkwNmQ4OyBib3JkZXItYmxvY2stY29sb3I6IzJkMmUyZX1cbmlvbi10YWItYnV0dG9ue2JhY2tncm91bmQ6ICNmMmU0ZmZ9XG5hcHAtc29jaWFsLXNoYXJpbmcge2ZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O31cbmlvbi1mYWIgeyAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICBib3R0b206IDQwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/details/details.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_models_TrackingHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/TrackingHeader */ "./src/app/models/TrackingHeader.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_models_TrackingResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/TrackingResult */ "./src/app/models/TrackingResult.ts");
/* harmony import */ var src_services_tracking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/tracking.service */ "./src/services/tracking.service.ts");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/QueryParams */ "./src/app/models/QueryParams.ts");
/* harmony import */ var src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/active-packages */ "./src/app/models/active-packages.ts");
/* harmony import */ var src_app_components_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/social-sharing/social-sharing.component */ "./src/app/components/social-sharing/social-sharing.component.ts");
/* harmony import */ var _popover_detail_popover_detail_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../popover-detail/popover-detail.page */ "./src/app/pages/popover-detail/popover-detail.page.ts");













var DetailsPage = /** @class */ (function () {
    function DetailsPage(route, storage, trackService, loading, alertController, router, navCtrl, popoverCtrl) {
        this.route = route;
        this.storage = storage;
        this.trackService = trackService;
        this.loading = loading;
        this.alertController = alertController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.hasData = false;
        this.isActive = false;
        this.isArchive = false;
        this.trackingScans = [];
        this.packType = '_activePackages';
    }
    DetailsPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _popover_detail_popover_detail_page__WEBPACK_IMPORTED_MODULE_12__["PopoverDetailPage"],
                            event: ev,
                            componentProps: { 'trackNo': this.trackNo,
                                'Popover': this.popoverCtrl
                            },
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            if (data != null) {
                                switch (data.data) {
                                    case 'archive':
                                        _this.archive();
                                        break;
                                    case 'MarkasDelievered':
                                        _this.MarkasDelievered();
                                        break;
                                    case 'locate':
                                        _this.locate();
                                        break;
                                    case 'gotoSettings':
                                        _this.gotoSettings();
                                        break;
                                    case 'delete':
                                        _this.delete();
                                        break;
                                    case 'share':
                                        _this.share();
                                        break;
                                }
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DetailsPage.prototype.ngOnInit = function () {
        this.trackNo = this.route.snapshot.paramMap.get('any');
    };
    DetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading.present('Loading Details.');
        this.item = new src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_10__["ActivePackages"]();
        this.trackingheader = new src_app_models_TrackingHeader__WEBPACK_IMPORTED_MODULE_4__["TrackingHeader"]();
        this.trackingResult = new src_app_models_TrackingResult__WEBPACK_IMPORTED_MODULE_6__["TrackingResult"]();
        this.trackingScans = new Array();
        this.storage.get('_activePackages').then(function (tData) {
            var val = tData.find(function (item) { return item.trackingNo === _this.trackNo; });
            if (val !== undefined && val !== '' && val !== null) {
                _this.isActive = true;
                _this.isArchive = false;
                _this.trackingScans = val.scans;
                _this.trackingResult = val.ResultData;
                _this.trackingheader = val.Trackingheader;
                _this.item.TrackingNo = val.Trackingheader.TrackingNo;
                _this.item.Carrier = val.Trackingheader.CarrierCode;
                _this.item.Status = val.Trackingheader.Status;
                _this.hasData = true;
                _this.loading.dismiss();
            }
            else {
                _this.storage.get('_archivePackages').then(function (aData) {
                    var val1 = aData.find(function (item) { return item.trackingNo === _this.trackNo; });
                    if (val1 !== undefined && val1 !== '' && val1 !== null) {
                        _this.isActive = false;
                        _this.isArchive = true;
                        _this.trackingScans = val1.scans;
                        _this.trackingResult = val1.ResultData;
                        _this.trackingheader = val1.Trackingheader;
                        _this.item.TrackingNo = val1.Trackingheader.TrackingNo;
                        _this.item.Carrier = val1.Trackingheader.CarrierCode;
                        _this.item.Status = val1.Trackingheader.Status;
                        _this.hasData = true;
                        _this.loading.dismiss();
                    }
                    else {
                        _this.hasData = false;
                        _this.loading.dismiss();
                    }
                    if (_this.isActive) {
                        _this.packType = '_activePackages';
                    }
                    if (_this.isArchive) {
                        _this.packType = '_archivePackages';
                    }
                });
            }
        });
    };
    DetailsPage.prototype.share = function () {
        this.social.presentActionSheet2();
    };
    DetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DetailsPage.prototype.gotoActivePackages = function () {
        this.loading.dismiss();
        if (this.isActive) {
            this.navCtrl.navigateForward('/active-packages');
        }
        if (this.isArchive) {
            this.navCtrl.navigateForward('/history');
        }
    };
    DetailsPage.prototype.archive = function () {
        this.presentConfirm(this.trackNo, 'Archive', 'Do you want to archive the package?', 'arc');
    };
    DetailsPage.prototype.retrack = function () {
        this.presentConfirm(this.trackNo, 'Re-Track', 'Do you want to Re-Track the package?', 'rtrck');
    };
    DetailsPage.prototype.delete = function () {
        this.presentConfirm(this.trackNo, 'Delete', 'Do you want to delete the package?', 'del');
    };
    DetailsPage.prototype.locate = function () {
        if (this.trackingScans !== undefined && this.trackingScans !== null && this.trackingScans.length > 0) {
            var navigationExtras = {
                queryParams: {
                    scans: JSON.stringify(this.trackingScans)
                }
            };
            this.router.navigate(['show-map'], navigationExtras);
        }
        else {
            this.loading.presentToast('Warning', 'No Scans to Locate.');
        }
    };
    DetailsPage.prototype.MarkasDelievered = function () {
        this.presentConfirm(this.trackNo, 'Mark as Delivered', 'Do you want to mark the package delivered?', 'masd');
    };
    DetailsPage.prototype.editPackages = function () {
        this.navCtrl.navigateForward("/edit-package/" + this.trackNo);
    };
    DetailsPage.prototype.gotoSettings = function () {
        this.navCtrl.navigateForward('/settings');
    };
    DetailsPage.prototype.gotoHelp = function () {
        this.navCtrl.navigateForward('/help');
    };
    DetailsPage.prototype.refPackages = function () {
        this.presentConfirm(this.trackNo, 'Re-Track', 'Do you want to Re-Track the package?', 'rtrck');
    };
    DetailsPage.prototype.presentConfirm = function (key, _header, _message, _opration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, Exception_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
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
                                                    _this.loading.present('Archived...');
                                                    _this.storage.get('_activePackages').then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
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
                                                                    _this.gotoActivePackages();
                                                                });
                                                            });
                                                        }
                                                    });
                                                    break;
                                                case 'del':
                                                    _this.loading.present('Deleting...');
                                                    _this.storage.get(_this.packType).then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
                                                            tData.splice(index, 1);
                                                            _this.storage.set(_this.packType, tData).then(function () {
                                                                _this.gotoActivePackages();
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
                                                            var record = tData.find(function (item) { return item.trackingNo === key.trim(); });
                                                            tData.splice(index, 1);
                                                            record.Trackingheader.Status = 'Delivered';
                                                            tData.push(record);
                                                            _this.storage.set('_activePackages', tData).then(function () {
                                                                _this.gotoActivePackages();
                                                            });
                                                        }
                                                    });
                                                    break;
                                                case 'rtrck':
                                                    // this.loading.present('Re-Tracking...');
                                                    _this.storage.get('_archivePackages').then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
                                                            var record_2 = tData.find(function (item) { return item.trackingNo === key.trim(); });
                                                            tData.splice(index, 1);
                                                            _this.storage.set('_archivePackages', tData).then(function () {
                                                                var queryParam = new src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_9__["QueryParams"]();
                                                                queryParam.TrackingNo = record_2.Trackingheader.TrackingNo;
                                                                queryParam.Carrier = record_2.Trackingheader.CarrierCode;
                                                                queryParam.Description = record_2.ResultData.Description;
                                                                queryParam.Residential = record_2.ResultData.Residential;
                                                                _this.trackService.getTrackingDetails(queryParam, 'actpck');
                                                            });
                                                        }
                                                    });
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
                        return [3 /*break*/, 5];
                    case 3:
                        Exception_1 = _a.sent();
                        this.trackService.logError(JSON.stringify(Exception_1), 'presentConfirm-details');
                        this.loading.presentToast('Error', 'Something went wrong!');
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_11__["SocialSharingComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_social_sharing_social_sharing_component__WEBPACK_IMPORTED_MODULE_11__["SocialSharingComponent"])
    ], DetailsPage.prototype, "social", void 0);
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/pages/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/pages/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], src_services_tracking_service__WEBPACK_IMPORTED_MODULE_7__["TrackingService"],
            src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-details-details-module.js.map