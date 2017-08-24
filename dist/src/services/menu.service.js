import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
var MenuService = (function () {
    function MenuService(router) {
        this.router = router;
        this.currentMenu = new ReplaySubject(1);
    }
    MenuService.prototype.setCurrentMenu = function (menu) {
        this.currentMenu.next(menu);
    };
    MenuService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MenuService.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    return MenuService;
}());
export { MenuService };
//# sourceMappingURL=menu.service.js.map