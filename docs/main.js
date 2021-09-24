(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container autosize=\"true\" scrollable=\"false\">\n  <mat-sidenav-content>\n    <mat-toolbar color=\"transparent\">\n      <button (click)=\"drawer.toggle()\" mat-icon-button class=\"example-icon\"\n        aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <!-- <span>{{this.title}}</span> -->\n      <span class=\"example-spacer\"></span>\n      <div fxShow=\"true\" fxHide.lt-sm=\"true\">  \n      <img src=\"./assets/branding/logo_koeln.png\"\n      class=\"brandinglogo\" >\n      <a href=\"https://www.zi.de\">\n        <img src=\"https://ziwebstorage.blob.core.windows.net/appradar/assets/logo_zi_small_transparent.png\"\n          class=\"brandinglogo\">       \n      </a>\n      </div>\n      <div fxShow=\"false\" fxShow.lt-sm=\"true\">  \n        <img src=\"./assets/branding/logo_koeln.png\"\n        class=\"brandinglogotiny\" >\n        <a href=\"https://www.zi.de\">\n          <img src=\"https://ziwebstorage.blob.core.windows.net/appradar/assets/logo_zi_small_transparent.png\"\n            class=\"brandinglogotiny\">       \n        </a>\n        </div>\n    </mat-toolbar>\n    <main>\n      <section class=\"mat-typography\">\n        <mat-drawer-container autosize>\n          <mat-drawer #drawer mode=\"push\" position=\"start\" autoFocus=\"false\">\n            <div class=\"menucontainer\">\n\n              <ng-container>\n                <p class=\"primarycolor\"><strong>Navigation</strong></p>\n              </ng-container>\n\n\n\n              <div>\n\n                <a mat-icon-button (click)=\"drawer.toggle()\" routerLink=\"/\">\n                  <mat-icon class=\"icon\">home</mat-icon>\n                  <span>Startseite</span>\n                </a>\n\n              </div>\n              <div *ngIf=\"this.loginoption && !this.loginstatus\" >\n\n                <a mat-icon-button (click)=\"drawer.toggle()\" routerLink=\"/login\">\n                  <mat-icon class=\"icon\">login</mat-icon>\n                  <span>Anmelden</span>\n                </a>\n\n              </div>\n              <div *ngIf=\"this.loginstatus\">\n\n                <a mat-icon-button (click)=\"drawer.toggle();\" routerLink=\"/private\">\n                  <mat-icon class=\"icon\">lock_open</mat-icon>\n                  <span>Interne Tools</span>\n                </a>\n\n              </div>\n              <div *ngIf=\"this.loginstatus\">\n\n                <a mat-icon-button (click)=\"drawer.toggle();\" routerLink=\"/profile\">\n                  <mat-icon class=\"icon\">account_box</mat-icon>\n                  <span>Benutzerprofil</span>\n                </a>\n\n              </div>\n              <div *ngIf=\"this.adminstatus\">\n\n                <a mat-icon-button (click)=\"drawer.toggle();\" routerLink=\"/admin\">\n                  <mat-icon class=\"icon\">admin_panel_settings</mat-icon>\n                  <span>Administration</span>\n                </a>\n\n              </div>\n              \n              <div *ngIf=\"this.loginstatus\">\n\n                <a mat-icon-button (click)=\"drawer.toggle();logout();\" href=\"./\">\n                  <mat-icon class=\"icon\">logout</mat-icon>\n                  <span>Ausloggen</span>\n                </a>\n\n              </div>\n\n\n            </div>\n          </mat-drawer>\n          <mat-drawer-content>\n            <!-- Offline message-->\n            <div class=\"offlinemsg\" *ngIf=\"false\"><strong>Keine Internetverbindung</strong><br>Dieses Portal benötigt\n              eine aktive Internetverbindung.</div>\n            <router-outlet></router-outlet>\n          </mat-drawer-content>\n        </mat-drawer-container>\n      </section>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n<!-- Footer nur für Desktop Screen -->\n<footer >\n  <div style=\"background: black!important;\">\n    <div fxLayout=\"column\" fxLayoutGap=\"0.5rem\">\n\n      <div fxLayout=\"column wrap\" fxLayoutAlign=\"space-around start\">\n        <div fxflex=28 fxHide.xs>\n          <p>\n            <mat-list style=\"color:white;\">\n              <mat-list-item>\n                <p style=\"color:white;\"><strong>Navigation</strong></p>\n              </mat-list-item>\n              <mat-list-item><a style=\"color:white;\" href=\"https://www.zi.de/meta/impressum\">Impressum</a>\n              </mat-list-item>\n              <mat-list-item><a style=\"color:white;\"\n                  href=\"https://www.zi.de/footer/datenschutzhinweis\">Datenschutzhinweise</a></mat-list-item>\n            </mat-list>\n\n          </p>\n\n        </div>\n\n        <div fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-between end\">\n          <div fxFlex>\n            <br>\n          </div>\n          <div style=\"padding:0.5rem;text-align: center;\">\n            <p>© 2020 Zentralinstitut für die kassenärztliche Versorgung in der Bundesrepublik\n              Deutschland</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/infobox/box/box.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/infobox/box/box.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card [style.background-color]=\"this.itemcolor\">\n    <div fxLayout=\"row\">\n    <div fxFlex>\n    <h1 *ngIf=\"!this.textbehind\">{{this.title}}{{this.value |  number: this.numberformat}}</h1>\n    <h1 *ngIf=\"this.textbehind\">{{this.value |  number: this.numberformat}} {{this.title}}</h1>\n    <p><span>{{this.description}}</span> </p>\n    </div>\n    <div fxFlex *ngIf=\"this.maticon\">\n        <span class=\"mat-headline\"><mat-icon inline=true >{{this.maticon}}</mat-icon></span>\n    </div>\n    </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leafletmap/map/map.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leafletmap/map/map.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!(this.basemap)\">\n  <mat-spinner color=\"primary\"></mat-spinner>\n</ng-container>\n\n<ng-container *ngIf=\"(this.basemap)\">\n<div  class=\"map-container\">\n    <div id=\"map-frame\" class=\"map-frame\">\n      \n    </div>    \n    <mat-spinner *ngIf=\"!this.mapok\" color=\"primary\"></mat-spinner>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plotly/plot/plot.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plotly/plot/plot.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-container *ngIf=\"!(this.plotdata && this.mainconfig && this.plotlayout)\">\n    <mat-spinner color=\"primary\"></mat-spinner>\n</ng-container>\n<ng-container *ngIf=\"this.plotdata && this.mainconfig && this.plotlayout\">\n    \n<plotly-plot class=\"plotlydiv\"\n[data]=\"this.plotdata\" [divId]=\"this.divid\" [debug]=\"true\"\n[layout]=\"this.plotlayout\" [config]=\"this.mainconfig\"\n[useResizeHandler]=\"true\" [style]=\"{position: 'relative', width: '100%', height: '100%'}\"\n></plotly-plot>  \n\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table/table/table.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/table/table/table.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.addfilter\">\n  <mat-form-field appearance=\"outline\" >\n    <mat-label>Suche</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Suche...\" #input>\n  </mat-form-field>\n</ng-container>\n\n<mat-table [(dataSource)]=\"this.datasource\" matSort class=\"mat-elevation-z0\">\n\n <ng-container *ngFor=\"let thecol of displayedColumns\">\n  <ng-container [matColumnDef]=\"thecol\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header> {{thecol}} </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> \n      <span *ngIf=\"this.outcomes_rate.indexOf(thecol)>=0\">{{element[thecol] | percent }}</span>\n      <span *ngIf=\"this.outcomes_numeric.indexOf(thecol)>=0\">{{element[thecol] | number }}</span>\n      <span *ngIf=\"(this.outcomes_rate.indexOf(thecol)<0) && (this.outcomes_numeric.indexOf(thecol)<0)\">{{element[thecol]}}</span>\n    </mat-cell >\n  </ng-container>\n</ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n<mat-paginator [pageSizeOptions]=\"this.pagesizes\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/admin.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/admin.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"1rem\">\n    <h1 ngClass.lt-sm=\"mobileheading\">Administration</h1>\n    <p class=\"mat-caption greycolor\"> Frontend Version: {{this.appversion}}, Backend Version: {{this.backenddoc['info']['version']}}</p>\n    <div *ngIf=\"!this.adduser && !this.adddata\" fxLayout=\"row wrap\" fxLayoutGap=\"1rem\"\n        fxLayoutAlign=\"start space-between\">\n        <div fxFlex=100>\n            <h2>Administrationsaufgaben</h2>\n            <p class=\"mat-caption greycolor\">In diesem Bereich können Dashboard Administratoren (\"Admin\") und \n                Zi-Administratoren (\"Superadmin\") Daten oder Nutzer*innen hinzufügen.</p>\n        </div>\n        <div>\n            <button mat-raised-button (click)=\"this.adduser=!this.adduser\" color=\"primary\">Nutzer hinzufügen</button>\n        </div>\n        <div fxShow.lt-md=false>\n            <button mat-raised-button (click)=\"this.adddata=!this.adddata\" color=\"primary\">Daten</button>\n        </div>\n\n    </div>\n    <div fxShow=false fxShow.lt-md=true>\n        <h4>Hinweis:</h4>\n        <p>Daten und Metadaten können nur auf großen Bildschirmen bearbeitet werden.</p>\n    </div>\n\n    <div *ngIf=\"!this.adduser && !this.adddata\">\n        <h2>Nutzerliste</h2>\n        <p class=\"mat-caption greycolor\">In diesem Bereich können Nutzerberechtigungen geändert werden.</p>\n        <mat-list>\n            <ng-container *ngFor=\"let user of this.users\">\n                <mat-list-item>\n                    <mat-icon color=\"primary\" fxHide.lt-md=true *ngIf=\"user['roles'].indexOf('superadmin')>=0\"\n                        mat-list-icon>admin_panel_settings\n                    </mat-icon>\n                    <mat-icon fxHide.lt-md=true *ngIf=\"user['roles'].indexOf('superadmin')<0\" mat-list-icon>\n                        account_circle</mat-icon>\n                    <div mat-line><strong>{{!user.lastname? 'k.A.': user.anrede+\" \"+user.lastname }} </strong>\n                        ({{user.email\n                        }})\n                        <a *ngIf=\"this.currentuser['is_superadmin']\" (click)=\"user.stammdaten=!user.stammdaten\"> ></a>\n                    </div>\n                    <div mat-line>\n                        <mat-chip-list *ngIf=\"!user.stammdaten\">\n                            <mat-chip color=\"primary\" (click)=\"this.updateuser(user.email,'user',!user['is_user'])\"\n                                [selected]=\"user['is_user']\">User</mat-chip>\n                            <mat-chip color=\"primary\" (click)=\"this.updateuser(user.email,'admin',!user['is_admin'])\"\n                                [selected]=\"user['is_admin']\">Admin</mat-chip>\n                            <mat-chip color=\"primary\"\n                                (click)=\"this.updateuser(user.email,'superadmin',!user['is_superadmin'])\"\n                                [selected]=\"user['is_superadmin']\">Superadmin</mat-chip>\n                        </mat-chip-list>\n                        <div *ngIf=\"user.stammdaten\" mat-line>\n                            <span style=\"color: lightgray;\">Nur für Admins</span>\n                            <mat-chip-list class=\"add-margin\" *ngIf=\"user.stammdaten\">\n                                <mat-chip *ngIf=\"!user.chpwd\" color=\"primary\" (click)=\"this.deletuser(user.email)\"\n                                    selected>löschen</mat-chip>\n                                <mat-chip *ngIf=\"!user.chpwd\" color=\"accent\"\n                                    (click)=\"user.chpwd=!user.chpwd;user.rndpwd=this.rndpwd();\" selected>password\n                                    zurücksetzen</mat-chip>\n                                <div class=\"add-margin\" *ngIf=\"user.chpwd\">\n                                    <p>Neues Password:</p>\n                                    <p><strong>{{user.rndpwd}}</strong> <a class=\"add-margin\"\n                                            (click)=\"this.copy(user.rndpwd)\">\n                                            <mat-icon>content_copy</mat-icon>\n                                        </a></p>\n                                    <p>\n                                        <mat-chip color=\"accent\" (click)=\"user.chpwd=!user.chpwd;\" selected>abbrechen\n                                        </mat-chip>&nbsp;&nbsp;<mat-chip color=\"primary\"\n                                            (click)=\"chpwd(user.email,user.rndpwd)\" selected>passwort setzen</mat-chip>\n                                    </p>\n                                </div>\n                            </mat-chip-list>\n                        </div>\n                        <div mat-line></div>\n                        <div fxHide.gt-sm=true mat-line></div>\n                    </div>\n                </mat-list-item>\n            </ng-container>\n        </mat-list>\n    </div>\n\n    <div fxLayout=\"row wrap\" *ngIf=\"this.adduser\">\n\n\n        <div fxFlex=100>\n            <h2><strong>Nutzer hinzufügen</strong></h2>\n            <mat-card>\n                <form autocomplete=\"on\" [formGroup]=\"myRegform\">\n                    <h2><strong>Informationen</strong></h2>\n                    <h4><strong>Name</strong>:</h4>\n                    <mat-form-field appearance=\"fill\" class=\"full-width\">\n                        <mat-label>Anrede</mat-label>\n                        <mat-select name=\"anredefeld\" formControlName=\"anrede\" required>\n                            <mat-option value=\"Herr\">Herr</mat-option><br>\n                            <mat-option value=\"Frau\">Frau</mat-option><br>\n                            <mat-option value=\"Frau Dr.\">Frau Dr.</mat-option><br>\n                            <mat-option value=\"Herr Dr.\">Herr Dr.</mat-option><br>\n                            <mat-option value=\"Dr.\">Dr.</mat-option><br>\n                            <mat-option value=\" \">Kein Anrede</mat-option><br>\n                        </mat-select>\n                        <mat-error>Bitte wählen Sie eine bevorzugte Anrede für sich</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"fill\" class=\"full-width\" required>\n                        <mat-label>Vorname</mat-label>\n                        <input matInput placeholder=\"First name\" name=\"fname\" formControlName=\"firstname\">\n                        <mat-error>Fehler: Wir benötigen den Vornamen für die Registrierung.</mat-error>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"fill\" class=\"full-width\" required>\n                        <mat-label>Nachname</mat-label>\n                        <input matInput placeholder=\"Last Name\" name=\"lname\" formControlName=\"lastname\">\n                        <mat-error>Fehler: Wir benötigen den Nachnamen für die Registrierung.</mat-error>\n                    </mat-form-field>\n                    <h4>Initiales <strong>Passwort</strong>:</h4>\n                    <mat-form-field appearance=\"fill\" class=\"full-width\">\n                        <mat-label>Passwort</mat-label>\n                        <mat-error>Passwort zu kurz</mat-error>\n                        <input matInput type=\"string\" formControlName=\"password\" required>\n                        <mat-hint>Bitte kopieren Sie das Passwort</mat-hint>\n                        <mat-hint *ngIf=\"this.myRegform.value.password.length<12\">Ihr Passwort (mindestens 12 Zeichen).\n                        </mat-hint>\n                    </mat-form-field>\n                    <br><br><br>\n                    <h4><strong>E-Mail</strong> des neuen Nutzers</h4>\n                    <mat-form-field appearance=\"fill\" class=\"full-width\">\n                        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                        <mat-icon matSuffix>email</mat-icon>\n                        <mat-error>Die E-Mail-Adresse ist ungültig</mat-error>\n                    </mat-form-field>\n                </form>\n            </mat-card>\n\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n            <div fxFlex=20><button [disabled]=\"this.myRegform.value.password.length<12\" mat-raised-button\n                    (click)=\"this.addusernow();\" color=\"accent\">Hinzufügen</button></div>\n            <div fxFlex=20><button mat-raised-button (click)=\"this.adduser=!this.adduser;\"\n                    color=\"primary\">Abbrechen</button></div>\n        </div>\n\n    </div>\n    <div *ngIf=\"this.adddata\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxShow.lt-md=false>\n        <h2><strong>Daten hinzufügen</strong></h2>\n        <p>Mehr Informationen <a href=\"./assets/docs/Upload_Dateien.html\">hier</a></p>\n        <mat-card>\n            <div>\n                <h3><strong>Was soll hochgeladen werden?</strong></h3>\n                <mat-radio-group [(ngModel)]=\"this.dataintend\">\n                    <mat-radio-button value=\"dataupload\">Daten hinzufügen&nbsp;&nbsp;</mat-radio-button>\n                    <mat-radio-button *ngIf=\"this.areavalues\" value=\"geodataupload\">Geodaten hinzufügen&nbsp;\n                    </mat-radio-button>\n                </mat-radio-group>\n                <br><br>\n            </div>\n            <div *ngIf=\"this.dataintend=='geodataupload'\" fxLayout=\"column\">\n                <div fxFlex=100>\n                    <h3><strong>1. GEOJSON Datei hochladen</strong> <span *ngIf=\"this.geojsonfile\">\n                            <mat-icon color=\"primary\">check_circle</mat-icon>\n                        </span></h3>\n                </div>\n                <div *ngIf=\"!this.geojsonfile\" fxFlex.lt-md=100 fxFlex=50 fxLayout=\"column\">\n                    <div fxFlex=100>\n                        <mat-form-field appearance=\"outline\" *ngIf=\"true\">\n                            <mat-label>Gebiet für Geodatendatei festlegen</mat-label>\n                            <mat-select [(value)]=\"this.uploadarea\">\n                                <mat-option *ngFor=\"let option of this.areavalues\" [value]=\"option\">{{option}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n\n                    </div>\n                    <div fxFlex=100>\n                        <input type=\"file\" accept='.geojson' style=\"display: none\"\n                            (change)=\"this.changeListenerGEOJSON($event);\" #dataInput>\n                        <br><br>\n                        <button [disabled]=\"!this.uploadarea\" mat-raised-button color=\"primary\"\n                            (click)=\"dataInput.click()\">Daten\n                            Auswählen</button>\n                    </div>\n                   \n                </div>\n                <div *ngIf=\"this.geojsonfile\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n                    <div fxFlex=100>\n                        <h3><strong>2. GEOJSON beschreiben</strong> <span *ngIf=\"this.geodatafile\">\n                                <mat-icon color=\"primary\">check_circle</mat-icon>\n                            </span></h3>                            \n                    </div>\n                    <div fxFlex=100>\n                        <p>Die Datei hat {{this.geojsonfile['features'].length | number}} Regionen.</p>\n                        <mat-form-field appearance=\"outline\" *ngIf=\"true\">\n                            <mat-label>Wie lautet die Bezeichnung Regionen im geojson?</mat-label>\n                            <mat-select [(value)]=\"this.uploadareaid\">\n                                <mat-option *ngFor=\"let option of this.areafeatures\" [value]=\"option\">{{option}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n\n                </div>\n            </div>\n\n            <div *ngIf=\"this.dataintend=='dataupload'\">\n\n                <h3><strong>1. CSV Datei hochladen</strong> <span *ngIf=\"this.datafile\">\n                        <mat-icon color=\"primary\">check_circle</mat-icon>\n                    </span></h3>\n\n                <div *ngIf=\"!this.datafile\" fxFlex.lt-md=100 fxFlex=50>\n\n                    <input type=\"file\" accept='.csv' style=\"display: none\"\n                        (change)=\"this.datafile=this.changeListener($event);\" #dataInput>\n                    <br><br>\n                    <button mat-raised-button color=\"primary\" (click)=\"dataInput.click()\">Daten\n                        Auswählen</button>\n                </div>\n            </div>\n        </mat-card>\n        <mat-card *ngIf=\"this.metadatafile && this.dataintend=='dataupload'\">\n            <div>\n\n                <h3><strong>2. Daten beschreiben</strong><span *ngIf=\"this.metadone\">\n                        <mat-icon color=\"primary\">check_circle</mat-icon>\n                    </span></h3>\n                <p>Bitte prüfen Sie die initinale Zuordnung sorgfältig. Jeder Upload muss mindestens zwei Variablen vom\n                    Bereich \"ordering\" enthalten\n                    (Typen: level,levelid). Ebenso sollten alle Subgruppenvariablen vom Typ Gruppe sein. Jede Variable\n                    aus den Bereichen \"ordering\" oder \"sungroups\" muss Angaben zur Referenzkategorie machen.\n                    Zellen für diese Kategorie müssen auch in der Tabelle zu finden sein. Die Variablen aus den\n                    Bereichen Outcomes oder\n                    Demography sollten vom Typ 'rate' oder 'number' sein. Das Hinzufügen einer Indikatorenbeschreibung\n                    ist optional.</p>\n            </div>\n            <div *ngIf=\"(this.datacheck.length>0)\">\n                <mat-list>\n                    <h3 matSubheader><strong>Gefundene Fehler:</strong></h3>\n                    <mat-list-item *ngFor=\"let hinweis of this.datacheck\">\n                        <mat-icon color=\"primary\" mat-list-icon>error</mat-icon>\n                        <div mat-line><span class=\"primarycolor\">{{hinweis}}</span></div>\n                    </mat-list-item>\n                </mat-list>\n            </div>\n            <div class=\"smalltab\" *ngIf=\"this.metadatafile && !this.metadone\" fxflex=100>\n\n                <div class=\"tabheader\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n                    <div fxFlex=15>Name</div>\n                    <div fxFlex=20>Thema</div>\n                    <div fxFlex=20>Typ</div>\n                    <div fxFlex>Referenzkategorie</div>\n                    <div fxFlex=15></div>\n\n                </div>\n\n                <div class=\"tabvalues primarycolor\" *ngFor=\"let row of this.metadatafile\" fxLayout=\"row wrap\"\n                    fxLayoutGap=\"10px\">\n                    <div fxFlex=15><br>{{row.varname}}</div>\n                    <div fxFlex=20>\n                        <mat-form-field appearance=\"outline\" *ngIf=\"true\">\n                            <mat-label>Bereich</mat-label>\n                            <mat-select [(value)]=\"row.topic\" (selectionChange)=\"this.checkmetadata()\">\n                                <mat-option *ngFor=\"let option of this.topicoptions\" [value]=\"option\">{{option}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=20>\n                        <mat-form-field appearance=\"outline\" *ngIf=\"true\">\n                            <mat-label>Art</mat-label>\n                            <mat-select [(value)]=\"row.type\" (selectionChange)=\"this.checkmetadata()\">\n                                <mat-option *ngFor=\"let option of this.typeoptions\" [value]=\"option\">{{option}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex>\n                        <ng-container *ngIf=\"['ordering','subgroups'].indexOf(row.topic)>=0\">\n                            <mat-form-field appearance=\"outline\" *ngIf=\"true\">\n                                <mat-label>Referenzkategorie</mat-label>\n                                <mat-select [(value)]=\"row.allforlevel\" (selectionChange)=\"this.checkmetadata()\">\n                                    <mat-option *ngFor=\"let option of this.getrefvalues(row.varname)\" [value]=\"option\">\n                                        {{option}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" *ngIf=\"row.type=='level'\">\n                                <mat-label>Öffentliche Raumebenen</mat-label>\n                                <mat-select [(value)]=\"row.publiclevels\" (selectionChange)=\"this.checkmetadata()\" multiple>\n                                    <mat-option *ngFor=\"let option of this.getrefvalues(row.varname)\" [value]=\"option\">\n                                        {{option}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </ng-container>\n                        <ng-container *ngIf=\"['ordering','subgroups'].indexOf(row.topic)<0\">\n\n                        </ng-container>\n\n                    </div>\n                    <div fxFlex=15>\n                        <mat-chip-list>\n                            <mat-chip color=\"primary\" (change)=\"this.checkmetadata()\" [selected]=\"row.public\"\n                                (click)=\"row.public=!row.public\">\n                                <span *ngIf=\"row.public\">Öffentlich</span>\n                                <span *ngIf=\"!row.public\">Privat</span>\n                            </mat-chip>\n                            <mat-chip color=\"primary\" [selected]=\"row.adddescr\" (click)=\"row.adddescr=!row.adddescr\">\n                                Beschreibung\n                            </mat-chip>\n                        </mat-chip-list>\n                    </div>\n                    <div *ngIf=\"row.adddescr\" fxFlex=100>\n                        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n                            <mat-label>Indikatorenbeschreibung</mat-label>\n                            <textarea style=\"color:black\" [(ngModel)]=\"row.description\" matInput rows=\"10\"\n                                cols=\"40\"></textarea>\n                        </mat-form-field>\n\n                    </div>\n                </div>\n                <div>\n                    <div><button mat-raised-button [disabled]=\"!(this.datacheck.length==0)\" (click)=\"this.metadone=true\"\n                            color=\"accent\">Beschreibung\n                            Fertig</button></div>\n\n                </div>\n\n            </div>\n        </mat-card>\n\n        <div *ngIf=\"this.metadone\">\n            <mat-card>\n                <h3><strong>3. Sollen die aktuellen Daten überschrieben werden?</strong></h3>\n                <p>\n                    <mat-slide-toggle [(ngModel)]=\"this.replacedata\"></mat-slide-toggle>\n                    <span style=\"color:crimson;\" *ngIf=\"this.replacedata\">überschreiben</span>\n                    <span *ngIf=\"!this.replacedata\">nicht überschreiben.</span>\n\n                </p>\n                <p *ngIf=\"!this.replacedata\"><em>Achtung: Das Ergänzen der Daten ist aufwändig und erfordert ggf. viel\n                        Zeit. Bitte ergänzen Sie nur kleine Datenkörper!</em></p>\n            </mat-card>\n        </div>\n\n\n\n        <div class=\"add-margin\" fxLayoutAlign=\"space-between\" \n        *ngIf=\"(!this.uploadres || this.uploadres=='error')\">\n            <div><button mat-raised-button (click)=\"uploadnewdata()\" [disabled]=\"(!this.metadone) && (!this.uploadareaid)\"\n                    color=\"accent\">Hinzufügen\n\n                </button></div>\n            <div><button mat-raised-button (click)=\"this.resetall();\" color=\"primary\">Abbrechen</button></div>\n        </div>\n        <div *ngIf=\"this.uploadres\">\n            <mat-card>\n                <h1>Datenupload</h1>\n                <mat-spinner *ngIf=\"this.uploadres=='pending'\" [diameter]=\"50\"></mat-spinner>\n                <p *ngIf=\"this.uploadres=='pending'\">Hinweis: Bitte haben Sie Geduld: Es kann etwas dauern wenn viele\n                    Daten aktualisiert oder gelöscht werden müssen.</p>\n                <p *ngIf=\"this.uploadres=='success'\">\n                    <strong>Upload erfolgreich!</strong>\n                </p>\n                <p *ngIf=\"this.uploadres=='error'\">\n                    <strong>Fehler beim Upload</strong> Fehlermeldung: <span\n                        class=\"primarycolor\">{{this.uploaderror}}</span>\n                </p>\n            </mat-card>\n        </div>\n    </div>\n   \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"1rem\">\n    <div fxFlex=100 style=\"max-width: 500px;\" *ngIf=\"!this.loggedin\">\n        <mat-card>\n            <form [formGroup]='form' (ngSubmit)='login()'>\n                <h1>Login</h1>\n                <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>E-Mail</mat-label>\n                    <input matInput type=\"email\" placeholder=\"Email\" name=\"email\" formControlName='username' autocomplete=\"true\" required>\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Kennwort</mat-label>\n                    <input matInput type=\"password\" name=\"current-password\" formControlName='password' required autocomplete=\"true\">\n                </mat-form-field>\n\n                <div *ngIf=\"!this.login_pending\" fxLayout=\"row\" fxLayoutGap=\"1rem\" fxLayoutAlign=\"space-between\">\n                    <div>\n                        <button mat-raised-button color=\"primary\" type='submit' [disabled]='!this.form.valid' >\n                            Login\n                        </button>\n                    </div>\n                    <div>\n                        <button mat-raised-button color=\"accent\" (click)=\"logout()\">\n                            Abbrechen\n                        </button>\n                    </div>\n                </div>\n                <div *ngIf=\"this.login_pending\">\n                    ... in Bearbeitung ... \n                </div>\n                <div *ngIf=\"this.loginerror\">\n                    <p style=\"color:crimson;\">Falscher Benutzername/Falsches Kennwort</p>\n                </div>\n            </form>\n        </mat-card>\n    </div>\n\n    <div *ngIf=\"this.loggedin\">\n        You're in!\n        <button mat-raised-button color=\"accent\" (click)=\"logout()\">\n            Ausloggen\n        </button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/private.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/private.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"30px\">\n    <div>\n        <h1 ngClass.lt-sm=\"mobileheading\">Interne Tools</h1>\n        <mat-chip-list>\n            <mat-chip *ngFor=\"let action of this.actions\" color=\"primary\" [selected]=\"this.action==this.intend\"\n                (click)=\"this.intend=action\">{{action}}</mat-chip>\n        </mat-chip-list>\n    </div>\n    <div *ngIf=\"this.intend=='Regionen beschreiben'\">\n        <div>\n            <mat-chip-list>\n                <ng-container *ngFor=\"let item of this.levelvalues\">\n                    <mat-chip (click)=\"this.newlevel(item)\" [selected]=\"this.currentlevel==item\" color=\"primary\">\n                        {{item}}\n                    </mat-chip>\n                </ng-container>\n            </mat-chip-list>\n        </div>\n        <div *ngIf=\"this.mapdata\" fxLayoutGap=\"15px\">\n            <div class=\"add-margin\">\n                <h3 *ngIf=\"!this.currentregion\">Bitte wählen Sie eine Region</h3>\n            </div>\n            <div>\n                <div> \n                    <app-map [containername]=\"'mapdiv'\" [basemap]=\"this.mapdata\" [(id)]=\"this.levelid\" opacity=.8 Zoom=10\n                    selectmap=\"true\" (clicked)=\"changeregion($event)\"></app-map>\n                </div>\n                <div>\n                    <mat-form-field appearance=\"fill\" class=\"full-width\">\n                        <mat-label>Ihre Auswahl</mat-label>\n                        <mat-select [(value)]=\"this.currentregion\" (selectionChange)=\"changeregion(this.currentregion);\">\n                            <ng-container *ngFor=\"let item of this.mapdata_properties\">\n                                <mat-option [(value)]=\"item.levelid\"><strong>{{item.levelid}}</strong></mat-option><br>\n                            </ng-container>\n                        </mat-select>\n                    </mat-form-field>                    \n                </div>\n                \n            </div>\n            <div *ngIf=\"this.regiondata && this.overalldata\">\n                <h2>Sozialindikatoren</h2>\n                <div class=\"add-margin\" class=\"greycolor\">\n                    <div class=\"add-margin\" fxFlexAlign=\"start\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n                        <div fxFlex=60>Merkmal</div>\n                        <div fxFlex fxLayout=\"row\" fxLayoutGap=\"10px\">\n                            <div fxFlex=50 fxFlexAlign=\"start start\">\n                                Ausprägung\n                            </div>\n                            <div fxFlex>\n                                Vergleich mit Durchschnitt\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"add-margin\">\n                    <ng-container *ngFor=\"let item of this.metadata\">\n                        <div *ngIf=\"item.topic=='demography'\" fxFlexAlign=\"start\" fxLayout=\"row wrap\"\n                            fxLayoutGap=\"10px\">\n                            <div fxFlex=60><strong>{{item.varname  | replace : '[_]' : '.'}}</strong></div>\n                            <div fxFlex fxLayout=\"row\" fxLayoutGap=\"10px\">\n                                <div fxFlex=50 fxFlexAlign=\"start start\">\n                                    <span class=\"primarycolor\" *ngIf=\"item.type=='rate'\">{{this.regiondata[item.varname]\n                                        | percent }}</span>\n                                    <span class=\"primarycolor\"\n                                        *ngIf=\"item.type!=='rate'\">{{this.regiondata[item.varname] | number }}</span>\n                                </div>\n                                <div fxFlex>\n                                    <span class=\"accentcolor\"\n                                        *ngIf=\"this.regiondata[item.varname]<((1/1.5)*this.overalldata[item.varname])\">\n                                        <mat-icon>remove_circle</mat-icon>\n                                    </span>\n                                    <span class=\"accentcolor\"\n                                        *ngIf=\"this.regiondata[item.varname]<((1/2.5)*this.overalldata[item.varname])\">\n                                        <mat-icon>remove_circle</mat-icon>\n                                    </span>\n                                    <span class=\"primarycolor\"\n                                        *ngIf=\"this.regiondata[item.varname]>=(1.5*this.overalldata[item.varname])\">\n                                        <mat-icon>add_circle</mat-icon>\n                                    </span>\n                                    <span class=\"primarycolor\"\n                                        *ngIf=\"this.regiondata[item.varname]>=(2.5*this.overalldata[item.varname])\">\n                                        <mat-icon>add_circle</mat-icon>\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n                    </ng-container>\n\n                </div>\n                <h2>Gesundheitsindikatoren</h2>\n                <div class=\"add-margin\" class=\"greycolor\">\n                    <div class=\"add-margin\" fxFlexAlign=\"start\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n                        <div fxFlex=60>Merkmal</div>\n                        <div fxFlex fxLayout=\"row\" fxLayoutGap=\"10px\">\n                            <div fxFlex=50 fxFlexAlign=\"start start\">\n                                Ausprägung\n                            </div>\n                            <div fxFlex>\n                                Vergleich mit Durchschnitt\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"add-margin\">\n\n                    <ng-container *ngFor=\"let item of this.metadata\">\n                        <div *ngIf=\"item.topic=='outcomes'\" fxFlexAlign=\"start\" fxLayout=\"row wrap\" fxLayoutGap=\"15px\">\n                            <div fxFlex=60><strong>{{item.varname  | replace : '[_]' : '.'}}</strong></div>\n                            <div fxFlex fxLayout=\"row\" fxLayoutGap=\"10px\">\n                                <div fxFlex=50 fxFlexAlign=\"start start\">\n                                    <span class=\"primarycolor\" *ngIf=\"item.type=='rate'\">{{this.regiondata[item.varname]\n                                        | percent }}</span>\n                                    <span class=\"primarycolor\"\n                                        *ngIf=\"item.type!=='rate'\">{{this.regiondata[item.varname] | number }}</span>\n                                </div>\n                                <div fxFlex>\n                                    <span class=\"accentcolor\"\n                                        *ngIf=\"this.regiondata[item.varname]<((1/1.5)*this.overalldata[item.varname])\">\n                                        <mat-icon>remove_circle</mat-icon>\n                                    </span>\n                                    <span class=\"accentcolor\"\n                                        *ngIf=\"this.regiondata[item.varname]<((1/2.5)*this.overalldata[item.varname])\">\n                                        <mat-icon>remove_circle</mat-icon>\n                                    </span>\n                                    <span class=\"primarycolor\"\n                                        *ngIf=\"this.regiondata[item.varname]>=(1.5*this.overalldata[item.varname])\">\n                                        <mat-icon>add_circle</mat-icon>\n                                    </span>\n                                    <span class=\"primarycolor\"\n                                        *ngIf=\"this.regiondata[item.varname]>=(2.5*this.overalldata[item.varname])\">\n                                        <mat-icon>add_circle</mat-icon>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n    <div *ngIf=\"this.intend=='Analysen'\" fxLayout=\"column\" fxLayoutGap=\"15px\">\n        <div *ngIf=\"this.levelvalues\">\n            <mat-chip-list>\n                <ng-container *ngFor=\"let item of this.levelvalues\">\n                    <mat-chip (click)=\"this.currentlevel=item;this.getregionandata();this.getregresults();\"\n                        [selected]=\"this.currentlevel==item\" color=\"primary\">\n                        {{item  | replace : '[_]' : '.'}}\n                    </mat-chip>\n                </ng-container>\n            </mat-chip-list>\n        </div>\n        <div *ngIf=\"this.outcomes && this.currentlevel\" fxLayout=\"row wrap\" fxLayoutGap=\"15px\" fxLayoutAlign=\"space-between\">\n            <div fxFlex=45 fxFlex.lt-md=100>\n                <h4><strong>Gesundheitsindikator</strong>:</h4>\n                <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Variablenauswahl</mat-label>\n                    <mat-select [(value)]=\"this.outcome\" (selectionChange)=\"this.getregionandata();this.getregresults();\">\n                        <mat-option value=\"\">Keine Auswahl</mat-option><br>\n                        <ng-container *ngFor=\"let item of this.outcomes\">\n                            <mat-option [value]=\"item.varname\"><strong>{{item.varname  | replace : '[_]' : '.'}}</strong></mat-option><br>\n                        </ng-container>\n                    </mat-select>\n                </mat-form-field>\n                <mat-error *ngIf=\"this.determinant && !this.outcome\">Bitte wählen Sie ein Outcome aus</mat-error>\n            </div>\n            <div fxFlex=45 fxFlex.lt-md=100>\n                <h4><strong>Erklärende Variable</strong>:</h4>\n                <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Variablenauswahl</mat-label>\n                    <mat-select [(value)]=\"this.determinant\" (selectionChange)=\"this.getregionandata();this.getregresults();\">\n                        <mat-option value=\"\">Keine Auswahl</mat-option><br>\n                        <ng-container *ngFor=\"let item of this.outcomes.concat(this.determinants)\">\n                            <ng-container *ngIf=\"item.varname!=this.outcome\">\n                                <mat-option [value]=\"item.varname\">{{item.varname  | replace : '[_]' : '.'}}</mat-option><br>\n                            </ng-container>\n                        </ng-container>\n                    </mat-select>\n                </mat-form-field>\n                <mat-error *ngIf=\"!this.determinant && this.outcome\">Bitte wählen Sie eine erklärende Variable aus\n                </mat-error>\n            </div>\n        </div>\n        <div *ngIf=\"this.andata\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n            <div fxLayout=\"row wrap\" *ngIf=\"this.andata\">\n                <div fxFlex=100>\n                <h3>Werteverteilungen</h3>\n                </div>\n                <div class=\"minsize\" *ngIf=\"this.andata\" fxFlex=45>\n                    <app-plot [data]=\"this.andata\" [custommargins]=\"{ l: 0, r: 40, b: 150, t: 0 }\"\n                        [xvalue]=\"[this.outcome]\" [outcomes]=\"[this.outcome]\" [percent]=\"true\"\n                        [colorscheme]=\"[this.api.makescale(3)[2]]\" plottype=\"violin\"></app-plot>\n                </div>\n                <div class=\"minsize\" *ngIf=\"this.andata\" fxFlex=45>\n                    <app-plot [data]=\"this.andata\" [custommargins]=\"{ l: 0, r: 40, b: 150, t: 0 }\"\n                        [xvalue]=\"[this.determinant]\" [outcomes]=\"[this.determinant]\" [percent]=\"true\"\n                        [colorscheme]=\"[this.api.makescale(3)[1]]\" plottype=\"violin\"></app-plot>\n                </div>\n            </div>\n            <div class=\"minsize\" *ngIf=\"this.andata\" fxFlex=100 fxFlex.lt-md=100>\n                <h3>Streudiagramm</h3>\n                <app-plot [(data)]=\"this.andata\" [xvalue]=\"this.determinant\" [id]=\"this.levelid\"\n                    [outcomes]=\"[this.outcome]\" [percent]=\"true\" [percentx]=\"true\"\n                    [xtitle]=\"this.determinant\" [ytitle]=\"this.outcome+'<br>'\" \n                    [colorscheme]=\"[this.api.makescale(3)[2]]\" plottype=\"scatter\"></app-plot>\n            </div>\n            <div  *ngIf=\"this.andata\">\n                <h2>Zusammenhangsanalyse</h2>\n                <mat-chip-list>\n                    <ng-container *ngFor=\"let item of this.outcomes.concat(this.determinants)\">\n                        <ng-container *ngIf=\"[this.determinant,this.outcome].indexOf(item.varname)<0 \">\n                            <mat-chip *ngIf=\"this.controls.indexOf(item.varname)<0 \" color=\"primary\" [selected]=\"false\"\n                                (click)=\"this.controls.push(item.varname);this.getregresults();\">\n                                {{item.varname  | replace : '[_]' : '.'}}\n                            </mat-chip>\n                            <mat-chip *ngIf=\"this.controls.indexOf(item.varname)>=0 \" color=\"primary\" [selected]=\"true\"\n                                (click)=\"this.removeoutcome(item.varname);this.getregresults();\">\n                                {{item.varname  | replace : '[_]' : '.'}}\n                            </mat-chip>\n                        </ng-container>\n                    </ng-container>\n                </mat-chip-list>\n            </div>\n            <div class=\"add-margin\" *ngIf=\"this.andata && this.regressiondata\">\n                <h3>Ergenisse der Zusammenhangsanalyse</h3>\n                <div class=\"minsize\" *ngIf=\"this.regressiondata['data']\">\n                    <app-plot [data]=\"this.regressiondata['data']\"\n                    [xvalue]=\"[this.determinant]\" [outcomes]=\"['base','controlled']\" [percent]=\"true\"\n                    [colorscheme]=\"this.api.makescale(2)\" [outcomelabels]=\"['allgemeiner Zusammenhang','mit Kontrollvariablen']\" \n                    [xtitle]=\"this.determinant\" [ytitle]=\"this.outcome+'<br>'\" \n                    plottype=\"lines\"></app-plot>\n                </div>\n                <div class=\"add-margin\" *ngIf=\"this.regressiondata.params\">\n                    <mat-card style=\"max-width: 450px;\">\n                    <h2>Modellzusammenfassung</h2>\n                    <div class=\"add-margin\">\n                        <h3>Outcome</h3>\n                        <p><strong>{{this.outcome}}</strong></p>\n                    </div>\n                    \n\n                    <div class=\"add-margin\">\n                    <h3>Parameter</h3>\n                    <div  fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between\">\n                        <div fxFlex=60>\n                            Variable\n                        </div>\n                        <div fxFlex=15>\n                            Effekt\n                        </div>\n                        <div fxFlex=15>\n                            P-Wert\n                        </div>\n                    </div>\n                    <ng-container *ngFor=\"let theparam of [this.determinant].concat(this.controls)\">\n                        <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between\">\n                            <div fxFlex=60>\n                                <strong>{{theparam}}</strong>\n                            </div>\n                            <div fxFlex=15>\n                                <span class=\"primarycolor\"><strong>{{this.regressiondata.params[theparam] |  number: '1.3-3'}}</strong></span>\n                            </div>\n                            <div fxFlex=15>\n                                <span *ngIf=\"this.regressiondata.pvalues[theparam]<.05\"><strong>{{this.regressiondata.pvalues[theparam] |  number: '1.3-3' }}</strong></span>\n                                <span *ngIf=\"this.regressiondata.pvalues[theparam]>=.05\">{{this.regressiondata.pvalues[theparam] |  number: '1.3-3' }}</span>\n                            </div>\n                        </div>\n\n                    </ng-container>\n                    </div>\n                    <div class=\"add-margin\">\n                    <p>Modellgüte R<sup>2</sup>: <span class=\"primarycolor\"><strong>{{this.regressiondata.r2 | percent}}</strong></span></p>\n                    <p>Beobachtungen: n=<span class=\"primarycolor\"><strong>{{this.regressiondata.data.length | number}}</strong></span></p>\n                    </div>\n                    </mat-card>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"this.intend=='Daten exportieren'\">\n            <h2>Daten</h2>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutGap=\"1rem\"  fxLayoutAlign=\"space-around\"\n*ngIf=\"!(this.deleteresult=='success')\" >\n    <div class=\"small\">\n    <h1>Ihre Nutzerdaten</h1>    \n            <div fxLayout=\"row wrap\"  fxLayoutGap=\"1rem\">\n                <div fxFlex=20 fxFlex.lt-md=100>Name:</div>\n                <div fxFlex><strong>{{this.userdetails.anrede+' '+this.userdetails.firstname+' '+this.userdetails.lastname}}</strong></div>\n            </div>\n            <div fxLayout=\"row wrap\"  fxLayoutGap=\"1rem\">\n                <div fxFlex=20 fxFlex.lt-md=100>E-Mail:</div>\n                <div fxFlex><strong>{{this.userdetails.email}}</strong></div>\n            </div>\n            <div fxLayout=\"row wrap\"  fxLayoutGap=\"1rem\">\n                <div fxFlex=20 fxFlex.lt-md=100>Rolle:</div>\n                <div fxFlex><strong>{{this.userdetails.roles}}</strong></div>\n            </div>\n            <div *ngIf=\"this.userdetails.dashboards.length>0\" fxLayout=\"row wrap\"  fxLayoutGap=\"1rem\" >\n                <div fxFlex=20 fxFlex.lt-md=100>Dashboards:</div>\n                <div fxFlex><strong>{{this.userdetails.dashboards}}</strong></div>\n            </div>\n            <div *ngIf=\"this.userdetails.dashboard_admin.length>0\" fxLayout=\"row wrap\"  fxLayoutGap=\"1rem\">\n                <div fxFlex=20 fxFlex.lt-md=100>Dashboard Admin:</div>\n                <div fxFlex><strong>{{this.userdetails.dashboard_admin}}</strong></div>\n            </div>\n            <div *ngIf=\"this.userdetails.wrong_logins>0\" fxLayout=\"row wrap\"  fxLayoutGap=\"1rem\">\n                <div fxFlex=20 fxFlex.lt-md=100>Fehlerhafte Loginversuche seit der letzten Anmeldung:</div>\n                <div fxFlex><strong>{{this.userdetails.wrong_logins}}</strong></div>\n            </div>\n            <div class=\"add-margin\" style=\"max-width:400px;\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\" fxLayoutGap=\"1rem\">\n                <div class=\"add-margin\"><button mat-raised-button (click)=\"this.action='chpwd'\" color=\"primary\">Passwort ändern</button></div>\n                <div class=\"add-margin\"><button mat-raised-button (click)=\"this.action='deleteaccount'\" color=\"accent\">Account löschen</button></div>\n            </div>\n            <div fxLayout=\"column\" *ngIf=\"this.action=='chpwd'\" style=\"max-width: 450px;\">\n                <div ><h1>Passwort ändern</h1></div>\n                <div *ngIf=\"!this.pwdchange.ok\">\n                    \n                        <mat-form-field  class=\"full-width\" appearance=\"fill\">\n                          <mat-label>Aktuelles Passwort</mat-label>\n                          <input  type=\"password\"  [disabled]=\"this.pwdchange.progress\"  matInput value=\"\" [(ngModel)]=\"this.pwdrequest.oldpwd\">                          \n                        </mat-form-field>\n                      \n                        <mat-form-field  class=\"full-width\" appearance=\"fill\">\n                          <mat-label>Neues Passwort</mat-label>\n                          <input type=\"password\" [disabled]=\"this.pwdchange.progress\" matInput value=\"\" [(ngModel)]=\"this.pwdrequest.newpwd\">\n                          <mat-hint>Mindestlänge 10 Zeichen</mat-hint>\n                        </mat-form-field>\n                </div>\n                <div>\n                    <mat-hint *ngIf=\"this.pwdchange.progress\">ändere das Passwort...</mat-hint>\n                    <p  *ngIf=\"(this.pwdchange.done && !this.pwdchange.ok)\"><mat-icon style=\"color:red\">error</mat-icon> Fehler: Bitte prüfen Sie das aktuelle Passwort!</p>\n                                            <p *ngIf=\"(this.pwdchange.done && this.pwdchange.ok)\"><mat-icon style=\"color:green\">check_circle</mat-icon>Änderung erfolgreich, Sie bleiben eingeloggt.</p>\n                </div>\n                <div *ngIf=\"!this.pwdchange.ok\" class=\"add-margin\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                    <div><button  mat-raised-button (click)=\"this.action=''\" color=\"primary\">Abbrechen</button></div>\n                    <div><button mat-raised-button [disabled]=\"this.pwdrequest.newpwd.length<10\" (click)=\"this.chpwd()\" color=\"accent\">Ändern</button></div>\n                </div>\n            </div>\n            <div *ngIf=\"this.action=='deleteaccount'\"  style=\"max-width: 450px;\">\n                <h1>Account löschen</h1>\n                <div>\n                    <p>Warnung: Diese Aktion kann nicht rückgängig gemacht werden</p>\n                    <p>Bitte geben Sie Ihr aktuelles Passwort zur Sicherheit ein:</p>\n                    <mat-form-field  class=\"full-width\" appearance=\"fill\">\n                        <mat-label>Aktuelles Passwort</mat-label>\n                        <input  type=\"password\"  matInput value=\"\" [(ngModel)]=\"this.deleterequest.pwd\">                          \n                      </mat-form-field>\n                </div>\n                <div class=\"add-margin\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                    <div><button mat-raised-button (click)=\"this.action=''\" color=\"primary\">Abbrechen</button></div>\n                    <div><button mat-raised-button (click)=\"this.deleteaccount()\" [disabled]=\"this.deleterequest.pwd.length<10\" color=\"primary\">Jetzt löschen</button></div>\n                </div>\n                <div *ngIf=\"this.deleteresult=='error'\">\n                    <p style=\"color:crimson\">Es ist ein Fehler aufgetreten, bitte prüfen Sie Ihr Passwort.</p>\n                </div>\n            </div>\n        </div>\n\n\n        \n    \n</div>\n<div class=\"container\" *ngIf=\"this.deleteresult=='success'\">\n    <h1>Ihr Account wurde gelöscht</h1>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"1rem\" fxLayoutAllign=\"space-around\">\n    <div>\n        <p *ngIf=\"this.currentuser\" class=\"mat-caption right\">\n            Angemeldet als <span> {{this.currentuser.anrede?this.currentuser.anrede+\"\n                \"+this.currentuser.lastname:\"\" }}</span></p>\n        <div class=\"brandingpicture\" [ngClass]=\"{'smallheader': this.currentuser}\">\n            <h1>Kleinräumige GBE der Stadt Köln</h1>\n        </div>\n        <p *ngIf=\"!this.currentuser\">\n            Dieses Dashboard ist ein internes Informationsportal zur gesundheitlichen Lage der Bevölkerung Kölns. Bitte\n            melden\n            Sie sich an, um Zugriff auf die enthaltenen Informationen zu erhalten.</p>\n        <p *ngIf=\"this.metadata.length==0 && !this.currentuser && !this.progress\">\n            Es sind aktuell keine öffentlichen Informationen auf diesem Portal verfügbar.\n        </p>\n        <p *ngIf=\"(this.metadata.length==0) && this.currentuser && !this.progress\">\n            Es sind keine Daten im System, bitte wenden Sie sich an einen Administrator.\n        </p>\n    </div>\n\n    <div *ngIf=\"this.progress\">\n    <mat-spinner></mat-spinner>\n    </div>\n\n    <div *ngIf=\"this.metadata && !this.progress\">\n        <ng-container *ngIf=\"!(this.metadata.length>0 && this.levelvalues.length>0)\">\n            <mat-progress></mat-progress>\n        </ng-container>\n         <ng-container *ngIf=\"this.metadata.length>0 && this.levelvalues.length>0\">\n            <!-- <ng-container>\n                <h3><strong>Subgruppen</strong></h3>\n                <p>\n                    <mat-chip-list>\n                        <mat-chip-list>\n                            <ng-container *ngFor=\"let item of this.subgroups\">\n                                <mat-chip (click)=\"this.setlevel('subgroups',item);\"\n                                    [disabled]=\"this.levelsettings['levelvalues']!=='Gesamt'\"\n                                    [selected]=\"(this.levelsettings['subgroups']==item)\" color=\"primary\">\n                                    {{item}}\n                                </mat-chip>\n                            </ng-container>\n                        </mat-chip-list>\n                    </mat-chip-list>\n                </p>\n            </ng-container> -->\n            <h1><strong>Indikatorauswahl</strong></h1>\n            <h3>Typ</h3>\n            <p>\n            <mat-chip-list>\n                <mat-chip-list>\n                    <mat-chip (click)=\"this.outcomeart=item;\" *ngFor=\"let item of ['Inanspruchnahme','M1Q','M2Q','Einflussfaktoren']\"\n                        [selected]=\"this.outcomeart==item\" color=\"primary\">\n                        <span *ngIf=\"item=='M1Q'|| item=='M2Q'\">Prävalenz </span>&nbsp; {{item}}</mat-chip>\n                </mat-chip-list>\n            </mat-chip-list>    \n            </p>       \n            <h3>Indikator</h3>\n            <p fxHide=true fxShow.gt-sm=true>\n                <ng-container *ngIf=\"this.outcomeart==='Inanspruchnahme'\">\n                <mat-chip-list>\n                    <mat-chip-list>\n                        <mat-chip (click)=\"this.setlevel('outcomes',item);\" *ngFor=\"let item of this.outcomes_util\"\n                            [selected]=\"(this.levelsettings['outcomes']==item)\" color=\"primary\">\n                            {{item.replace('Anteil Patienten mit','') | replace : '[_]' : '.'}}\n                        </mat-chip>\n                    </mat-chip-list>\n                </mat-chip-list>\n                </ng-container>\n                <ng-container *ngIf=\"this.outcomeart==='M1Q'\">\n                    <mat-chip-list>\n                        <mat-chip-list>\n                            <mat-chip (click)=\"this.setlevel('outcomes',item);\" *ngFor=\"let item of this.outcomes_m1q\"\n                                [selected]=\"(this.levelsettings['outcomes']==item)\" color=\"primary\">\n                                {{item.replace(' M1Q','').replace('Prävalenz von','').replace('Prävalenz der','')  | replace : '[_]' : '.'  }}\n                            </mat-chip>\n                        </mat-chip-list>\n                    </mat-chip-list>\n                    </ng-container>\n                    <ng-container *ngIf=\"this.outcomeart==='M2Q'\">\n                        <mat-chip-list>\n                            <mat-chip-list>\n                                <mat-chip (click)=\"this.setlevel('outcomes',item);\" *ngFor=\"let item of this.outcomes_m2q\"\n                                    [selected]=\"(this.levelsettings['outcomes']==item)\" color=\"primary\">\n                                    {{item.replace(' M2Q','').replace('Prävalenz von','').replace('Prävalenz der','')  | replace : '[_]' : '.'  }}\n                                </mat-chip>\n                            </mat-chip-list>\n                        </mat-chip-list>\n                        </ng-container>\n                <ng-container *ngIf=\"this.outcomeart==='Einflussfaktoren'\">\n                    <mat-chip-list>\n                        <mat-chip-list>\n                            <mat-chip (click)=\"this.setlevel('outcomes',item);\" *ngFor=\"let item of this.determinants\"\n                                [selected]=\"(this.levelsettings['outcomes']==item)\" color=\"primary\">\n                                {{item.replace(' M2Q','').replace('Prävalenz von','').replace('Prävalenz der','')  | replace : '[_]' : '.'  }}\n                            </mat-chip>\n                        </mat-chip-list>\n                    </mat-chip-list>\n                    </ng-container>\n            </p>            \n        </ng-container>\n    </div>\n    <div *ngIf=\"this.data.length>0\" fxLayout=\"column\">\n        \n        <h1>Ergebnisse</h1>\n        <h2><strong>Allgemeine Informationen</strong></h2>\n        <div fxFlex=100 fxLayout=\"row wrap\" fxLayoutGap=\"1rem\">\n            \n            <div fxFlex=33>\n                <mat-card class=\"mat-elevation-z0\" ><p>Prävalenz</p></mat-card>\n            </div>\n            <div fxFlex >\n                <mat-card  class=\"mat-elevation-z0\"><p>Indikatorbeschreibung</p></mat-card>\n            </div>\n            <div fxFlex=100 >\n                <mat-card  \n                class=\"mat-elevation-z0\"><p>Alter und Geschlecht</p></mat-card>\n            </div>\n\n\n        </div>\n        \n        <div>\n        <h2><strong>Regionale Unterschiede</strong></h2>\n        <h3><strong>Raumeinheit</strong></h3>\n            <p>\n                <mat-chip-list>\n                    <mat-chip (click)=\"this.setlevel('levelvalues',item);\" *ngFor=\"let item of this.levelvalues\"\n                        [selected]=\"(this.levelsettings['levelvalues']==item)\" color=\"primary\"\n                        [disabled]=\"this.levelsettings['subgroups']!='Keine'\">\n                        {{item}}<span *ngIf=\"this.geojson_available.indexOf(item)>=0\">\n                            <mat-icon class=\"primarycolor flagicon\">map</mat-icon>\n                        </span>\n                    </mat-chip>\n                </mat-chip-list>\n            </p>\n        <h3><strong>Subgruppenauswahl</strong></h3>\n        <p>\n            Auswahl von Geschlecht, Altersgruppe und Alter\n        </p>\n        <div class=\"minheight\"\n            *ngIf=\"(this.geojson_available.indexOf(this.levelsettings['levelvalues'])>=0) && this.mapdata && this.data && this.levelid\">\n            <mat-card class=\"no-padding\">\n            <app-map *ngIf=\"this.mapdata['features'].length>0 && this.data.length>0\" [containername]=\"'mapdiv'\"\n                [data]=\"this.data\" [basemap]=\"this.mapdata\" [bins]=\"5\" [id]=\"this.levelid\" opacity=.8 Zoom=10\n                [colorscale]=\"['#2c7bb6','#abd9e9','#ffffbf','#fdae61','#D7191C']\" [percent]=\"true\" [feature]=\"this.levelsettings['outcomes']\"></app-map>\n            </mat-card>\n\n        </div>\n        <div class=\"minheight\" *ngIf=\"this.levelsettings['levelvalues']!=='Gesamt' && this.data.length<100 \">\n            <mat-card>\n                <h2>Rangfolge der Regionen</h2>\n                <app-plot [(data)]=\"this.data\" [custommargins]=\"{ l: 0, r: 40, b: 150, t: 0 }\" [xvalue]=\"this.levelid\"\n                    [percent]=\"true\" [sort]=\"true\" [outcomes]=\"[this.levelsettings['outcomes']]\"\n                    [colorscheme]=\"['#D7191C','#fdae61','#ffffbf','#abd9e9','#2c7bb6']\" plottype=\"bar\"></app-plot>\n                </mat-card>\n        </div>\n        <div class=\"minheight\" *ngIf=\"this.data\">\n            <mat-card>\n                <h2>Regionssuche</h2>\n                <app-table [data]=\"this.data\" [columns]=\"this.datakeys\" [addrank]=\"true\" [outcomes_rate]=\"this.data_rate\" [addfilter]=\"true\"\n                    [outcomes_numeric]=\"this.data_number\"></app-table>\n                </mat-card>\n        </div>\n    </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"gbekoelndashboard\",\"version\":\"0.9.8\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~12.0.2\",\"@angular/cdk\":\"^12.0.2\",\"@angular/common\":\"~12.0.2\",\"@angular/compiler\":\"~12.0.2\",\"@angular/core\":\"~12.0.2\",\"@angular/flex-layout\":\"^10.0.0-beta.32\",\"@angular/forms\":\"~12.0.2\",\"@angular/material\":\"^12.0.2\",\"@angular/platform-browser\":\"~12.0.2\",\"@angular/platform-browser-dynamic\":\"~12.0.2\",\"@angular/router\":\"~12.0.2\",\"@types/leaflet\":\"^1.5.21\",\"angular-plotly.js\":\"^3.0.0\",\"chroma-js\":\"^2.1.0\",\"leaflet\":\"^1.7.1\",\"plotly.js\":\"^1.58.4\",\"rxjs\":\"~6.6.0\",\"tslib\":\"^2.1.0\",\"zone.js\":\"~0.11.4\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.901.15\",\"@angular/cli\":\"~12.0.2\",\"@angular/compiler-cli\":\"~12.0.2\",\"@types/jasmine\":\"~3.6.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.19.14\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~6.3.2\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~4.2.4\"}}");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _pages_private_private_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/private/private.component */ "./src/app/pages/private/private.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");









