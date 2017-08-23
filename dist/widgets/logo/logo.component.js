import { Component } from '@angular/core';
import { LogoService } from '../../services/logo.service';
var LogoComponent = (function () {
    function LogoComponent(logoServ) {
        this.logoServ = logoServ;
        // default logo
        this.logo = {
            small: {
                bold: 'A',
                normal: 'LT'
            },
            big: {
                bold: 'Admin',
                normal: 'LTE'
            }
        };
        // TODO
    }
    LogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoServ.currentLogo.subscribe(function (logo) {
            _this.logo = logo;
        });
    };
    LogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-logo',
                    templateUrl: './logo.component.html'
                },] },
    ];
    /** @nocollapse */
    LogoComponent.ctorParameters = function () { return [
        { type: LogoService, },
    ]; };
    return LogoComponent;
}());
export { LogoComponent };
//# sourceMappingURL=logo.component.js.map