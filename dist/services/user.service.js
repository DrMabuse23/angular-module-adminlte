import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.currentUser = new ReplaySubject(1);
        // TODO
    }
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser.next(user);
    };
    UserService.prototype.logout = function () {
        var user = new User();
        user.connected = false;
        this.setCurrentUser(user);
        this.router.navigate(['login']);
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map