const routes = [
    { path: '', component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    {
        path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'private', component: _pages_private_private_component__WEBPACK_IMPORTED_MODULE_7__["PrivateComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    },
    {
        path: 'admin', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n  flex: 1 1 auto;\n}\n\n.offlinemsg {\n  padding: 2rem;\n  background-color: rgba(51, 51, 51, 0.8);\n  color: white;\n  position: absolute;\n  border-radius: 15px;\n  margin: 1rem;\n  right: 1rem;\n  padding: 0.6rem;\n  font-size: 0.8rem;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\na:hover,\na:active {\n  color: #f5f5f5;\n}\n\n.navigation-items {\n  list-style: none;\n  cursor: pointer;\n}\n\n.icon {\n  display: inline-block;\n  margin: 0 auto;\n  padding-right: 0.6em;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label {\n  display: inline-block;\n  margin: 0;\n  width: 85%;\n  vertical-align: middle;\n}\n\n.menucontainer {\n  width: 15rem;\n  margin: 0px;\n  height: 100%;\n  padding: 1rem;\n  padding-top: 1.5rem;\n  background-color: white;\n}\n\n.menucontainer span {\n  color: black;\n}\n\n.menucontainer span:hover {\n  font-weight: bolder;\n}\n\n.menucontainer .icon {\n  color: black;\n  margin-right: 0.9rem;\n}\n\n.menucontainer a:hover {\n  color: black;\n}\n\n::ng-deep .mat-drawer-inner-container {\n  overflow: hidden !important;\n}\n\n.mat-toolbar.mat-primary {\n  background: #000000 !important;\n  color: white;\n}\n\n.userinfo {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: rgba(255, 255, 255, 0.447);\n}\n\n.zilogostyle {\n  height: 2rem;\n  margin-top: 20px;\n  filter: grayscale(100%);\n}\n\n.brandinglogo {\n  height: 2rem;\n  margin-top: 20px;\n  margin-left: 50px;\n}\n\n.brandinglogotiny {\n  height: 1rem;\n  margin-top: 10px;\n  margin-left: 25px;\n}\n\n.mat-form-field {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2diZV9rb2Vsbi9nYmVfa29lbG4vRGFzaGJvYXJkL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FER0U7RUFDRSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0M7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNBSDs7QURHQzs7RUFFRSxjQUFBO0FDQUg7O0FER0M7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNBSDs7QURHQztFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNBSDs7QURHQztFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0FIOztBREtDO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGSDs7QURJRztFQUNFLFlBQUE7QUNGTDs7QURLRztFQUNFLG1CQUFBO0FDSEw7O0FET0c7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNMTDs7QURRRztFQUNFLFlBQUE7QUNOTDs7QURXQztFQUNFLDJCQUFBO0FDUkg7O0FEV0E7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNSRjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEWUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RGOztBRFlBO0VBQ0EsbUJBQUE7QUNUQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuXG4gIC5vZmZsaW5lbXNne1xuICAgIHBhZGRpbmc6MnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsLjgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW46MXJlbTtcbiAgICByaWdodDoxcmVtO1xuICAgIHBhZGRpbmc6LjZyZW07XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBcbiAgfVxuIGEge1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgY29sb3I6IHdoaXRlO1xuIH1cbiBcbiBhOmhvdmVyLFxuIGE6YWN0aXZlIHtcbiAgIGNvbG9yOiAjZjVmNWY1O1xuIH1cbiAgXG4gLm5hdmlnYXRpb24taXRlbXMge1xuICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gXG4gLmljb24ge1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgbWFyZ2luOiAwIGF1dG87XG4gICBwYWRkaW5nLXJpZ2h0OiAuNmVtO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgIHdpZHRoOiAxNSU7XG4gfVxuIFxuIC5sYWJlbCB7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBtYXJnaW46IDA7XG4gICB3aWR0aDogODUlO1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiB9XG5cblxuXG4gLm1lbnVjb250YWluZXIge1xuICAgd2lkdGg6IDE1cmVtO1xuICAgbWFyZ2luOiAwcHg7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiAxcmVtO1xuICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgXG4gICBzcGFuICAgICB7XG4gICAgIGNvbG9yOiBibGFjaztcbiAgIH1cblxuICAgc3Bhbjpob3ZlciB7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICB9XG5cbiAgICBcbiAgIC5pY29uIHtcbiAgICAgY29sb3I6IGJsYWNrO1xuICAgICBtYXJnaW4tcmlnaHQ6IDAuOXJlbTtcbiAgIH1cblxuICAgYTpob3ZlciB7XG4gICAgIGNvbG9yOiBibGFjazsgICAgICBcbiAgIH1cbiAgIFxuIH1cblxuIDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICAgb3ZlcmZsb3c6IGhpZGRlbiFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyaW5mbyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NDcpO1xufVxuXG4uemlsb2dvc3R5bGUge1xuICBoZWlnaHQ6IDIuMHJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbi5icmFuZGluZ2xvZ28ge1xuICBoZWlnaHQ6IDIuMHJlbTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7ICBcbn1cblxuXG4uYnJhbmRpbmdsb2dvdGlueSB7XG4gIGhlaWdodDogMS4wcmVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjVweDsgIFxufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuYm9yZGVyLXJhZGl1czogMTVweDtcbn0iLCIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm9mZmxpbmVtc2cge1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nOiAwLjZyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZjVmNWY1O1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjZlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTUlO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDg1JTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1lbnVjb250YWluZXIge1xuICB3aWR0aDogMTVyZW07XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1lbnVjb250YWluZXIgc3BhbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tZW51Y29udGFpbmVyIHNwYW46aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLm1lbnVjb250YWluZXIgLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogMC45cmVtO1xufVxuLm1lbnVjb250YWluZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyaW5mbyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NDcpO1xufVxuXG4uemlsb2dvc3R5bGUge1xuICBoZWlnaHQ6IDJyZW07XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4uYnJhbmRpbmdsb2dvIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmJyYW5kaW5nbG9nb3Rpbnkge1xuICBoZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");





let AppComponent = class AppComponent {
    constructor(_auth, _api, router) {
        this._auth = _auth;
        this._api = _api;
        this.router = router;
        this.title = 'Test Dashboard';
        this.loginoption = true;
    }
    ngOnInit() {
        this._auth.currentUser.subscribe(data => {
            if (data) {
                this.currentuser = data;
                this.loginstatus = true;
                this.adminstatus = this.currentuser["is_admin"] || this.currentuser["is_superadmin"];
                setTimeout(() => { this.autorefreshdata(); }, 1000);
                setInterval(() => { this._auth.refreshToken(); }, 1000 * 60 * 5);
            }
            else {
                this.loginstatus = false;
                this.adminstatus = false;
                setTimeout(() => { this.autorefreshdata(); }, 0);
            }
            ;
        });
    }
    autorefreshdata() {
        this.updatemetadata().subscribe(data => {
            this.setmetadata("metadata", data["data"]);
        });
        this.getsortdata().subscribe(data => {
            this.setmetadata("sortdata", data["datalevels"]);
            if (data["geodata"]) {
                this.setmetadata("geodata", this._api.getValues(data["geodata"], '_id'));
            }
            else {
                this.setmetadata("geodata", []);
            }
        });
    }
    logout() {
        this._auth.logout();
        this.autorefreshdata();
        this.loginstatus = false;
        this.adminstatus = false;
        setTimeout(() => { this.router.navigate(['/']); }, 1500);
    }
    ;
    getsortdata() {
        return this._api.getTypeRequest("get_sortlevels/" + this._api.REST_API_SERVER_CLIENTID);
    }
    updatemetadata() {
        let client = this._api.REST_API_SERVER_CLIENTID;
        return this._api.getTypeRequest("get_metadata/" + client);
    }
    setmetadata(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../material/material.module */ "./src/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/pages/start/start.component.ts");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ "./node_modules/plotly.js/dist/plotly.js");
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js");
/* harmony import */ var plotly_js_lib_locales_de_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! plotly.js/lib/locales/de.js */ "./node_modules/plotly.js/lib/locales/de.js");
/* harmony import */ var plotly_js_lib_locales_de_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(plotly_js_lib_locales_de_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _components_leafletmap_map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/leafletmap/map/map.component */ "./src/app/components/leafletmap/map/map.component.ts");
/* harmony import */ var _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/plotly/plot/plot.component */ "./src/app/components/plotly/plot/plot.component.ts");
/* harmony import */ var _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/table/table/table.component */ "./src/app/components/table/table/table.component.ts");
/* harmony import */ var _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/infobox/box/box.component */ "./src/app/components/infobox/box/box.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_interceptor_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/interceptor-service.service */ "./src/app/services/interceptor-service.service.ts");
/* harmony import */ var _pages_private_private_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/private/private.component */ "./src/app/pages/private/private.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _services_replace_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/replace_pipe */ "./src/app/services/replace_pipe.ts");



























angular_plotly_js__WEBPACK_IMPORTED_MODULE_9__["PlotlyModule"].plotlyjs = plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_8__;
Object(_angular_common__WEBPACK_IMPORTED_MODULE_16__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_17___default.a, 'de');
let AppModule = class AppModule {
    constructor(plotlyService) {
        this.plotlyService = plotlyService;
        this.plotlyService.getPlotly().register(plotly_js_lib_locales_de_js__WEBPACK_IMPORTED_MODULE_10__);
    }
};
AppModule.ctorParameters = () => [
    { type: angular_plotly_js__WEBPACK_IMPORTED_MODULE_9__["PlotlyService"] }
];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"],
            _components_leafletmap_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"],
            _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_13__["PlotComponent"],
            _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_14__["TableComponent"],
            _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_15__["BoxComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
            _pages_private_private_component__WEBPACK_IMPORTED_MODULE_23__["PrivateComponent"],
            _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
            _services_replace_pipe__WEBPACK_IMPORTED_MODULE_25__["ReplacePipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            angular_plotly_js__WEBPACK_IMPORTED_MODULE_9__["PlotlyModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'de-DE' }, angular_plotly_js__WEBPACK_IMPORTED_MODULE_9__["PlotlyService"],
            // This needs to be uncommented to provide  auth
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
                useClass: _services_interceptor_service_service__WEBPACK_IMPORTED_MODULE_22__["InterceptorService"],
                multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/infobox/box/box.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/infobox/box/box.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dynamicbg {\n  background-color: var(--bgcolor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2diZV9rb2Vsbi9nYmVfa29lbG4vRGFzaGJvYXJkL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvYm94L2JveC9ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb2JveC9ib3gvYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZ0NBSFU7QUNDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb2JveC9ib3gvYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kdGhlYmdjb2xvciA6IHZhcigtLWJnY29sb3IpOyBcblxuLmR5bmFtaWNiZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZWJnY29sb3I7XG59IiwiLmR5bmFtaWNiZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnY29sb3IpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/infobox/box/box.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/infobox/box/box.component.ts ***!
  \*********************************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BoxComponent = class BoxComponent {
    constructor() {
        this.itemcolor = "grey";
    }
    ngOnInit() {
        this.value = Number(this.value);
        if (!this.numberformat) {
            this.numberformat = '1.1-1';
        }
        this.setcolor();
    }
    ;
    setcolor() {
        let color = "darkgreen";
        if (this.maincolor) {
            color = this.maincolor;
        }
        if (this.cutoffs.length > 0 && this.cutoffs.length == this.colors.length) {
            let i = 0;
            for (let cutvalue of this.cutoffs) {
                if (Number(cutvalue) <= this.value) {
                    color = this.colors[i];
                }
                i = i + 1;
            }
        }
        this.itemcolor = color;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "colors", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "cutoffs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "maincolor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "numberformat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "maticon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BoxComponent.prototype, "textbehind", void 0);
BoxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-box',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/infobox/box/box.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./box.component.scss */ "./src/app/components/infobox/box/box.component.scss")).default]
    })
], BoxComponent);



/***/ }),

/***/ "./src/app/components/leafletmap/map/map.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/leafletmap/map/map.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-container {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.map-frame {\n  border: 1px solid lightgray;\n  height: 100%;\n}\n\n.mapdiv {\n  height: 100%;\n  min-height: 400px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2diZV9rb2Vsbi9nYmVfa29lbG4vRGFzaGJvYXJkL3NyYy9hcHAvY29tcG9uZW50cy9sZWFmbGV0bWFwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGVhZmxldG1hcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNESjs7QURLRTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVhZmxldG1hcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFwLWNvbnRhaW5lciB7XG4gICAgXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgfVxuICBcbiAgLm1hcC1mcmFtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLm1hcGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cblxuXG4iLCIubWFwLWNvbnRhaW5lciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWFwLWZyYW1lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/leafletmap/map/map.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/leafletmap/map/map.component.ts ***!
  \************************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_5__);







