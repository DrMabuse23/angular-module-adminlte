import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
var CanActivateGuard = (function () {
    function CanActivateGuard(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.connected = false;
        this.userService.currentUser.subscribe(function (user) {
            _this.connected = user.connected;
        });
    }
    CanActivateGuard.prototype.canActivate = function () {
        // test here if you user is logged
        if (!this.connected) {
            this.router.navigate(['login']);
        }
        return this.connected;
    };
    CanActivateGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CanActivateGuard.ctorParameters = function () { return [
        { type: Router, },
        { type: UserService, },
    ]; };
    return CanActivateGuard;
}());
export { CanActivateGuard };
//# sourceMappingURL=can-activate-guard.service.js.map