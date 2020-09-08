(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-error-error-module"],{

/***/ "./src/app/pages/error/error.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/error/error.module.ts ***!
  \*********************************************/
/*! exports provided: ErrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function() { return ErrorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error.page */ "./src/app/pages/error/error.page.ts");







var routes = [
    {
        path: '',
        component: _error_page__WEBPACK_IMPORTED_MODULE_6__["ErrorPage"]
    }
];
var ErrorPageModule = /** @class */ (function () {
    function ErrorPageModule() {
    }
    ErrorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_error_page__WEBPACK_IMPORTED_MODULE_6__["ErrorPage"]]
        })
    ], ErrorPageModule);
    return ErrorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/error/error.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/error/error.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clearTrack()\">\n          <ion-icon  name=\"refresh\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n      <ion-title>Error</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/error/error.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/error/error.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yL2Vycm9yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/error/error.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/error/error.page.ts ***!
  \*******************************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPage = /** @class */ (function () {
    function ErrorPage() {
    }
    ErrorPage.prototype.ngOnInit = function () {
    };
    ErrorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.page.html */ "./src/app/pages/error/error.page.html"),
            styles: [__webpack_require__(/*! ./error.page.scss */ "./src/app/pages/error/error.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPage);
    return ErrorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-error-error-module.js.map