let MapComponent = class MapComponent {
    constructor(http, renderer, api) {
        this.http = http;
        this.renderer = renderer;
        this.api = api;
        this.data = [];
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.useprovider = 0;
        this.providers = ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'];
        this.attributions = ['Kartenmaterial &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            '©OpenStreetMap, ©CartoDB'];
    }
    ngOnInit() {
        // Init vars
        this.resetprops();
        this.clickedvalue = "";
    }
    ngAfterViewInit() {
        // Import Map data
        if (this.checkallok()) {
            this.initMap(this.containername);
        }
    }
    ngOnChanges(changes) {
        // On any change replace the map-container
        if (!this.selectmap) {
            if ((changes.data || changes.basemap) && this.checkallok()) {
                this.resetprops();
                this.initMap(this.containername);
            }
            ;
        }
        else {
            if ((changes.basemap) && this.checkallok()) {
                this.resetprops();
                this.initMap(this.containername);
            }
            ;
        }
    }
    ngOnDestroy() {
        this.map = null;
    }
    resetprops() {
        if (!this.containername) {
            this.containername = "mapdiv" + Math.round(Math.random() * 1000).toString() + "_" + Math.round(Math.random() * 1000).toString();
        }
        ;
        if (!this.Zoom) {
            this.Zoom = 4;
        }
        ;
        if (!this.center) {
            this.center = this.getcenter();
        }
        ; // [51.948, 10.265]; };
        if (!this.opacity) {
            this.opacity = .1;
        }
        ;
        if (!this.customlabels) {
            this.customlabels = [];
        }
        ;
        if (!this.binmethod) {
            this.binmethod = "equalint";
        }
        ;
    }
    checkallok() {
        let res;
        if (!this.selectmap) {
            res = this.data && this.basemap;
            if (res) {
                res = this.data.length > 0 && this.basemap.features;
            }
        }
        else {
            res = this.basemap;
            if (res) {
                res = this.basemap.features;
            }
        }
        return res;
    }
    preparedom(divid) {
        if (document.getElementById(divid)) {
            document.getElementById(divid).remove();
        }
        ;
        let mapcontainer = this.renderer.createElement("div");
        this.renderer.setProperty(mapcontainer, 'id', divid);
        this.renderer.addClass(mapcontainer, "mapdiv");
        this.renderer.appendChild(document.getElementById("map-frame"), mapcontainer);
        return true;
    }
    initMap(divid) {
        // Init
        let mymap;
        this.mapok = false;
        let colors = this.colorscale;
        let cutoffs = this.cutofflist;
        let thedata;
        if (this.data) {
            thedata = Object.assign(this.data);
        }
        let propname = this.feature;
        let theid = this.id;
        let theopacity = this.opacity;
        let basestyle = {
            weight: 2,
            dashArray: '',
            "color": "grey",
            "fillOpacity": theopacity,
            "Opacity": theopacity
        };
        // Prepare dom
        this.preparedom(divid);
        // Load Map
        mymap = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"](divid, { center: this.center, zoom: this.Zoom });
        // Fix Icons see https://stackoverflow.com/questions/41144319/leaflet-marker-not-found-production-env
        const iconRetinaUrl = 'assets/marker-icon-2x.png';
        const iconUrl = 'assets/marker-icon.png';
        const shadowUrl = 'assets/marker-shadow.png';
        const iconDefault = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
            iconRetinaUrl,
            iconUrl,
            shadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        });
        leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"].prototype.options.icon = iconDefault;
        // Load Tiles
        let theprovider = this.useprovider;
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"](this.providers[theprovider], {
            maxZoom: 19, opacity: 1,
            attribution: this.attributions[theprovider]
        });
        tiles.addTo(mymap);
        mymap.attributionControl.setPrefix('<a href="https://www.zidatasciencelab.de"><strong>Zi</strong> Data Science Lab</a>');
        tiles.getContainer().className += ' custombgmap';
        // Chloropleth Map
        if (!this.selectmap) {
            // Layer
            const geojsonFeature = Object.assign(this.basemap);
            if (this.percent) {
                for (let item of thedata) {
                    item['___thevalue'] = Math.round(item[this.feature] * 1000) / 10;
                }
            }
            else {
                for (let item of thedata) {
                    item['___thevalue'] = item[this.feature];
                }
            }
            for (let item of geojsonFeature.features) {
                let value = this.api.filterArray(thedata, this.id, item.properties[this.id]);
                if (value.length > 0) {
                    item['properties'][propname] = value[0]['___thevalue'];
                }
                else {
                    item['properties'][propname] = null;
                }
            }
            if (!cutoffs) {
                cutoffs = this.makecutoffs(this.api.getValues(thedata, '___thevalue'), this.binmethod, this.bins);
            }
            ;
            if (colors.length < cutoffs.length) {
                colors = this.makescale(cutoffs.length);
            }
            let myStyle = function (feature) {
                let thevalue = feature.properties[propname];
                let i = 0;
                let result = basestyle;
                let thecolor = colors[0];
                for (let colorcode of colors) {
                    if (thevalue > cutoffs[i]) {
                        thecolor = colorcode;
                    }
                    ;
                    i = i + 1;
                }
                if (thevalue != null) {
                    result['color'] = thecolor;
                }
                ;
                return result;
            };
            // Infobox
            let info;
            info = leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].layers();
            info.onAdd = function (map) {
                this._div = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                this.update();
                return this._div;
            };
            info.update = function (props) {
                this._div.innerHTML = (props ? '<strong>Gebiet: </strong>' + props[theid] : "") + (props && props[propname] ? '<br><strong>Wert: </strong>' + props[propname].toLocaleString() : "");
                if (props) {
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].addClass(this._div, 'maphoverinfo');
                }
                else {
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].removeClass(this._div, 'maphoverinfo');
                }
            };
            info.addTo(mymap);
            // Add Features/Polygons to Map
            const featLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](geojsonFeature, {
                style: myStyle,
                onEachFeature: (feature, layer) => (layer.on({
                    mouseover: (e) => (this.highlightFeature(info, e)),
                    mouseout: (e) => (this.resetFeature(info, e)),
                    click: (e) => (this.zoomToFeature(mymap, e))
                }))
            });
            featLayer.resetStyle();
            featLayer.addTo(mymap);
            // Add Legend to Map
            let labels;
            if (this.customlabels) {
                labels = this.customlabels;
            }
            ;
            let legend;
            legend = leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].layers({}, {}, { position: 'topright' });
            legend.onAdd = function (map) {
                this._ldiv = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div', 'customlegend');
                this._ldiv.innerHTML = '<p><strong>' + propname + '</strong></p>';
                if (this.percent == true) {
                    this._ldiv.innerHTML += '<p><em>Anteil in %</em></p>';
                }
                if (cutoffs) {
                    for (var i = 0; i < cutoffs.length; i++) {
                        if (labels.length == cutoffs.length) {
                            this._ldiv.innerHTML +=
                                '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
                                    labels[i];
                        }
                        else {
                            if (cutoffs.length > 4) {
                                this._ldiv.innerHTML +=
                                    '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> ' +
                                        cutoffs[i].toLocaleString() + (cutoffs[i + 1] ? ' bis unter ' + cutoffs[i + 1].toLocaleString() + '<br>' : '+');
                            }
                            else {
                                this._ldiv.innerHTML +=
                                    '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
                                        (cutoffs[i + 1] ? 'bis ' + cutoffs[i + 1].toLocaleString() + "&nbsp;" : cutoffs[i].toLocaleString() + '+');
                            }
                        }
                    }
                }
                return this._ldiv;
            };
            legend.addTo(mymap);
        }
        else {
            // Layer
            const geojsonFeature = Object.assign(this.basemap);
            colors = this.makescale(2);
            let myStyle = function (feature) {
                let res = basestyle;
                let thecolor = "grey";
                if (feature.properties['___clicked']) {
                    thecolor = colors[1];
                }
                res['color'] = thecolor;
                return res;
            };
            const featLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](geojsonFeature, {
                style: myStyle,
                onEachFeature: (feature, layer) => (layer.on({
                    mouseover: (e) => (this.highlightFeature(info, e)),
                    mouseout: (e) => (this.resetFeature(info, e)),
                    click: (e) => (this.selectarea(mymap, e))
                }))
            });
            featLayer.addTo(mymap);
            // Infobox
            let info;
            info = leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].layers();
            info.onAdd = function (map) {
                this._div = leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].create('div');
                this.update();
                return this._div;
            };
            info.update = function (props) {
                this._div.innerHTML = (props ? '<strong>Gebiet: </strong>' + props[theid] : "");
                if (props) {
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].addClass(this._div, 'maphoverinfo');
                }
                else {
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["DomUtil"].removeClass(this._div, 'maphoverinfo');
                }
            };
            info.addTo(mymap);
        }
        this.mapok = true;
    }
    ;
    highlightFeature(info, e) {
        const layer = e.target;
        layer.setStyle({
            opacity: 1,
            fillOpacity: this.opacity * 1.2
        });
        info.update(layer.feature.properties);
    }
    resetFeature(info, e) {
        const layer = e.target;
        layer.setStyle({
            opacity: 1,
            fillOpacity: this.opacity,
        });
        info.update();
    }
    makecutoffs(array, method = "equalint", bins) {
        let result = [];
        let minv = Math.min(...array);
        let maxv = Math.max(...array);
        let steps = Math.round((maxv - minv) / bins);
        let i = 0;
        while (i < bins) {
            result.push((i + 1) * steps + minv);
            i = i + 1;
        }
        return result;
    }
    newclick(e) {
        let res = [];
        for (let item of this.basemap.features) {
            if (item.properties[this.id] == e) {
                item.properties['___clicked'] = true;
            }
            else {
                item.properties['___clicked'] = false;
            }
            res.push(item);
        }
        this.basemap['features'] = res;
        this.initMap(this.containername);
    }
    zoomToFeature(map, e) {
        map.fitBounds(e.target.getBounds());
        this.clicked.emit(e.target.feature.properties[this.id]);
        this.clickedvalue = e.target.feature.properties[this.id];
    }
    selectarea(map, e) {
        map.fitBounds(e.target.getBounds());
        this.clicked.emit(e.target.feature.properties[this.id]);
        this.clickedvalue = e.target.feature.properties[this.id];
        this.newclick(e.target.feature.properties[this.id]);
    }
    makescale(bins = 5) {
        return chroma_js__WEBPACK_IMPORTED_MODULE_5__["scale"]([chroma_js__WEBPACK_IMPORTED_MODULE_5__(this.api.primarycolor).set('hsl.h', -120), this.api.primarycolor]).colors(bins);
    }
    getcenter() {
        let features = this.basemap.features;
        let coords = { 'a': [], 'b': [] };
        for (let item of features) {
            for (let area of item.geometry.coordinates) {
                for (let subarea of area) {
                    coords['a'].push(subarea[0]);
                    coords['b'].push(subarea[1]);
                }
            }
        }
        let a = coords['a'].reduce((pv, cv) => pv + cv, 0) / coords['a'].length;
        let b = coords['b'].reduce((pv, cv) => pv + cv, 0) / coords['b'].length;
        return [b, a];
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "Outcome", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "Zoom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "basemap", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "center", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "opacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "feature", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "colorscale", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "cutofflist", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "customlabels", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "binmethod", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "selectmap", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "bins", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "percent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MapComponent.prototype, "clicked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapComponent.prototype, "containername", void 0);
MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leafletmap/map/map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./map.component.scss */ "./src/app/components/leafletmap/map/map.component.scss")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/components/plotly/plot/plot.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/plotly/plot/plot.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxvdGx5L3Bsb3QvcGxvdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/plotly/plot/plot.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/plotly/plot/plot.component.ts ***!
  \**********************************************************/
