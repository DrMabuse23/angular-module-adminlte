import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
var MenuAsideComponent = (function () {
    function MenuAsideComponent(userServ, router) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        this.currentUser = new User();
        this.links = [];
        // getting the current url
        this.router.events.subscribe(function (evt) { return _this.currentUrl = evt.url; });
        this.userServ.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () {
        // TODO
    };
    MenuAsideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-menu-aside',
                    styleUrls: ['./menu-aside.component.css'],
                    templateUrl: './menu-aside.component.html'
                },] },
    ];
    /** @nocollapse */
    MenuAsideComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: Router, },
    ]; };
    MenuAsideComponent.propDecorators = {
        'links': [{ type: Input },],
    };
    return MenuAsideComponent;
}());
export { MenuAsideComponent };
//# sourceMappingURL=menu-aside.component.js.map