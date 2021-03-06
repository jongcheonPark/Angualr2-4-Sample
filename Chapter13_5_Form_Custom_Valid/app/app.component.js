"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li>\n                            <a [routerLink]=\"['']\" routerLinkActive=\"active\">About</a>\n                            <a [routerLink]=\"['/carpart']\" routerLinkActive=\"active\">CarPart</a>\n                            <a [routerLink]=\"['/guestbook']\" routerLinkActive=\"active\">Guestbook</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <main role=\"main\">\n            <router-outlet></router-outlet>\n        </main>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map