/*! exports provided: PlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotComponent", function() { return PlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");



let PlotComponent = class PlotComponent {
    constructor(api) {
        this.api = api;
        this.outcomelabels = [];
        this.basecolor = "";
        this.colorscheme = [];
        this.annotations = [];
        this.hovertemplate = "";
        this.plottitle = "";
        this.plotsubtitle = "";
        this.plotcaption = "";
        this.n_yticks = 8;
        this.xtickformat = "";
        this.xtitle = "";
        this.ytitle = "";
        this.id = "";
        this.divid = "";
        this.fontfamily = "Lato, sans-serif";
        this.fontsize = ".85rem";
        this.fontcolor = "black";
    }
    ngOnInit() {
        if (this.divid == "") {
            this.divid = "plotdiv" + Math.round(Math.random() * 1000).toString() + "_" + Math.round(Math.random() * 1000).toString();
        }
        if (!this.linewidth) {
            this.linewidth = 2;
        }
        ;
        if (this.basecolor == "") {
            this.basecolor = this.api.primarycolor;
        }
        ;
        if (this.colorscheme.length == 0) {
            this.colorscheme = [this.basecolor];
        }
        this.make_plot();
    }
    ngOnChanges(changes) {
        setTimeout(() => { this.make_plot(); }, 0);
    }
    make_plot() {
        this.mainconfig = {
            displayModeBar: false,
            scrollZoom: false,
            autosizable: true,
            locale: 'de',
            doubleClick: 'reset',
            showAxisDragHandles: false,
            showAxisRangeEntryBoxes: false,
            showTips: true
        };
        if (this.plottype == "bar") {
            this.plotlytype = "bar";
            this.plotlayout = {
                xaxis: { fixedrange: false, type: 'category', automargin: false },
                yaxis: { fixedrange: true, showgrid: false, title: '',
                    automargin: true, rangemode: 'tozero', ticksuffix: " ", nticks: this.n_yticks },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: 'right', y: .8, bgcolor: 'ffffffa7' },
                margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
            };
            if (this.percent) {
                this.plotlayout.yaxis.tickformat = ',.1%';
            }
        }
        if (this.plottype == "violin") {
            this.plotlytype = "violin";
            this.plotlayout = {
                xaxis: { fixedrange: false, type: 'category', automargin: false },
                yaxis: { zeroline: false, automargin: true, rangemode: 'tozero', ticksuffix: " " },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: 'right', y: .8, bgcolor: 'ffffffa7' },
                margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
            };
            if (this.percent) {
                this.plotlayout.yaxis.tickformat = ',.1%';
            }
        }
        if (this.plottype == "stackedbar") {
            this.plotlytype = "bar";
            this.plotlayout = {
                barmode: "stack",
                xaxis: { fixedrange: false, showgrid: false, type: 'category', automargin: false },
                yaxis: { fixedrange: true, title: '', autosize: true, automargin: true, rangemode: 'tozero', ticksuffix: " ", nticks: this.n_yticks },
                padding: 0,
                legend: { x: 1, xanchor: 'right', y: .8, bgcolor: 'ffffffa7' },
                margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
            };
        }
        if (this.plottype == "tsline" || this.plottype == "lines" || this.plottype == "area" || this.plottype == "stackedarea" || this.plottype == 'scatter') {
            this.plotlytype = "lines";
            this.plotlayout = {
                xaxis: { fixedrange: false, showgrid: false, automargin: false, zeroline: false },
                yaxis: {
                    fixedrange: true, title: '', automargin: true, rangemode: 'tozero',
                    gridcolor: "lightgrey",
                    gridpattern: "dot",
                    gridwidth: 1,
                    zerolinecolor: "black",
                    zerolinewidth: 2,
                    annotations: this.annotations,
                    ticksuffix: " ",
                    nticks: this.n_yticks
                },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: 'right', y: .8, bgcolor: 'ffffffa7' },
                margin: { l: 0, r: 20, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent"
            };
            if (this.percent) {
                this.plotlayout.yaxis.tickformat = ',.1%';
            }
            if (this.percentx) {
                this.plotlayout.xaxis.tickformat = ',.1%';
            }
        }
        if (this.plottype == "hbar") {
            this.plotlytype = "hbar";
            this.plotlayout = {
                xaxis: { fixedrange: true, showgrid: false, title: '', automargin: true, nticks: this.n_yticks },
                yaxis: { fixedrange: false, type: 'category', automargin: true, rangemode: 'tozero', ticksuffix: " " },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: 'right', y: .8, bgcolor: 'ffffffa7' },
                margin: { l: 200, r: 0, b: 20, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
            };
        }
        if (this.custommargins) {
            this.plotlayout['margin'] = this.custommargins;
        }
        if (this.showlegend) {
            this.plotlayout['showlegend'] = true;
        }
        if (this.xtickformat != '') {
            this.plotlayout['xaxis']['tickformat'] = this.xtickformat;
        }
        this.plotlayout['font'] = {
            family: this.fontfamily,
            size: this.fontsize,
            color: this.fontcolor
        };
        if (this.xtitle !== "") {
            this.plotlayout['xaxis']['title'] = this.xtitle;
            this.plotlayout['xaxis']['titlefont'] =
                {
                    family: this.fontfamily,
                    size: this.fontsize,
                    color: this.fontcolor
                };
        }
        if (this.ytitle !== "") {
            this.plotlayout['yaxis']['title'] = this.ytitle;
            this.plotlayout['yaxis']['titlefont'] =
                {
                    family: this.fontfamily,
                    size: this.fontsize,
                    color: this.fontcolor
                };
        }
        let plotdata = [];
        for (let item of this.data) {
            plotdata.push(item);
        }
        if (this.sort) {
            plotdata = this.api.sortArray(plotdata, this.outcomes[0]);
        }
        let outcomes = this.outcomes;
        if (this.colorby) {
            outcomes = this.api.getuniqueValues(plotdata, this.colorby);
            this.colorscheme = this.api.makescale(outcomes.length);
            plotdata = this.make_colorbyvalues();
        }
        this.plotdata = this.make_plotdata(plotdata, this.xvalue, outcomes, this.plotlytype);
        // DEBUG
    }
    make_colorbyvalues() {
        let newdata = [];
        let inputdata = this.data;
        let thecolorvalues = this.api.getuniqueValues(inputdata, this.colorby).sort();
        let thexvalues = this.api.getuniqueValues(inputdata, this.xvalue);
        let theoutcome = this.outcomes[0];
        for (let xvalue of thexvalues) {
            let topush = {};
            topush[this.xvalue] = xvalue;
            for (let tocolor of thecolorvalues) {
                let datapoint = this.api.filterArray(this.api.filterArray(inputdata, this.colorby, tocolor), this.xvalue, xvalue)[0];
                if (datapoint) {
                    topush[tocolor] = datapoint[theoutcome];
                }
            }
            newdata.push(topush);
        }
        return newdata;
    }
    make_trace(xdata, ydata = [], name, type = "") {
        let trace = {
            x: xdata,
            y: ydata,
            name: name,
            type: type
        };
        if (this.plottype == "stackedarea") {
            trace['stackgroup'] = "one";
        }
        if (this.hovertemplate != "") {
            trace['hovertemplate'] = this.hovertemplate;
        }
        return trace;
    }
    make_plotdata(source = [], xaxis = "", ylist = [], type = "bar", colors = this.colorscheme) {
        let xdata = this.api.getValues(source, xaxis);
        let list = [];
        let i = 0;
        for (let name in ylist) {
            let theydata = this.api.getValues(source, ylist[i]);
            let tracename = ylist[i];
            if (this.outcomelabels.length == ylist.length) {
                tracename = this.outcomelabels[i];
            }
            let trace = this.make_trace(xdata, theydata, tracename, type = type);
            if (type == "hbar") {
                trace = this.make_trace(this.api.getValues(source, ylist[i]), xdata, ylist[i], type = "bar");
                trace["orientation"] = "h";
            }
            if (type == "bar" || type == "bar" || type == "scatter") {
                trace["marker"] = {
                    color: colors[i]
                };
            }
            if (type == "lines") {
                trace["line"] = {
                    color: colors[i],
                    width: this.linewidth * 2
                };
                trace["marker"] = {
                    color: colors[i],
                    size: this.linewidth * 5
                };
            }
            if (this.plottype == "area") {
                trace["fill"] = "tozeroy";
            }
            if (this.plottype == "violin") {
                trace = this.make_trace(name, theydata, ylist[i], type = type);
                trace['x'] = name;
                trace["line"] = {
                    color: colors[i],
                    width: this.linewidth
                };
            }
            if (this.plottype == "scatter") {
                trace['mode'] = 'markers';
                trace["marker"] = {
                    color: colors[i],
                    size: this.linewidth * 5
                };
                if (this.id != "") {
                    trace["text"] = this.api.getValues(source, this.id);
                    trace["textfont"] = { family: this.fontfamily };
                    if (trace['x'].length < 50) {
                        trace['mode'] = 'markers+text';
                        trace['textposition'] = 'bottom center';
                    }
                    else {
                        trace['mode'] = 'markers';
                    }
                }
            }
            list.push(trace);
            i = i + 1;
        }
        return list;
    }
};
PlotComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "xvalue", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "colorby", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "outcomes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "outcomelabels", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "plottype", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "customdata", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "customconfig", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "customlayout", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "custommargins", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "linewidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "showlegend", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "percent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "percentx", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "basecolor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "colorscheme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "annotations", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "hovertemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "plottitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "plotsubtitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "plotcaption", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "n_yticks", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "xtickformat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "xtitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "ytitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlotComponent.prototype, "divid", void 0);
PlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./plot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plotly/plot/plot.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./plot.component.scss */ "./src/app/components/plotly/plot/plot.component.scss")).default]
    })
], PlotComponent);



