import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
var UserBoxComponent = (function () {
    function UserBoxComponent(userServ, router) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        // default user, only an example, please use the userService to modify
        this.currentUser = new User({
            avatarUrl: 'assets/img/user2-160x160.jpg',
            email: 'weber.antoine@outlook.com',
            firstname: 'WEBER',
            lastname: 'Antoine'
        });
        this.logout = function () {
            _this.userServ.logout();
        };
        // se connecter au modif du user courant
        this.userServ.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    UserBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    UserBoxComponent.decorators = [
        { type: Component, args: [{
                    /* tslint:disable */
                    selector: '.userBox',
                    /* tslint:enable */
                    styleUrls: ['./user-box.component.css'],
                    templateUrl: './user-box.component.html'
                },] },
    ];
    /** @nocollapse */
    UserBoxComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: Router, },
    ]; };
    return UserBoxComponent;
}());
export { UserBoxComponent };
//# sourceMappingURL=user-box.component.js.map