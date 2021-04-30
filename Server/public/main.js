(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Travel4u\Client\src\main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 29, vars: 0, consts: [["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["src", "assets/images/sLogo.jpg", 1, "navbar-brand"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLink", "/register"], [1, "glyphicon", "glyphicon-user"], ["routerLink", "/login"], [1, "glyphicon", "glyphicon-log-in"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Travel4u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  \r\n  background-color: rgb(49, 8, 75);\r\n  border-radius: 0 !important;\r\n  height: 7vh;\r\n}\r\n.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  background-color: rgb(161, 90, 64) !important;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(161, 90, 64) !important;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  height: 91px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjtBQUNBOztFQUVFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7QUFDL0M7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgOCwgNzUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDd2aDtcclxufVxyXG4ubmF2PmxpPmE6Zm9jdXMsXHJcbi5uYXY+bGk+YTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDkwLCA2NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXY+bGk+YTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgOTAsIDY0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogOTFweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9KET":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "0oYm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");




class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 149, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Roboto", "rel", "stylesheet"], [1, "aboutus-section"], [1, "container"], [1, "row"], [1, "col-md-6", "col-sm-6", "col-xs-12"], [1, "aboutus"], [1, "aboutus-title"], [1, "aboutus-text"], ["href", "#", 1, "aboutus-more"], [1, "feature"], [1, "feature-box"], [1, "clearfix"], [1, "iconset"], [1, "glyphicon", "glyphicon-cog", "icon"], [1, "feature-content"], [1, "container", "team-sektion", "paddingTB60"], [1, "site-heading", "text-center"], [1, "border"], [1, "col-md-3", "team-box"], [1, "team-img", "thumbnail"], ["src", "assets/images/team/Paul.jpg", 1, "img"], [1, "team-content"], [1, "border-team"], [1, "social-icons"], ["href", "https://www.facebook.com/"], ["id", "social-fb", 1, "fa", "fa-facebook-square", "fa-3x", "social"], ["href", "https://twitter.com/"], ["id", "social-tw", 1, "fa", "fa-twitter-square", "fa-3x", "social"], ["href", "https://plus.google.com/"], ["id", "social-gp", 1, "fa", "fa-google-plus-square", "fa-3x", "social"], ["href", "mailto:bootsnipp@gmail.com"], ["id", "social-em", 1, "fa", "fa-envelope-square", "fa-3x", "social"], ["src", "assets/images/team/Lior.jpg", 1, "img"], ["src", "assets/images/team/Eden.jpg", 1, "img"], ["src", "assets/images/team/Talia.jpg", 1, "img"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Travel4u is a licensed travel agency located in Israel. We offer a variety of travel packages for individuals and groups, including:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Corporate, Business, & Group Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pacific & Atlantic Ocean Cruises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Caribbean & Mediterranean Sea Cruises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "All-Inclusive Resort Stays");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Safari Packages in Africa & Asia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Destination Weddings & Honeymoons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "European Vacations to Italy, France, and Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Latin American Vacations to Mexico, Cuba, and Argentina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Our agents have been recognized as among the most talented in the travel industry, and excel in creating one-of-a-kind vacations and destination events that offer truly breathtaking experiences at an affordable cost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Work with heart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "We work with you to choose the travel package that best fits your needs, create a customized itinerary and help you prepare for your trip to ensure that all goes smoothly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Optional Tours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "During your trip, you\u2019ll have the opportunity to participate in several optional tours. These tours go beyond the standard tourist experience, and are designed to give you a memorable glimpse into local culture, history, and entertainment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Our Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "We\u2019ve had the pleasure to work with many businesses, groups, and individuals over the years. Our dedication to creating outstanding travel experiences has allowed us to build quite the fan base, and much of our business comes from repeat customers and referrals from those who have had successful trips with us in the past.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "We have put together the best team for you to receive the best service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Paul Kolesnik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "President");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Hello! I'm Paul Kolesnik, I founded the company 'Travel4u' out of love for vacations and trips and so that I can allow people to experience the vacation of their dreams. My team and I are here to make sure your trip is memorable and meets all your expectations. Enjoy your vacation and thank you for choosing 'Travel4u'!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Lior Ohana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Vice President");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Hello! I'm Lior Ohana, planning a vacation for a client for me is like fulfilling his dream. Together with Paul, we have gathered for you the best agents who will take care of all your desires. We have created packages for your dream vacations in a variety of destinations. All you have to do is choose the destination and date and we will take care of the rest. Have a nice holiday and thank you for choosing us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Eden Mozes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Travel Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Hello! I\u2019m Eden Mozes, and I\u2019m responsible for ensuring every aspect of your experience with Travel4u is pleasing. I love travel myself, and have personally had the good fortune to visit many of the destinations that are available through our travel packages. I am passionate about helping others experience everything the world has to offer, and am quite excited to help you with your vacation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Talia Amsalem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Travel Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Hello! I\u2019m Talia Amsalem, I love sharing the excitement of planning a vacation with my clients and most of all love knowing that I helped them enjoy. I came to Travel4u as a client and after a few vacations, I realized I wanted to join the team and allow people to experience what I experienced during my vacations. Waiting to hear about your dreams and make them a reality.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\r\n  height: 55vh;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Roboto';\r\n  font-size: 16px;\r\n}\r\n\r\n.aboutus-section[_ngcontent-%COMP%] {\r\n  padding: 90px 0;\r\n}\r\n\r\n.aboutus-title[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  letter-spacing: 0;\r\n  line-height: 32px;\r\n  margin: 0 0 39px;\r\n  padding: 0 0 11px;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n  color: #000;\r\n}\r\n\r\n.aboutus-title[_ngcontent-%COMP%]::after {\r\n  background: #fdb801 none repeat scroll 0 0;\r\n  bottom: 0;\r\n  content: \"\";\r\n  height: 2px;\r\n  left: 0;\r\n  position: absolute;\r\n  width: 54px;\r\n}\r\n\r\n.aboutus-text[_ngcontent-%COMP%] {\r\n  color: #606060;\r\n  font-size: 13px;\r\n  line-height: 22px;\r\n  margin: 0 0 35px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\r\n  color: #ffb901;\r\n  text-decoration: none;\r\n  outline: 0;\r\n}\r\n\r\n.aboutus-more[_ngcontent-%COMP%] {\r\n  border: 1px solid #fdb801;\r\n  border-radius: 25px;\r\n  color: #fdb801;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  letter-spacing: 0;\r\n  padding: 7px 20px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%]   .feature-box[_ngcontent-%COMP%]   .iconset[_ngcontent-%COMP%] {\r\n  background: #fff none repeat scroll 0 0;\r\n  float: left;\r\n  position: relative;\r\n  width: 18%;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%]   .feature-box[_ngcontent-%COMP%]   .iconset[_ngcontent-%COMP%]::after {\r\n  background: #fdb801 none repeat scroll 0 0;\r\n  content: \"\";\r\n  height: 150%;\r\n  left: 43%;\r\n  position: absolute;\r\n  top: 100%;\r\n  width: 1px;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%]   .feature-box[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #0f0f0f;\r\n  font-size: 18px;\r\n  letter-spacing: 0;\r\n  line-height: 22px;\r\n  margin: 0 0 5px;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%]   .feature-box[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%] {\r\n  float: left;\r\n  padding-left: 28px;\r\n  width: 78%;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%]   .feature-box[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #0f0f0f;\r\n  font-size: 18px;\r\n  letter-spacing: 0;\r\n  line-height: 22px;\r\n  margin: 0 0 5px;\r\n}\r\n\r\n.feature[_ngcontent-%COMP%]   .feature-box[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #606060;\r\n  font-size: 13px;\r\n  line-height: 22px;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n  color: #f4b841;\r\n  padding: 0px;\r\n  font-size: 40px;\r\n  border: 1px solid #fdb801;\r\n  border-radius: 100px;\r\n  color: #fdb801;\r\n  font-size: 28px;\r\n  height: 70px;\r\n  line-height: 70px;\r\n  text-align: center;\r\n  width: 70px;\r\n}\r\n\r\n.paddingTB60[_ngcontent-%COMP%] {\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n}\r\n\r\n.site-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  margin-bottom: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.site-heading[_ngcontent-%COMP%] {\r\n  margin-inline-start: 250px;\r\n}\r\n\r\n.border[_ngcontent-%COMP%] {\r\n  background: #e1e1e1;\r\n  height: 1px;\r\n  width: 25%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 45px;\r\n}\r\n\r\n.team-content[_ngcontent-%COMP%] {\r\n  padding: 0px 15px 15px 15px;\r\n}\r\n\r\n.border-team[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e2e2e2;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.team-img[_ngcontent-%COMP%]:hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  max-height: 25vh;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  height: 220px;\r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgaGVpZ2h0OiA1NXZoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYWJvdXR1cy1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA5MHB4IDA7XHJcbn1cclxuXHJcbi5hYm91dHVzLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luOiAwIDAgMzlweDtcclxuICBwYWRkaW5nOiAwIDAgMTFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmFib3V0dXMtdGl0bGU6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmRiODAxIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDU0cHg7XHJcbn1cclxuXHJcbi5hYm91dHVzLXRleHQge1xyXG4gIGNvbG9yOiAjNjA2MDYwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtYXJnaW46IDAgMCAzNXB4O1xyXG59XHJcblxyXG5hOmhvdmVyLFxyXG5hOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmI5MDE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5hYm91dHVzLW1vcmUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZGI4MDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBjb2xvcjogI2ZkYjgwMTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5pY29uc2V0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxOCU7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLWJveCAuaWNvbnNldDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZGI4MDEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTUwJTtcclxuICBsZWZ0OiA0MyU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICB3aWR0aDogMXB4O1xyXG59XHJcblxyXG4uZmVhdHVyZSAuZmVhdHVyZS1ib3ggLmZlYXR1cmUtY29udGVudCBoNCB7XHJcbiAgY29sb3I6ICMwZjBmMGY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxufVxyXG5cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLWJveCAuZmVhdHVyZS1jb250ZW50IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgd2lkdGg6IDc4JTtcclxufVxyXG5cclxuLmZlYXR1cmUgLmZlYXR1cmUtYm94IC5mZWF0dXJlLWNvbnRlbnQgaDQge1xyXG4gIGNvbG9yOiAjMGYwZjBmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtYXJnaW46IDAgMCA1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlIC5mZWF0dXJlLWJveCAuZmVhdHVyZS1jb250ZW50IHAge1xyXG4gIGNvbG9yOiAjNjA2MDYwO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGNvbG9yOiAjZjRiODQxO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkYjgwMTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBjb2xvcjogI2ZkYjgwMTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLnBhZGRpbmdUQjYwIHtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLnNpdGUtaGVhZGluZyBoMyB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNpdGUtaGVhZGluZyB7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMjUwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxuLnRlYW0tY29udGVudCB7XHJcbiAgcGFkZGluZzogMHB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcblxyXG4uYm9yZGVyLXRlYW0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi50ZWFtLWltZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgbWF4LWhlaWdodDogMjV2aDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 49, vars: 0, consts: [[1, "container-fluid"], [1, "wrapper"], [1, "landing-page"], [1, "icon__download", 2, "text-align", "center"], ["xmlns", "http://www.w3.org/2000/svg", "id", "b599d709-684a-4b18-9cac-f9c979cf5115", "data-name", "Layer 1", "width", "977.71631", "height", "782.41658", "viewBox", "0 0 977.71631 782.41658", "src", "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/imagination_ok71.svg", "alt", "Imagination", 1, "item__image"], ["d", "M1088.85815,416.70662c0,45.97-13.23,89.54-36.9,128.54q-6.135,10.125-13.19995,19.82c-20.04,27.54-45.5,52.39-75.25,73.69q-2.73,1.95-5.5,3.86c-.7.48-1.39.96-2.09,1.44q-4.365,2.955-8.83,5.82c-.94.6-1.88,1.19-2.82,1.78-.8.51-1.61,1.01-2.42,1.51q-13.005,8.04006-26.9,15.21c-1.01.52-2.03,1.04-3.05,1.56-.88.44-1.76.89-2.65,1.33-.62.31-1.25.62-1.87.92-1.04.52-2.09,1.03-3.14,1.53q-4.095,1.965-8.25,3.85c-1.27.58-2.55,1.16-3.84,1.72a.07552.07552,0,0,1-.04.02c-1.28.57-2.56,1.13-3.85,1.68-1.18006.51-2.37,1.02-3.56,1.51q-5.37,2.265-10.83,4.38c-.75.3-1.51.59-2.27.88-1.05.4-2.09.8-3.15,1.19-1.35.5-2.69,1-4.04,1.49-1.26.46-2.52.91-3.79,1.36l-.27.09c-1.27.45-2.54.89-3.82,1.32q-9.86994,3.39-20.03,6.34c-.85.25-1.7.49-2.55.73-.38.12-.77.23-1.16.33-.99.28-1.98.56-2.98.83-1.22.35-2.45.68-3.69,1q-5.175,1.38-10.4,2.64c-1.18.29-2.35.57-3.53.84a.14463.14463,0,0,1-.07.02q-1.77.405-3.54.81c-1.65.38-3.31994.75-4.99,1.09-1.93.42-3.87.82-5.82,1.22-1.21.24-2.42.48-3.63.71-1.21.24-2.43005.47-3.64.69q-9.135,1.695-18.42,3.05c-2.3.33-4.6.65-6.92.96-1.42.19-2.85.37-4.28.54-1.25.15-2.51.3-3.76.44-1.25.15-2.5.28-3.76.42h-.01c-.12.02-.24.03-.36.04-2.05.22-4.11.42-6.17.62-1.21.12-2.42.22-3.64.32-1.09.1-2.19.18994-3.29.27q-4.93506.405-9.9.69-1.605.105-3.21.18c-2.28.13-4.56.23005-6.85.32-.95.04-1.91.08-2.86.11-2.56.09-5.13.15-7.7.2q-2.175.045-4.35.06-2.58.03-5.16.03c-83.21,0-178.85-28.5-257.63-69.93a553.716,553.716,0,0,1-57.37-34.57c-10.66-7.37-20.72-14.95-30.06-22.71-69.61-57.7-99.74-124.19-43.94-174.79q10.8-9.795,23.27-20.39,9.435-8.025,19.7-16.46c97.47-80.06,246.86005-185.08,346.03-265.15C867.01813-20.25341,1088.85815,249.91658,1088.85815,416.70662Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#62ad9b"], ["d", "M731.85815,569.20662l-41.03,5.32-2.09.27-54.61,7.08-249.27,32.33c-10.66-7.37-20.72-14.95-30.06-22.71l285.26-16.86,49.34-2.92,2.07-.12Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#f2f2f2"], ["d", "M550.85815,368.20662l-216.73,28.11q9.435-8.025,19.7-16.46Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#f2f2f2"], ["d", "M1051.95813,545.24659q-6.135,10.125-13.19995,19.82l-188.30005-24.42-103.6-13.44,101.91,6.03Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#f2f2f2"], ["d", "M963.50818,638.7566c-69.31,49.64-161.92005,79.95-263.65,79.95-83.21,0-178.85-28.5-257.63-69.93,6.23-16.15,14.91-29.24,26.98-35.87.3-.17.61-.34.92-.49a38.14439,38.14439,0,0,1,16.64-4.21c71-2,63,78,152-32,55.35-68.41,118.05-91.95,160.91-84.34.79.14,1.57.29,2.35.45,24.84,5.16,42.61,21.06,47.74,44.89,14,65-27,117,48,101A155.12159,155.12159,0,0,1,963.50818,638.7566Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#3f3d56"], ["d", "M753.24836,716.05355c-34.87988-19.44434-56.59375-45.99121-64.53906-78.90235-5.89941-24.43554-4.2041-51.93261,5.03809-81.72753a218.888,218.888,0,0,1,30.439-61.48438C794.82453,393.953,801.2,328.80159,794.10969,291.75277c-7.77393-40.62305-33.03125-57.49414-33.28564-57.65967l1.09033-1.67676c.26074.16943,26.18359,17.43262,34.14453,58.87988,4.58935,23.89453,2.43017,51.14063-6.41748,80.981-11.01172,37.1377-32.48438,78.459-63.82129,122.81641a216.90415,216.90415,0,0,0-30.1626,60.92187c-15.1582,48.86719-17.30273,115.99707,58.56445,158.292Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#d0cde1"], ["d", "M691.54426,526.912c-27.49805-15.32813-26.73242-39.6211-21.24805-57.30078a77.68749,77.68749,0,0,1,10.8042-21.8252c24.74658-35.02832,26.98291-57.7832,24.50147-70.7041-2.69531-14.03076-11.34131-19.791-11.42822-19.84766l1.08984-1.67676c.38428.24952,9.44824,6.28858,12.30224,21.14747,3.71631,19.34814-4.63818,43.65136-24.83154,72.23535A75.6765,75.6765,0,0,0,672.20637,470.203c-5.26514,16.97363-6.01514,40.28711,20.31152,54.96289Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#d0cde1"], ["d", "M815.26106,312.91292l-.97364-1.74707c26.32666-14.67627,25.57666-37.98974,20.31153-54.9624a75.67946,75.67946,0,0,0-10.52783-21.26318c-20.19336-28.5835-28.54786-52.88721-24.83155-72.23535,2.854-14.85889,11.918-20.89795,12.30225-21.14747l1.09131,1.67579c-.0874.05761-8.77735,5.89355-11.44483,19.92773-2.4541,12.91357-.19336,35.64893,24.51661,70.625a77.69728,77.69728,0,0,1,10.80419,21.82471C841.99348,273.29036,842.7591,297.58333,815.26106,312.91292Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#d0cde1"], ["d", "M873.97145,213.41a30,30,0,1,1-50.25129-32.78427c9.05313-13.87651,54.63149-28.834,54.63149-28.834S883.02457,199.53349,873.97145,213.41Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#3f3d56"], ["d", "M862.97145,120.41a30,30,0,1,1-50.25129-32.78427c9.05313-13.87651,54.63149-28.834,54.63149-28.834S872.02457,106.53349,862.97145,120.41Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#3f3d56"], ["d", "M861.54815,401.92659c-1.92-.45-47.21-10.98-62.31-3.79a31.00068,31.00068,0,0,0,13.38,58.99,30.5018,30.5018,0,0,0,6.7-.74,31.09548,31.09548,0,0,0,6.58-2.27c15.1-7.2,35.46-49,36.32-50.78l.55-1.12Zm-36.51,50.38a28.99815,28.99815,0,0,1-24.94-52.36c3.52-1.68,8.9-2.31,15.04-2.31,16.8,0,39.26,4.75,44.72,5.96C856.44818,410.4366,838.17816,446.04658,825.03815,452.30659Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#d0cde1"], ["d", "M725.25561,232.03846a30.87582,30.87582,0,0,1-20.873-8.07861c-12.36035-11.27051-19.69727-57.18652-20.00391-59.13574l-.19336-1.23242,1.24512.0791c1.96875.12549,48.36621,3.20459,60.72656,14.4751h0a30.98626,30.98626,0,0,1-20.90137,53.89257ZM686.56128,165.7577c1.27929,7.5293,8.416,46.91992,19.16894,56.72461a29.00026,29.00026,0,0,0,39.0791-42.85888h0C734.05639,169.81971,694.17651,166.33876,686.56128,165.7577Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#d0cde1"], ["d", "M683.48314,303.8848A30,30,0,0,1,643.05666,348.221c-12.24311-11.16347-19.68934-58.55194-19.68934-58.55194S671.24,292.72134,683.48314,303.8848Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#3f3d56"], ["d", "M775.42816,304.98658a17.15039,17.15039,0,0,0-16.69-13.51,17.53009,17.53009,0,0,0-3.66.4c-8.93994,1.94-24.83,21.41-25.5,22.23l-.79.97,1.12.56c.88.44,20.02,9.92,30.04,9.92a11.05066,11.05066,0,0,0,2.37994-.23,17.11671,17.11671,0,0,0,13.1-20.34Zm-4.02,11.8a14.9573,14.9573,0,0,1-9.51,6.59c-7.18,1.56-25.24-6.73-29.96-8.98,3.36-4,16.38-19.01,23.57-20.57a15.11325,15.11325,0,0,1,15.9,22.96Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#d0cde1"], ["cx", "422.21631", "cy", "715.77222", "rx", "417.5", "ry", "9.69734", "fill", "#3f3d56"], ["cx", "422.21631", "cy", "747.84803", "rx", "289.03846", "ry", "6.71354", "fill", "#3f3d56"], ["cx", "422.34837", "cy", "776.94004", "rx", "235.78148", "ry", "5.47653", "fill", "#3f3d56"], ["d", "M118.35815,469.36659s-14,33-3,36,16-36,16-36Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#ffb8b8"], ["points", "48.716 229.075 12.216 338.575 4.216 397.575 4.216 416.575 25.216 414.575 25.216 398.575 58.216 297.575 48.716 229.075", "fill", "#575a89"], ["d", "M186.35815,377.36659l-2,22,64,4v-49C248.35815,348.36659,186.35815,377.36659,186.35815,377.36659Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#ffb8b8"], ["d", "M153.35815,716.36659l-3,28,33-3s-9-22-10-25S153.35815,716.36659,153.35815,716.36659Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#ffb8b8"], ["points", "152.216 606.575 148.216 633.575 169.216 648.575 167.216 612.575 152.216 606.575", "fill", "#ffb8b8"], ["d", "M202.35815,385.36659h-18l-6,11s-39,28-39,86v128s-1,91,10,101l1.09842,6.59049.90158,5.40951,24-4s-2-8,1-15-2-46-2-46l6-61,36-89,45,64s-5,89-3,92-1,12-1,12h26l17-119-38-107s4-49-10-54S202.35815,385.36659,202.35815,385.36659Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#2f2e41"], ["d", "M273.35815,694.36659s-3.27559-15-9.13779-18-14.86221,5-14.86221,5-24,5-14,30l4,6s7-3,7,12,23,29,31,29,11-7,9-19-6-43.3189-6-43.3189Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#2f2e41"], ["d", "M172.28316,732.94392s-14.11335-6.04508-19.96016-3.01519-4.56127,15.00267-4.56127,15.00267-9.86827,22.44142,16.29109,28.82014l7.20749.22839s1.62322-7.44078,13.83419,1.27084,36.96568-1.881,41.61188-8.39353.69007-13.02014-10.24025-18.3613-38.749-20.27413-38.749-20.27413Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#2f2e41"], ["cx", "100.71631", "cy", "162.07488", "r", "34", "fill", "#ffb8b8"], ["points", "81.216 175.575 75.216 213.575 111.216 216.575 115.216 178.575 81.216 175.575", "fill", "#ffb8b8"], ["d", "M252.58271,293.80823a83.423,83.423,0,0,0-43.50914-35.15149c-2.79007-.969-15.60449-.79081-23.3391-.902a23.71078,23.71078,0,0,0-22.785,16.10629c-9.25964,27.236-21.5091,80.67079,15.40865,101.50556l8,7,71-20s-5-12-2-16,13-28,2-45C255.6436,298.71683,254.05052,296.18854,252.58271,293.80823Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#575a89"], ["d", "M255.85815,205.86659s7.11653-48.06537-43.70451-33.23456c0,0-35.95295-7.3129-48.65151,37.59055l-12.88906,47.078,5.89984-3.06592,2.60784,6.00245,9.4156,2.57781,4.20315-7.95848,1.77128,9.79659,77.34737,9.21358s-34.31466-21.19294-34.15871-57.992l6.47715,7.11336Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#2f2e41"], ["d", "M205.17488,169.41528H211.949a4.2634,4.2634,0,0,1,4.2634,4.2634v47.7366a0,0,0,0,1,0,0H200.91148a0,0,0,0,1,0,0v-47.7366a4.2634,4.2634,0,0,1,4.2634-4.2634Z", "transform", "translate(-144.86665 -14.97574) rotate(-11.10178)", "fill", "#62ad9b"], ["cx", "106.71631", "cy", "165.07488", "r", "18", "fill", "#d0cde1"], ["cx", "106.71631", "cy", "165.07488", "r", "10", "fill", "#62ad9b"], ["d", "M294.32622,498.14l4.849-6.363-.79538-.60612,3.26924-4.29005a9.60622,9.60622,0,0,0-1.8182-13.46321l-11.76129-8.96273a9.60622,9.60622,0,0,0-13.46325,1.81794L246.85372,502.691a9.60627,9.60627,0,0,0,1.81816,13.46326l11.7613,8.96273a9.60628,9.60628,0,0,0,13.46329-1.818l12.96708-17.016.79538.60612,4.84894-6.363-.79537-.60612,1.81835-2.38612Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#3f3d56"], ["cx", "173.71657", "cy", "422.07514", "r", "5", "fill", "#d0cde1"], ["d", "M245.35815,477.36659s5,41,14,39,7-43,0-43S245.35815,477.36659,245.35815,477.36659Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#ffb8b8"], ["d", "M214.35815,280.36659s-4,12-2,31,7,83,7,83,8,69,20,74l3,14,23-4-3-17a17.31349,17.31349,0,0,0,0-11c-2-6-18-161-18-161S240.35815,265.36659,214.35815,280.36659Z", "transform", "translate(-111.14185 -58.79171)", "fill", "#575a89"], ["routerLink", "/home"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "imagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ellipse", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ellipse", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "ellipse", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "polygon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "polygon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "polygon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "circle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 404 Error.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " We can't find the page you're looking for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  height: 65vh;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n  font-family: sans-serif;\r\n  color: rgba(0,0,0,0.75);\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  padding: 0px 30px;\r\n  background: #ddd;\r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  max-width: 960px;\r\n  width: 100%; \r\n  margin: 30px auto;\r\n  transform: scale(0.8);\r\n}\r\n.landing-page[_ngcontent-%COMP%] {\r\n  max-width: 960px;\r\n  height: 475px;\r\n  margin: 0;\r\n  box-shadow: 0px 0px 8px 1px #ccc;\r\n  background: #fafafa;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nsvg[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  max-height: 225px;\r\n  height: auto;\r\n  margin: 0 0 15px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  margin: 0;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  width: 35%; \r\n  margin: 16px auto 24px;\r\n  text-align: center;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  border-radius: 50px;\r\n  padding: 8px 24px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  background: #62AD9B;\r\n  color: #fff;\r\n  border: none;\r\n  box-shadow: 0 4px 8px 0 #ccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gIGhlaWdodDogNjV2aDtcclxufVxyXG4qIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxufVxyXG4ubGFuZGluZy1wYWdlIHtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGhlaWdodDogNDc1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDFweCAjY2NjO1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnN2ZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiAyMjVweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwIDAgMTVweDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDM1JTsgXHJcbiAgbWFyZ2luOiAxNnB4IGF1dG8gMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzYyQUQ5QjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgI2NjYztcclxufSJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.date = new Date();
        this.year = this.date.getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 60, vars: 1, consts: [[1, "container-fluid", "bg-grey", "py-5"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "logo-part"], ["src", "assets/images/travel.jpg", 1, "w-50", "logo-footer"], [1, "col-md-6", "px-4"], ["routerLink", "home", 1, "btn-footer"], ["routerLink", "contact", 1, "btn-footer"], ["href", "#"], [1, "social"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["aria-hidden", "true", 1, "fa", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " About Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We specialize in taking organized trips.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Help us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Paul Kolesnik, Lior Ohana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Talia Amsalem, Eden Mozes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \u00A9 ", ctx.year, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\r\n  font-family: 'Signika', sans-serif;\r\n}\r\n\r\n.bg-grey[_ngcontent-%COMP%] {\r\n  background: #292929;\r\n}\r\n\r\n.logo-footer[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  font-family: 'Playfair Display', serif;\r\n  margin-bottom: 40px;\r\n  position: relative;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  content: \"\";\r\n  background: grey;\r\n  width: 12%;\r\n  height: 1px;\r\n  left: 0;\r\n  bottom: -20px;\r\n}\r\n\r\n.btn-footer[_ngcontent-%COMP%] {\r\n  color: grey;\r\n\r\n  text-decoration: none;\r\n  border: 1px solid;\r\n  border-radius: 43px;\r\n  font-size: 13px;\r\n  padding: 7px 30px;\r\n  line-height: 47px;\r\n}\r\n\r\n.btn-footer[_ngcontent-%COMP%]:hover {\r\n\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n.form-footer[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 16px 0 0 16px;\r\n  outline: none;\r\n  padding-left: 10px;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n  font-size: 10px;\r\n  padding-left: 10px;\r\n  font-style: italic;\r\n}\r\n\r\n.form-footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%] {\r\n  border: none;\r\n  background: #232323;\r\n  margin-left: -5px;\r\n  color: #fff;\r\n  outline: none;\r\n  border-radius: 0 16px 16px 0;\r\n  padding: 2px 12px;\r\n}\r\n\r\n.social[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  font-size: 22px;\r\n  padding: 10px 15px;\r\n  background: #3c3c3c;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: block;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: grey;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #f5f5f5 !important;\r\n\r\n}\r\n\r\n.logo-part[_ngcontent-%COMP%] {\r\n  border-right: 1px solid grey;\r\n  height: 100%;\r\n  margin-block-start: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsT0FBTztFQUNQLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnU2lnbmlrYScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iZy1ncmV5IHtcclxuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xyXG59XHJcblxyXG4ubG9nby1mb290ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmZvb3RlciBwLFxyXG5hIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5mb290ZXIgaDYge1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5mb290ZXIgaDY6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgd2lkdGg6IDEyJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTIwcHg7XHJcbn1cclxuXHJcbi5idG4tZm9vdGVyIHtcclxuICBjb2xvcjogZ3JleTtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQzcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDdweCAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG59XHJcblxyXG4uYnRuLWZvb3Rlcjpob3ZlciB7XHJcblxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5mb3JtLWZvb3RlciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMCAwIDE2cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmZvcm0tZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjMjMyMzIzO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAxNnB4IDE2cHggMDtcclxuICBwYWRkaW5nOiAycHggMTJweDtcclxufVxyXG5cclxuLnNvY2lhbCAuZmEge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogIzNjM2MzYztcclxufVxyXG5cclxuZm9vdGVyIHVsIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5mb290ZXIgdWwge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuZm9vdGVyIHVsIGxpIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogZ3JleTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmxvZ28tcGFydCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAyNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoginComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Username must be between 4 and 10 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor() {
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    Submit() {
        console.log(this.formLogin);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 4, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "card-body"], ["role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "user_name", 1, "col-md-4", "col-form-label", "text-md-right"], [1, "col-md-6"], ["type", "text", "formControlName", "userName", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "btn", "btn-primary"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.Submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_span_13_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_span_14_Template, 3, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formLogin.get("userName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formLogin.get("userName").invalid && ctx.formLogin.get("userName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formLogin.get("password").invalid && ctx.formLogin.get("password").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);\r\n\r\nbody[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    font-size: .9rem;\r\n    font-weight: 400;\r\n    line-height: 1.6;\r\n    color: #212529;\r\n    text-align: left;\r\n    background-color: #f5f8fa;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    height: 65vh;\r\n}\r\n\r\n.navbar-laravel[_ngcontent-%COMP%]\r\n{\r\n    box-shadow: 0 2px 4px rgba(0,0,0,.04);\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .my-form[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]\r\n{\r\n    font-family: Raleway, sans-serif;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 1.5rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    margin-block-start: 75px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOztBQUV4RTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkscUNBQXFDO0FBQ3pDOztBQUVBOztJQUVJLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw0MDAsNjAwKTtcclxuXHJcbmJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG59XHJcblxyXG4ubmF2YmFyLWxhcmF2ZWxcclxue1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsLjA0KTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCAsIC5uYXYtbGluaywgLm15LWZvcm0sIC5sb2dpbi1mb3JtXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubXktZm9ybVxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLm15LWZvcm0gLnJvd1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm1cclxue1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIC5yb3dcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uY2FyZHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogNzVweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function RegisterComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Username must be between 4 and 10 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor() {
        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            FullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)])),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            BirthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    Submit() { console.log(this.formRegister); }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 48, vars: 8, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "card-body"], ["role", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "full_name", 1, "col-md-4", "col-form-label", "text-md-right"], [1, "col-md-6"], ["type", "text", "formControlName", "FullName", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "email_address", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "formControlName", "Email", 1, "form-control"], ["for", "user_name", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "formControlName", "UserName", 1, "form-control"], ["type", "password", "formControlName", "Password", 1, "form-control"], ["for", "phone_number", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "text", "formControlName", "PhoneNumber", 1, "form-control"], ["type", "date", "formControlName", "BirthDate", 1, "form-control"], [1, "col-md-6", "offset-md-4"], ["type", "submit", 1, "btn", "btn-primary"], [1, "error"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() { return ctx.Submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_span_13_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "E-Mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_span_19_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterComponent_span_25_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RegisterComponent_span_26_Template, 3, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegisterComponent_span_32_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RegisterComponent_span_38_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Birthday date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterComponent_span_44_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formRegister);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formRegister.get("FullName").invalid && ctx.formRegister.get("FullName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formRegister.get("Email").invalid && ctx.formRegister.get("Email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formRegister.get("UserName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formRegister.get("UserName").invalid && ctx.formRegister.get("UserName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formRegister.get("Password").invalid && ctx.formRegister.get("Password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formRegister.get("PhoneNumber").invalid && ctx.formRegister.get("PhoneNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formRegister.get("BirthDate").invalid && ctx.formRegister.get("BirthDate").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: .9rem;\r\n  font-weight: 400;\r\n  line-height: 1.6;\r\n  color: #212529;\r\n  text-align: left;\r\n  background-color: #f5f8fa;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  height: 70vh;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  height: auto;\r\n}\r\n\r\n.navbar-laravel[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, .04);\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .my-form[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%] {\r\n  font-family: Raleway, sans-serif;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%] {\r\n  padding-top: 1.5rem;\r\n  padding-bottom: 1.5rem;\r\n}\r\n\r\n.my-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  margin-block-start: 75px !important;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOztBQUV4RTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7Ozs7RUFJRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjMwMCw0MDAsNjAwKTtcclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyLWxhcmF2ZWwge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4wNCk7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQsXHJcbi5uYXYtbGluayxcclxuLm15LWZvcm0sXHJcbi5sb2dpbi1mb3JtIHtcclxuICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm15LWZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLm15LWZvcm0gLnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbi5jYXJke1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "9KET");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    {
        path: 'panel',
        loadChildren: () => __webpack_require__.e(/*! import() | components-panel-management-panel-management-module */ "components-panel-management-panel-management-module").then(__webpack_require__.bind(null, /*! ./components/panel-management/panel-management.module */ "TSgD")).then(m => m.PanelManagementModule)
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map