/***/ }),

/***/ "./src/app/components/table/table/table.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/table/table/table.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/table/table/table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/table/table/table.component.ts ***!
  \***********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");





let TableComponent = class TableComponent {
    constructor() { }
    ngOnInit() {
        if (!this.outcomes_numeric) {
            this.outcomes_numeric = [];
        }
        ;
        if (!this.outcomes_rate) {
            this.outcomes_rate = [];
        }
        ;
        if (!this.pagesizes) {
            this.pagesizes = [10, 50, 100];
        }
        ;
        this.displayedColumns = this.columns;
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
        if (this.addrank) {
        }
    }
    ngAfterViewInit() {
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
    }
    ngOnChanges(changes) {
        this.displayedColumns = this.columns;
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.datasource.filter = filterValue.trim().toLowerCase();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "columns", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "outcomes_numeric", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "outcomes_rate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "newlabels", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "pagesizes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "addfilter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "addrank", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], TableComponent.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], TableComponent.prototype, "paginator", void 0);
TableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/table/table/table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./table.component.scss */ "./src/app/components/table/table/table.component.scss")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/pages/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabheader {\n  font-weight: bold;\n  margin-bottom: 1.2rem;\n  border-bottom: 1px;\n  border-color: darkgray;\n}\n\n.smalltab {\n  font-size: 0.9rem;\n  line-height: 0.9rem;\n  background-color: white;\n  padding: 1.2em;\n  border-radius: 15px;\n}\n\n.tabvalues {\n  font-weight: bold;\n}\n\n.mat-form-field {\n  font-weight: bold;\n}\n\ntextarea {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2diZV9rb2Vsbi9nYmVfa29lbG4vRGFzaGJvYXJkL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFFRSxXQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmhlYWRlciB7XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogZGFya2dyYXk7XG59XG5cbi5zbWFsbHRhYiB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBsaW5lLWhlaWdodDogLjlyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOiAxLjJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4udGFidmFsdWVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cbnRleHRhcmVhXG57XG4gIHdpZHRoOjEwMCU7XG59IiwiLnRhYmhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gIGJvcmRlci1ib3R0b206IDFweDtcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLnNtYWxsdGFiIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjlyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxLjJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnRhYnZhbHVlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/../package.json */ "./package.json");
var src_package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/../package.json */ "./package.json", 1);






