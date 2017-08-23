import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
var LogoService = (function () {
    function LogoService(router) {
        this.router = router;
        this.currentLogo = new ReplaySubject(1);
    }
    LogoService.prototype.setCurrentLogo = function (logo) {
        this.currentLogo.next(logo);
    };
    LogoService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LogoService.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    return LogoService;
}());
export { LogoService };
//# sourceMappingURL=logo.service.js.map