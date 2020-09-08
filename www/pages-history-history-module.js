(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/history.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-buttons slot=\"end\">\n    <ion-button (click)=\"refreshList()\">\n        <ion-icon name=\"help-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-searchbar placeholder=\"Search\"\n    [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"setFilteredItems()\"\n  ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    \n        <ion-item-divider>\n          \n<p>\n<ion-select [(ngModel)]=\"sortBy\" (ionChange)=\"sortByDates()\" interface=\"popover\" aria-placeholder=\"Sort By\">\n    <ion-select-option value=\"1\">Date Created</ion-select-option>\n    <ion-select-option value=\"2\">Expected By</ion-select-option>\n    <ion-select-option value=\"3\">Last Updated</ion-select-option>\n    </ion-select></p>\n    \n        <ion-icon  color=\"tertiary\" style=\"cursor: pointer;padding-bottom: 9px;padding-right: 6px\" title=\"Filter by Date\" name=\"calendar\" (click)=\"picker.open()\" slot=\"end\"></ion-icon>\n        <ion-datetime #picker [(ngModel)]=\"dateSelected\" min=\"2010\" max=\"2050\" (ionChange)=\"searchByDate()\" display-format=\"MM/DD/YYYY\"></ion-datetime>\n        <ion-icon  color=\"tertiary\" style=\"cursor: pointer;padding-bottom: 9px;\" title=\"refresh\" name=\"refresh\" (click)=\"refreshList(true)\" slot=\"end\"></ion-icon>\n          </ion-item-divider>\n          <ion-card *ngIf=\"archiveItems.length === 0 && readyToLoad\">\n          <ion-card-content  >\n            <ion-grid><ion-row><ion-col>No Package Available</ion-col></ion-row></ion-grid> \n        </ion-card-content>\n      </ion-card>\n  \n          <ion-item-sliding *ngFor=\"let item of archiveItems\">\n\n          \n              <ion-item (click)=\"showDetail(item.Key)\">\n    \n                  <ion-avatar slot=\"start\">\n                    <img [src]=\"item.ImgUrl\">\n                  </ion-avatar>\n                  <ion-label>\n                      <p style=\"color:black\">Tracking #: <span style=\"color: #8810a9 !important;line-height: 25px;\">{{item.TrackingNo}}</span></p>\n                      <p>Status: {{item.Status}}</p>\n                      <p>{{sortbyDate}}: {{(sortBy === '1'? item.DateCreated:(sortBy === '2'? item.ExpectedDate:(sortBy === '3'? item.LastUpdated:item.DateCreated))) | date:'MM/dd/yyyy'}}</p>\n                      \n                    </ion-label>\n                </ion-item>\n          \n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"tertiary\" (click)=\"retrack(item.Key)\"><ion-icon ios=\"ios-repeat\" md=\"md-repeat\"></ion-icon></ion-item-option>\n                <ion-item-option color=\"tertiary\" (click)=\"delete(item.Key)\"><ion-icon title=\"Remove\"  name=\"trash\"></ion-icon></ion-item-option>\n\n              </ion-item-options>\n            </ion-item-sliding>\n \n</ion-list>\n<app-help-fab></app-help-fab>\n</ion-content>\n<!-- <ion-footer>\n<app-footertab></app-footertab>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  border-radius: 30px !important; }\n\nion-list {\n  padding-top: 2px !important; }\n\nion-item-divider {\n  background: #f2e4ff !important;\n  height: 35px;\n  padding-top: 3px !important;\n  padding-bottom: 3px !important;\n  padding-left: 4px !important;\n  padding-right: 3px !important; }\n\nion-segment {\n  background: #f2e4ff; }\n\nion-segment-button {\n  height: 30px !important; }\n\nion-segment-button ion-badge {\n    position: absolute;\n    top: -0.2rem;\n    right: -0.2rem;\n    opacity: 0.9; }\n\na {\n  color: #9906d8 !important; }\n\nion-select {\n  color: #9906d8;\n  font-weight: bolder;\n  font-size: 13px; }\n\nion-card {\n  border-block: 2px dotted;\n  border-block-color: #2d2e2e; }\n\nion-card-content {\n  padding: 0px 0px 0px 0px;\n  background: #ffe4e4 !important; }\n\nion-card-content ion-col {\n    font-family: Verdana;\n    font-size: 12px;\n    color: #8c0606;\n    padding: 2px; }\n\nion-datetime {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9EOlxcQ29kZVxcaU9TIEFwcFxcVmFpYmhhdlxcQW5kcm9pZFxcQ29kZS9zcmNcXGFwcFxccGFnZXNcXGhpc3RvcnlcXGhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsOEJBQThCLEVBQUE7O0FBQzVDO0VBQVMsMkJBQTJCLEVBQUE7O0FBQ3BDO0VBQWlCLDhCQUE2QjtFQUFDLFlBQVk7RUFBQywyQkFBMkI7RUFBQyw4QkFBOEI7RUFBQyw0QkFBNEI7RUFBQyw2QkFBNkIsRUFBQTs7QUFDakw7RUFBWSxtQkFBbUIsRUFBQTs7QUFDL0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFEM0I7SUFJRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBR2Q7RUFBRSx5QkFBeUIsRUFBQTs7QUFDM0I7RUFDQyxjQUFjO0VBQ1gsbUJBQW1CO0VBQUMsZUFBZSxFQUFBOztBQUN2QztFQUFTLHdCQUF3QjtFQUFFLDJCQUEwQixFQUFBOztBQUM3RDtFQUFpQix3QkFBd0I7RUFBQyw4QkFBOEIsRUFBQTs7QUFBeEU7SUFDUyxvQkFBb0I7SUFBRSxlQUFlO0lBQUUsY0FBYztJQUFDLFlBQVksRUFBQTs7QUFFM0U7RUFBYSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye2JvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDt9XG5pb24tbGlzdHtwYWRkaW5nLXRvcDogMnB4ICFpbXBvcnRhbnQ7fVxuaW9uLWl0ZW0tZGl2aWRlcntiYWNrZ3JvdW5kOiNmMmU0ZmYgIWltcG9ydGFudDtoZWlnaHQ6IDM1cHg7cGFkZGluZy10b3A6IDNweCAhaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOiAzcHggIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6IDRweCAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6IDNweCAhaW1wb3J0YW50O31cbmlvbi1zZWdtZW50e2JhY2tncm91bmQ6ICNmMmU0ZmY7fVxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcblxuXHRpb24tYmFkZ2Uge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IC0wLjJyZW07XG5cdFx0cmlnaHQ6IC0wLjJyZW07XG5cdFx0b3BhY2l0eTogMC45O1xuXHR9XG59XG5he2NvbG9yOiAjOTkwNmQ4ICFpbXBvcnRhbnQ7fVxuaW9uLXNlbGVjdHsgICAgXG5cdGNvbG9yOiAjOTkwNmQ4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7Zm9udC1zaXplOiAxM3B4O31cbmlvbi1jYXJke2JvcmRlci1ibG9jazogMnB4IGRvdHRlZDsgYm9yZGVyLWJsb2NrLWNvbG9yOiMyZDJlMmV9XG5pb24tY2FyZC1jb250ZW50e3BhZGRpbmc6IDBweCAwcHggMHB4IDBweDtiYWNrZ3JvdW5kOiAjZmZlNGU0ICFpbXBvcnRhbnQ7XG4gaW9uLWNvbHtmb250LWZhbWlseTogVmVyZGFuYTsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzhjMDYwNjtwYWRkaW5nOiAycHh9XG59XG5pb24tZGF0ZXRpbWV7ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O30iXX0= */"

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/tracking.service */ "./src/services/tracking.service.ts");
/* harmony import */ var src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/active-packages */ "./src/app/models/active-packages.ts");
/* harmony import */ var src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/loader.service */ "./src/app/providers/loader.service.ts");
/* harmony import */ var src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/QueryParams */ "./src/app/models/QueryParams.ts");