let AdminComponent = class AdminComponent {
    constructor(api, auth, fb) {
        this.api = api;
        this.auth = auth;
        this.fb = fb;
        this.replacedata = true;
        this.datacheck = [];
        this.topicoptions = ['ordering', 'subgroups', 'demography', 'outcomes'];
        this.typeoptions = ['level', 'levelid', 'group', 'rate', 'number'];
        this.appversion = src_package_json__WEBPACK_IMPORTED_MODULE_5__["version"];
    }
    ngOnInit() {
        this.currentuser = this.auth.getUserDetails();
        this.updateuserlist();
        this.resetall();
        this.buildForm();
        this.allmetadata = this.api.getmetadata("metadata");
        let currentmetadata = this.api.filterArray(this.allmetadata, 'type', 'level')[0];
        setTimeout(() => { this.areavalues = this.api.filterArray(this.api.getmetadata("sortdata"), 'varname', currentmetadata["varname"])[0]['values']; }, 0);
        this.api.getTypeRequest('openapi.json').subscribe(data => { this.backenddoc = data; });
    }
    ngOnDestroy() {
        this.datafile = [];
        this.metadatafile = [];
        this.datafilearray = [];
    }
    //File upload function
    changeListener(event) {
        let files = event.target.files;
        let file = files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
            this.datafile = reader.result;
            let datalines = this.datafile.split('\n');
            let varnames = this.datafile.split('\n').map(data => data.split(','))[0];
            let newvarnames = [];
            for (let thevar of varnames) {
                let topush = thevar.replace('.', "_");
                newvarnames.push(topush);
            }
            datalines.shift();
            this.datafile = [newvarnames.join(',')].concat(datalines).join('\n');
            varnames = newvarnames;
            this.datafilearray = this.csvToDataArray(this.datafile);
            let newmetadata = [];
            let index = 0;
            for (let varname of varnames) {
                index = index + 1;
                let topush = { 'varname': varname.replace(/(\r\n|\n|\r)/gm, ""), 'topic': "", 'description': "", "allforlevel": '', "publiclevels": [], "public": false };
                if (index == 1) {
                    topush["topic"] = "ordering";
                    topush["type"] = "level";
                }
                if (index == 2) {
                    topush["topic"] = "ordering";
                    topush["type"] = "levelid";
                }
                if (index > 2) {
                    topush["type"] = "rate";
                    topush["topic"] = "outcomes";
                }
                newmetadata.push(topush);
            }
            this.metadone = false;
            setTimeout(() => {
                this.metadatafile = newmetadata;
                this.checkmetadata();
            }, 0); // fixes https://blog.angular-university.io/angular-debugging/
        };
    }
    changeListenerGEOJSON(event) {
        let files = event.target.files;
        let file = files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
            setTimeout(() => {
                this.geojsonfile = JSON.parse(reader.result.toString());
                setTimeout(() => {
                    this.areafeatures = Object.keys(this.geojsonfile['features'][0]['properties']);
                }, 0);
            }, 0); // fixes https://blog.angular-university.io/angular-debugging/
        };
    }
    csvToArray(text) {
        let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
        for (l of text) {
            if ('"' === l) {
                if (s && l === p)
                    row[i] += l;
                s = !s;
            }
            else if (',' === l && s)
                l = row[++i] = '';
            else if ('\n' === l && s) {
                if ('\r' === p)
                    row[i] = row[i].slice(0, -1);
                row = ret[++r] = [l = ''];
                i = 0;
            }
            else
                row[i] += l;
            p = l;
        }
        return ret;
    }
    ;
    getrefvalues(value) {
        let data = this.datafile.split(/\r|\n|\r/);
        if (data.length > 100) {
            data = data.slice(0, 100);
        }
        let dataarray = [];
        let index = this.api.getValues(this.metadatafile, "varname").indexOf(value);
        let i = 0;
        for (let row of data) {
            let topush = this.csvToArray(row)[0][index];
            if (i > 0 && dataarray.indexOf(topush) < 0) {
                dataarray.push(topush);
            }
            i = i + 1;
        }
        return dataarray;
    }
    updateuser(user, key, value) {
        this.api.updateuser(user, key, value).subscribe(data => { this.updateuserlist(); });
    }
    deletuser(user) {
        this.api.deleteuser(user).subscribe(data => { this.updateuserlist(); });
    }
    updateuserlist() {
        this.api.getTypeRequest('users').subscribe(data => { this.users = data; });
    }
    buildForm() {
        this.myRegform = this.fb.group({
            anrede: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)
                ]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(12)]],
            firstname: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)
                ]],
            lastname: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)
                ]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
        this.myRegform.patchValue({ "password": this.rndpwd() });
    }
    ;
    buildDataUploadForm() {
        if (this.dataintend == 'geodataupload') {
            this.myDataUploadform = new FormData();
            this.geouploadinfo = {
                'client_id': this.api.REST_API_SERVER_CLIENTID,
                'levelnamevar': this.api.filterArray(this.allmetadata, "type", "level")[0]['varname'],
                'levelname': this.uploadarea,
                'levelidvar': this.api.filterArray(this.allmetadata, "type", "levelid")[0]['varname'],
                'levelidname': this.uploadareaid
            };
            this.myDataUploadform.append('geodata', new Blob([JSON.stringify(this.geojsonfile)], { type: 'application/geo+json' }));
            this.myDataUploadform.append('geodatainfo', JSON.stringify(this.geouploadinfo));
        }
        if (this.dataintend == 'dataupload') {
            this.myDataUploadform = new FormData();
            this.myDataUploadform.append('data', new Blob([this.datafile], { type: 'text/csv' }));
            this.myDataUploadform.append('metadata', this.arrayToCsv(this.metadatafile));
        }
    }
    uploadnewdata() {
        this.buildDataUploadForm();
        this.uploadres = "pending";
        this.uploaderror = null;
        if (this.dataintend == 'dataupload') {
            this.api.postTypeRequestnotimeout('upload_data/?replacedata=' + this.replacedata, this.myDataUploadform).subscribe(data => {
                this.uploadres = "success";
                setTimeout(() => {
                    this.resetall();
                }, 1500);
            }, error => {
                this.uploadres = "error";
                this.uploaderror = error.error;
            });
        }
        if (this.dataintend == 'geodataupload') {
            this.api.postTypeRequestnotimeout('upload_geodata/', this.myDataUploadform).subscribe(data => {
                this.uploadres = "success";
                setTimeout(() => {
                    this.resetall();
                }, 1500);
            }, error => {
                this.uploadres = "error";
                this.uploaderror = error.error.detail;
            });
        }
    }
    checkmetadata() {
        let err = [];
        let test1counter = 0;
        let test2 = true;
        let test3 = true;
        let test4 = true;
        let test5 = true;
        let test6 = true;
        for (let item of this.metadatafile) {
            if (item.topic == "ordering" && ['levelid', 'level'].indexOf(item.type) >= 0) {
                test1counter = test1counter + 1;
            }
            if (item.topic == "subgroups" && item.type !== 'group') {
                item.type = 'group';
            }
            if (item.topic == "outcomes" && ['rate', 'number'].indexOf(item.type) < 0) {
                test3 = false;
            }
            if (item.topic == "demography" && ['rate', 'number'].indexOf(item.type) < 0) {
                test4 = false;
            }
        }
        if (test1counter !== 2) {
            err.push("Level, and levelid missing or not labelled as topic.");
        }
        if (!test2) {
            err.push("Subgroups not typed correctly");
        }
        if (!test3) {
            err.push("Outcomes not typed correctly");
        }
        if (!test4) {
            err.push("Demography not typed correctly");
        }
        let test5data = this.api.filterArray(this.metadatafile, 'topic', 'ordering').concat(this.api.filterArray(this.metadatafile, 'topic', 'subgroups'));
        test5 = this.api.getValues(this.api.filterArray(test5data, 'allforlevel', ''), 'allforlevel').length == 0;
        if (!test5) {
            err.push("Reference Levels not specified");
        }
        let test6data = this.api.filterArray(this.metadatafile, 'type', 'level')[0];
        test6 = ((test6data['publiclevels'].length == 0) || !test6data['public']) || ((test6data['publiclevels'].length > 0) && test6data['public']);
        if (!test6) {
            err.push("No public levels not for public level var specified");
        }
        let test7 = this.metadatafile.length == this.api.getValues(this.metadatafile, "varname").length;
        if (!test7) {
            err.push("Lengths not matching, data cols:" + this.api.getValues(this.metadatafile, "varname").length + ", meta vars:" + this.metadatafile.length);
        }
        // Check if no null values in topics==ordering or topics==subgroups
        let test8tocheck = this.api.getValues(this.api.filterArray(this.metadatafile, "topic", "ordering"), "varname").concat(this.api.getValues(this.api.filterArray(this.metadatafile, "topic", "subgroups"), "varname"));
        let test8datalen = this.datafilearray.length;
        let test8 = true;
        let test8problems = [];
        for (let tocheckvar of test8tocheck) {
            let newlength = this.api.getValues(this.datafilearray, tocheckvar).filter(x => x != null).filter(x => x != "").length + 1;
            test8 = test8 && (newlength == test8datalen);
            if (newlength !== test8datalen) {
                test8problems.push(" " + tocheckvar + " (n=" + Math.abs(newlength - test8datalen) + ")");
            }
        }
        if (!test8) {
            err.push("Missings in Ordering or Subgroup vars: " + test8problems.toString());
        }
        this.datacheck = err;
    }
    addusernow() {
        let toadd = this.myRegform.value;
        this.api.postTypeRequest("newuser", toadd).subscribe(data => {
            this.adduser = false;
            this.updateuserlist();
        });
    }
    chpwd(user, pwd) {
        this.api.changeuserpwd(user, pwd).subscribe(data => { this.updateuserlist(); });
    }
    rndpwd() {
        return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
    }
    copy(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    resetall() {
        this.adddata = !this.adddata;
        this.datafile = null;
        this.metadone = null;
        this.metadatafile = null;
        this.uploadres = null;
        this.datacheck = [];
        this.adduser = false;
        this.adddata = false;
        this.datafile = null;
        this.metadatafile = null;
        this.geojsonfile = null;
        this.uploadarea = null;
        this.geouploadinfo = null;
        this.uploadareaid = null;
    }
    arrayToCsv(rows) {
        if (!rows) {
            return;
        }
        if (rows && !rows.length) {
            rows = [rows];
        }
        const separator = ',';
        const keys = Object.keys(rows[0]);
        const csvContent = keys.join(separator) +
            '\n' +
            rows.map(row => {
                return keys.map(k => {
                    let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                    cell = cell instanceof Date
                        ? cell.toLocaleString()
                        : cell.toString().replace(/"/g, '""');
                    if (cell.search(/("|,|\n)/g) >= 0) {
                        cell = `"${cell}"`;
                    }
                    return cell;
                }).join(separator);
            }).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });
        return blob;
    }
    csvToDataArray(str, delimiter = ",") {
        const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
        const rows = str.slice(str.indexOf("\n") + 1).split("\n");
        const arr = rows.map(function (row) {
            const values = row.split(delimiter);
            const el = headers.reduce(function (object, header, index) {
                object[header] = values[index];
                return object;
            }, {});
            return el;
        });
        return arr;
    }
};
AdminComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/admin.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.component.scss */ "./src/app/pages/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






let LoginComponent = class LoginComponent {
    constructor(_api, _auth, router, fb) {
        this._api = _api;
        this._auth = _auth;
        this.router = router;
        this.fb = fb;
    }
    ngOnInit() {
        this.login_pending = false;
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this._auth.getToken()) {
            this.loggedin = true;
        }
    }
    login() {
        this.login_pending = true;
        this._auth.login(this.form.value).subscribe(data => {
            setTimeout(() => {
                this.loggedin = true;
                this.router.navigate(['/']);
            }, 750);
        }, error => {
            this.loginerror = true;
        });
        this.login_pending = false;
    }
    logout() {
        this._auth.logout();
        this.router.navigate(['/']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/private/private.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/private/private.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGUvcHJpdmF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/private/private.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/private/private.component.ts ***!
  \****************************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let PrivateComponent = class PrivateComponent {
    constructor(api, auth) {
        this.api = api;
        this.auth = auth;
        this.actions = ['Regionen beschreiben', 'Analysen'];
        this.intend = "";
    }
    ngOnInit() {
        this.controls = [];
        this.intend = this.actions[0];
        this.metadata = this.api.getmetadata("metadata");
        this.sortdata = this.api.getmetadata("sortdata");
        this.geojson_available = this.api.getmetadata("geodata");
        setInterval(() => { this.auth.getRefreshToken(); }, 60 * 1000 * 5);
        this.updatesortinfo();
        if (!this.levelid) {
            setTimeout(() => { this.updatesortinfo(); }, 750);
        }
        setTimeout(() => { this.getregionandata(); }, 750);
    }
    ngOnDestroy() {
        this.regiondata = null;
        this.andata = null;
        this.regressiondata = null;
        this.mapdata = null;
        this.overalldata = null;
    }
    updatesortinfo() {
        this.levelid = this.api.filterArray(this.metadata, "type", "levelid")[0]['varname'];
        this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
        this.levelid = this.api.filterArray(this.metadata, "type", "levelid")[0]['varname'];
        this.outcomes = this.api.filterArray(this.metadata, "topic", "outcomes");
        this.determinants = this.api.filterArray(this.metadata, "topic", "demography");
        this.levelvalues = this.geojson_available; // this.api.filterArray(this.sortdata, "varname", this.level)[0]["values"].filter(x => this.geojson_available.includes(x));;
        this.levelvalues = this.levelvalues.sort();
        this.currentlevel = this.levelvalues[0];
        this.newlevel(this.currentlevel);
        this.currentregion = "";
    }
    newlevel(level) {
        this.currentlevel = level;
        this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=' + this.currentlevel).subscribe(data => {
            this.mapdata = data;
            this.mapdata_properties = this.api.getValues(this.mapdata['features'], 'properties');
        });
    }
    changeregion(event) {
        this.currentregion = event;
        this.getregiondata();
    }
    getregiondata() {
        // Region
        let query = {
            "client_id": this.api.REST_API_SERVER_CLIENTID,
            "groupinfo": {}
        };
        // Overall
        let refquery = {
            "client_id": this.api.REST_API_SERVER_CLIENTID,
            "groupinfo": { "level": "Gesamt" }
        };
        /*     for (let item of this.metadata){
              if (['ordering','subgroups'].indexOf(item.topic)>=0){
                refquery["groupinfo"][item.varname]=item.allforlevel;
              }
            } */
        query["groupinfo"][this.level] = this.currentlevel;
        query["groupinfo"][this.levelid] = this.currentregion;
        query["groupinfo"]['sg.Geschlecht'] = "Gesamt";
        query["groupinfo"]['sg.Altersgruppe_ID'] = "0";
        refquery["groupinfo"]['sg.Geschlecht'] = "Gesamt";
        refquery["groupinfo"]['sg.Altersgruppe_ID'] = "0";
        this.api.postTypeRequest('get_data/', query).subscribe(data => {
            this.regiondata = data['data'][0];
            this.api.postTypeRequest('get_data/', refquery).subscribe(data => {
                this.overalldata = data['data'][0];
            }, error => { });
        }, error => { });
    }
    removeoutcome(item) {
        this.controls = this.controls.filter(x => x !== item);
    }
    getregionandata() {
        if (this.outcome && this.determinant) {
            let query = {
                "client_id": this.api.REST_API_SERVER_CLIENTID,
                "groupinfo": {}
            };
            query["groupinfo"][this.level] = this.currentlevel;
            query["showfields"] = [this.outcome, this.determinant];
            this.andata = null;
            this.api.postTypeRequest('get_data/', query).subscribe(data => { let res = data; this.andata = res['data']; });
        }
    }
    getregresults() {
        if (this.outcome && this.determinant) {
            let anquery = {
                "client_id": this.api.REST_API_SERVER_CLIENTID,
                "groupinfo": {},
                "theoutcome": this.outcome,
                "maininterest": this.determinant,
                "controls": this.controls
            };
            anquery["groupinfo"][this.level] = this.currentlevel;
            this.regressiondata = null;
            this.api.postTypeRequest('analytics/regression/', anquery).subscribe(data => {
                let res = data;
                this.regressiondata = res;
                //console.log(this.regressiondata);
            });
        }
        ;
    }
};
PrivateComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PrivateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./private.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/private/private.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./private.component.scss */ "./src/app/pages/private/private.component.scss")).default]
    })
], PrivateComponent);



