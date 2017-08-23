import { Component } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(breadServ) {
        var _this = this;
        this.breadServ = breadServ;
        this.display = false;
        this.header = '';
        this.description = '';
        this.levels = [];
        // getting the data from the services
        this.breadServ.current.subscribe(function (data) {
            _this.display = data.display;
            _this.header = data.header;
            _this.description = data.description;
            _this.levels = data.levels;
        });
    }
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    templateUrl: './breadcrumb.component.html'
                },] },
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: BreadcrumbService, },
    ]; };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map