var HistoryPage = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function HistoryPage(trackService, loading, alertController, navCtrl, storage) {
        this.trackService = trackService;
        this.loading = loading;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.searchTerm = '';
        this.sortbyDate = 'Date Created';
        this.dateSelected = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'MM/dd/yyyy', 'en');
        this.sortBy = '1';
        this.archiveItems = [];
        this.readyToLoad = false;
    }
    HistoryPage.prototype.ngOnInit = function () {
    };
    HistoryPage.prototype.ionViewWillEnter = function () {
        this.loading.present('Loading Records...');
        this.loadPackages();
    };
    HistoryPage.prototype.setFilteredItems = function () {
        if (this.searchTerm === '' || this.searchTerm === undefined || this.searchTerm === null) {
            this.refreshList();
        }
        else {
            this.archiveItems = this.trackService.filterItems(this.archiveItems, this.searchTerm);
        }
    };
    HistoryPage.prototype.loadPackages = function () {
        var _this = this;
        this.storage.get('_archivePackages').then(function (value) {
            if (value !== '' && value !== undefined && value !== null) {
                _this.trackService.setarchivePackagestoSession(value);
                _this.archiveItems = src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.Archive;
                _this.sortByDates();
            }
            _this.readyToLoad = true;
            _this.loading.dismiss();
        });
    };
    HistoryPage.prototype.refreshList = function (showLoader) {
        var _this = this;
        if (showLoader === void 0) { showLoader = false; }
        if (showLoader) {
            this.loading.present('Refreshing...');
        }
        // tslint:disable-next-line: only-arrow-functions
        setTimeout(function () {
            _this.loadPackages();
        }, 800);
    };
    HistoryPage.prototype.delete = function (key) {
        this.presentConfirm(key, 'Delete', 'Do you want to delete the package?', 'del');
    };
    HistoryPage.prototype.retrack = function (key) {
        this.presentConfirm(key, 'Re-Track', 'Do you want to Re-Track the package?', 'rtrck');
    };
    HistoryPage.prototype.showDetail = function (key) {
        this.navCtrl.navigateForward("/details/" + key);
    };
    HistoryPage.prototype.sortByDates = function () {
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
    HistoryPage.prototype.searchByDate = function () {
        this.archiveItems = this.trackService.filterDatewise(src_app_models_active_packages__WEBPACK_IMPORTED_MODULE_6__["SessionData"].packages.Archive, this.dateSelected);
    };
    HistoryPage.prototype.presentConfirm = function (key, _header, _message, _opration) {
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
                                                case 'rtrck':
                                                    _this.storage.get('_archivePackages').then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
                                                            var record_1 = tData.find(function (item) { return item.trackingNo === key.trim(); });
                                                            tData.splice(index, 1);
                                                            _this.storage.set('_archivePackages', tData).then(function () {
                                                                var queryParam = new src_app_models_QueryParams__WEBPACK_IMPORTED_MODULE_8__["QueryParams"]();
                                                                queryParam.TrackingNo = record_1.Trackingheader.TrackingNo;
                                                                queryParam.Carrier = record_1.Trackingheader.CarrierCode;
                                                                queryParam.Description = record_1.ResultData.Description;
                                                                queryParam.Residential = record_1.ResultData.Residential;
                                                                _this.trackService.getTrackingDetails(queryParam, 'actpck');
                                                            });
                                                        }
                                                    });
                                                    break;
                                                case 'del':
                                                    _this.loading.present('Deleting...');
                                                    _this.storage.get('_archivePackages').then(function (tData) {
                                                        if (tData == null) {
                                                            tData = [];
                                                        }
                                                        // tslint:disable-next-line: max-line-length
                                                        var index = tData.findIndex(function (item) { return item.trackingNo === key.trim(); });
                                                        if (index >= 0) {
                                                            tData.splice(index, 1);
                                                            _this.storage.set('_archivePackages', tData).then(function () {
                                                                // this.loading.dismiss();
                                                                _this.refreshList();
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
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.trackService.logError(JSON.stringify(error_1), 'presentConfirm-history-page');
                        this.loading.presentToast('Error', 'Something went wrong!');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.page.html */ "./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_tracking_service__WEBPACK_IMPORTED_MODULE_5__["TrackingService"], src_app_providers_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module.js.map