/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".small {\n  max-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2diZV9rb2Vsbi9nYmVfa29lbG4vRGFzaGJvYXJkL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtYWxsIHtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xufSIsIi5zbWFsbCB7XG4gIG1heC13aWR0aDogNDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let ProfileComponent = class ProfileComponent {
    constructor(api, _auth, router) {
        this.api = api;
        this._auth = _auth;
        this.router = router;
    }
    ngOnInit() {
        this.pwdrequest = { 'oldpwd': '', 'newpwd': '' };
        this.deleterequest = { 'pwd': '' };
        this.pwdchange = { 'progress': false, 'ok': false };
        this.userdetails = this._auth.getUserDetails();
    }
    chpwd() {
        this.pwdchange['progress'] = true;
        this.api.changeuserpwd(this.userdetails.email, this.pwdrequest.newpwd, this.pwdrequest.oldpwd).subscribe(data => {
            this.pwdchange['ok'] = true;
            this.pwdchange['progress'] = false;
            this.pwdchange['done'] = true;
            setTimeout(() => {
                this.pwdchange = { 'progress': false, 'ok': false };
                this.action = '';
            }, 1500);
            this.pwdrequest = { 'oldpwd': '', 'newpwd': '' };
        }, error => {
            this.pwdchange['done'] = true;
            this.pwdchange['progress'] = false;
        });
    }
    deleteaccount() {
        this.api.deleteuser(this.userdetails.email, this.deleterequest.pwd).subscribe(data => {
            //this.deleteresult="success";
            //localStorage.clear();
            //setTimeout(()=>{this.router.navigate(['/'])},3000);        
        }, error => { this.deleteresult = "error"; });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/start/start.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/start/start.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  background-color: #2b2b2b;\n}\n\n.flagicon {\n  font-size: 0.8rem;\n  padding-left: 0.1rem;\n  padding-bottom: 0.3rem;\n}\n\n.brandingpicture {\n  border-radius: 20px;\n  background-size: cover;\n  margin: -2em;\n  margin-bottom: 2em;\n  margin-top: 1em;\n  padding: 2em;\n  filter: contrast(1.3);\n  filter: grayscale(1);\n  min-height: 200px;\n  color: white;\n  background-image: url('pexels-pixabay-356357.jpg');\n}\n\n.smallheader {\n  color: inherit;\n  padding: 0px;\n  background-image: none;\n  min-height: 0px;\n  margin: 0px;\n}\n\n.right {\n  text-align: right;\n}\n\n.minheight {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2diZV9rb2Vsbi9nYmVfa29lbG4vRGFzaGJvYXJkL3NyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNJLGlCQUFBO0FDQU47O0FER0M7RUFDRyxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xufVxuXG5cbi5mbGFnaWNvbiB7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IC4xcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcbn1cblxuLmJyYW5kaW5ncGljdHVyZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbjogLTJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBmaWx0ZXI6IGNvbnRyYXN0KDEuMyk7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvYnJhbmRpbmcvcGV4ZWxzLXBpeGFiYXktMzU2MzU3LmpwZycpO1xuICB9XG5cbiAgLnNtYWxsaGVhZGVyIHtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XG4gICAgbWluLWhlaWdodDogMHB4O1xuICAgIG1hcmdpbjowcHg7XG4gIH1cblxuICAucmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuIC5taW5oZWlnaHQge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59IiwiLmJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG59XG5cbi5mbGFnaWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbn1cblxuLmJyYW5kaW5ncGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbjogLTJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHBhZGRpbmc6IDJlbTtcbiAgZmlsdGVyOiBjb250cmFzdCgxLjMpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvYnJhbmRpbmcvcGV4ZWxzLXBpeGFiYXktMzU2MzU3LmpwZ1wiKTtcbn1cblxuLnNtYWxsaGVhZGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgbWluLWhlaWdodDogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5taW5oZWlnaHQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/start/start.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let StartComponent = class StartComponent {
    constructor(api, auth) {
        this.api = api;
        this.auth = auth;
        this.metadata = [];
        this.sortdata = [];
        this.outcomeart = "M2Q";
        this.levelsettings = {};
    }
    ngOnInit() {
        this.progress = true;
        this.colorsscheme = ["#e91e63"];
        this.mapdatafor = "";
        this.data = [];
        this.mapdata = [];
        this.updatemetadata();
        this.auth.currentUser.subscribe(data => { this.currentuser = data; });
        if (this.metadataok) {
            this.querydata();
        }
        // Wait if no metadata and try again. Fixes logout behaviour
        else {
            setTimeout(() => {
                this.updatemetadata();
                if (this.metadataok) {
                    this.querydata();
                }
                else {
                    this.progress = false;
                }
                ;
            }, 1500);
        }
    }
    ngOnDestroy() {
        this.data = [];
        this.mapdata = [];
    }
    setlevel(level, value) {
        this.levelsettings[level] = value;
        this.querydata();
    }
    updatemetadata() {
        if (this.api.getmetadata("metadata")) {
            this.metadata = this.api.getmetadata("metadata");
            this.sortdata = this.api.getmetadata("sortdata");
            this.geojson_available = this.api.getmetadata("geodata");
        }
        if (this.metadata) {
            if (this.metadata.length > 0) {
                this.dometasettings();
            }
        }
        setTimeout(() => {
            if ((!this.metadata == false) && (!this.sortdata == false)) {
                if (this.metadata.length > 0) {
                    this.dometasettings();
                }
            }
            else {
                this.metadataok = false;
                this.progress = false;
            }
        }, 1500);
    }
    thereisdata() {
        let res = false;
        res = this.data;
        // if (res) {
        //   res = (this.data.length > 0) && (this.metadata.length > 0);
        // }
        return res;
    }
    dometasettings() {
        this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
        this.levelid = this.api.filterArray(this.metadata, "type", "levelid")[0]['varname'];
        this.levelvalues = ["Stadtbezirke", "Stadtteile", "Statistische Quartiere", "Sozialräume",
            "Umweltbelastungszonen Hitze", "Umweltbelastungszonen Lärm", "Umweltbelastungszonen Luft"];
        if (this.levelvalues) {
            this.levelsettings["levelvalues"] = "Stadtbezirke";
        }
        this.subgroups = ["Keine"].concat([]);
        if (this.subgroups) {
            this.levelsettings["subgroups"] = this.subgroups[0];
        }
        this.outcomes = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "outcomes"), "varname"), "varname");
        this.outcomes_m1q = this.outcomes.filter(str => str.includes('M1Q'));
        this.outcomes_m2q = this.outcomes.filter(str => str.includes('M2Q'));
        this.outcomes_util = this.outcomes.filter(str => str.includes('Anteil'));
        this.determinants = this.api.getValues(this.api.sortArray(this.api.filterArray(this.metadata, "topic", "demography"), "varname"), "varname");
        if (this.outcomes) {
            this.levelsettings["outcomes"] = this.outcomes[0];
        }
        this.metadataok = true;
        this.progress = false;
    }
    thereismapdata() {
        let res = this.thereisdata() && this.mapdata;
        return res;
    }
    querydata() {
        let query = {
            "client_id": this.api.REST_API_SERVER_CLIENTID,
            "groupinfo": {},
            "showfields": [this.levelsettings["outcomes"]]
        };
        let outcomeinfo = this.api.filterArray(this.metadata, "varname", this.levelsettings["outcomes"])[0]['type'];
        query["groupinfo"][this.level] = this.levelsettings["levelvalues"];
        query["groupinfo"]['sg.Geschlecht'] = "Gesamt";
        query["groupinfo"]['sg.Altersgruppe_ID'] = "0";
        let i = 0;
        this.api.postTypeRequest('get_data/', query).subscribe(data => {
            this.datakeys = Object.keys(data["data"][0]);
            this.datakeystable = Object.keys(data["data"][0]);
            this.data = data["data"];
            const index = this.datakeys.indexOf(this.level);
            if (index > -1) {
                this.datakeys.splice(index, 1);
            }
            if (this.levelsettings['levelvalues'] != "Gesamt") {
                this.datakeys = [this.levelid, this.levelsettings["outcomes"]];
            }
            else {
                this.datakeys = this.datakeys.filter(item => item != this.levelid);
            }
            // Remove unneeded fields
            setTimeout(() => {
                if (outcomeinfo == 'rate') {
                    this.data_number = [];
                    this.data_rate = [(this.levelsettings["outcomes"])];
                }
                else {
                    this.data_number = [(this.levelsettings["outcomes"])];
                    this.data_rate = [];
                }
                ;
            }, 0);
            if ((this.mapdatafor !== this.levelsettings['levelvalues']) && (this.levelsettings['levelvalues'] !== 'Gesamt') && (this.geojson_available.indexOf(this.levelsettings['levelvalues']) >= 0)) {
                this.api.getTypeRequest('get_geodata/?client_id=' + this.api.REST_API_SERVER_CLIENTID + '&levelname=' + this.levelsettings['levelvalues']).subscribe(data => {
                    this.mapdata = data;
                    this.mapdatafor = this.levelsettings['levelvalues'];
                }, error => {
                    this.mapdata = null;
                });
            }
        });
    }
};
StartComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start.component.scss */ "./src/app/pages/start/start.component.scss")).default]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_4__);






let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.REST_API_SERVER = "https://zidashboardapi.azurewebsites.net/"; // "https://zidashboardapi.azurewebsites.net/";//"http://localhost:8000/" ; // 
        this.REST_API_SERVER_CLIENTID = "2021_06_gbe_koeln";
        this.primarycolor = "e1141c"; // "#e91e63";
        this.accentcolor = "3714e1";
        this.warncolor = "e1149b";
    }
    getTypeRequest(url) {
        return this.httpClient.get(this.REST_API_SERVER + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(3500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(5));
    }
    postTypeRequest(url, payload) {
        return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
        ;
    }
    getTypeRequestnotimeout(url) {
        return this.httpClient.get(this.REST_API_SERVER + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
    }
    postTypeRequestnotimeout(url, payload) {
        return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
        ;
    }
    // Specific Requests
    updateuser(user, setting, value) {
        let payload = { 'email': user, 'key': setting, 'value': value };
        return this.postTypeRequest('userstatus', payload);
    }
    deleteuser(user, password = "") {
        let payload = { "email": user };
        if (password != "") {
            payload["password"] = password;
        }
        ;
        return this.postTypeRequest('deleteuser', payload);
    }
    changeuserpwd(user, newpwd, oldpwd = "") {
        let payload = { "newpassword": newpwd, email: user };
        if (oldpwd != "") {
            payload["oldpassword"] = oldpwd;
        }
        return this.postTypeRequest('changepwd', payload);
    }
    // Data APIs
    getValues(array, key) {
        let values = [];
        for (let item of array) {
            values.push(item[key]);
        }
        return values;
    }
    getKeys(array) {
        return Object.keys(array[0]);
    }
    getOptions(array, key) {
        return array.map(item => item[key])
            .filter((value, index, self) => self.indexOf(value) === index);
    }
    filterArray(array, key, value) {
        let i = 0;
        let result = [];
        for (let item of array) {
            if (item[key] == value) {
                result.push(item);
            }
            ;
            i = i + 1;
        }
        return result;
    }
    getmetadata(name) {
        return JSON.parse(localStorage.getItem(name));
    }
    sortArray(array, key, order = "ascending") {
        let result = array;
        if (order == "ascending") {
            return result.sort((a, b) => (a[key] < b[key] ? -1 : 1));
        }
        else {
            return result.sort((a, b) => (a[key] > b[key] ? -1 : 1));
        }
    }
    sumArray(array) {
        return array.reduce((a, b) => a + b, 0);
    }
    getuniqueValues(array, key) {
        let items = this.getValues(array, key);
        return [...new Set(items)];
    }
    makescale(bins = 5) {
        return chroma_js__WEBPACK_IMPORTED_MODULE_4__["scale"]([chroma_js__WEBPACK_IMPORTED_MODULE_4__(this.primarycolor).set('hsl.h', -120), this.primarycolor]).colors(bins);
    }
    shuffle(array) {
        const a = array;
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate(next, state) {
        let result = false;
        let userdata = this._authService.getUserDetails();
        if (userdata) {
            result = true;
        }
        else {
            this._router.navigate(['/']);
        }
        return result;
    }
    canActivateAdmin(next, state) {
        let result = false;
        let userdata = this._authService.getUserDetails();
        if (userdata) {
            if (userdata["is_admin"] || userdata["is_superadmin"]) {
                result = true;
            }
        }
        else {
            this._router.navigate(['/']);
        }
        return result;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let AuthService = class AuthService {
    constructor(http, _api, router) {
        this.http = http;
        this._api = _api;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](JSON.parse(localStorage.getItem('userInfo')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    OnlineStatus() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => false)), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => true)), new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((sub) => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
    login(formdata) {
        let b = formdata;
        const payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('username', b.username)
            .set('password', b.password)
            .set('client_id', this._api.REST_API_SERVER_CLIENTID);
        return this._api.postTypeRequest('login', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(user => {
            return this.logintasks(user);
        }));
    }
    logintasks(user) {
        this.setDataInLocalStorage('refresh_token', user.refresh_token);
        this.setDataInLocalStorage('access_token', user.access_token);
        this.storeUserDetails(user.user);
        this.currentUserSubject.next(user.user);
        return user;
    }
    adduser(data) {
        return this._api.postTypeRequest('newuser', data);
    }
    refreshToken() {
        return this.http.post(this._api.REST_API_SERVER + 'login/refresh/', { refresh: true }).subscribe(data => {
            let result = data;
            this.setDataInLocalStorage('access_token', result.access_token);
        }, error => { });
    }
    storeUserDetails(data) {
        return localStorage.setItem('userInfo', JSON.stringify(data));
    }
    getUserDetails() {
        return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : false;
    }
    setDataInLocalStorage(variableName, data) {
        localStorage.setItem(variableName, data);
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }
    logout() {
        localStorage.clear();
        this.currentUserSubject.next(null);
    }
    updateUserData() {
        return this._api.getTypeRequest('users/profile/');
    }
    gettokeninfo() {
        let token = this.getToken();
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/interceptor-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/interceptor-service.service.ts ***!
  \*********************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let InterceptorService = class InterceptorService {
    constructor(router, _auth, _api) {
        this.router = router;
        this._auth = _auth;
        this._api = _api;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.apiurl = this._api.REST_API_SERVER;
    }
    intercept(request, next) {
        if (request.url.includes(this.apiurl) && !request.url.includes("login/refresh") && this._auth.getUserDetails()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this._auth.getToken()}`
                }
            });
        }
        if (request.url.includes(this.apiurl) && request.url.includes("login/refresh") && this._auth.getUserDetails()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this._auth.getRefreshToken()}`
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
            // Refresh if token has expired and Userdetails not null
            if (request.url.includes(this.apiurl) && this._auth.getUserDetails() &&
                error.status == 401 && !this.refreshTokenInProgress) {
                this.refreshTokenInProgress = true;
                this._auth.refreshToken();
            }
            // Logout on Refresh error
            if (request.url.includes(this.apiurl) && request.url.includes("login/refresh") && error.status == 422) {
                this.refreshTokenInProgress = false;
                this._auth.logout();
                this.router.navigate(["/"]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
InterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InterceptorService);



/***/ }),

/***/ "./src/app/services/replace_pipe.ts":
/*!******************************************!*\
  !*** ./src/app/services/replace_pipe.ts ***!
  \******************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ReplacePipe = class ReplacePipe {
    transform(value, strToReplace, replacementStr) {
        if (!value || !strToReplace || !replacementStr) {
            return value;
        }
        return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
};
ReplacePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'replace' })
], ReplacePipe);



/***/ }),

/***/ "./src/environments/environment.ts":
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/material/material.module.ts":
/*!*****************************************!*\
  !*** ./src/material/material.module.ts ***!
  \*****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




























let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"]
        ],
        exports: [
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/gbe_koeln/gbe_koeln/Dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map