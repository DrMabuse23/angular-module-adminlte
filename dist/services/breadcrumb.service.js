import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.initialData = {
            description: '',
            display: false,
            header: '',
            levels: [
                {
                    icon: 'clock-o',
                    link: ['/'],
                    title: 'Default'
                }
            ]
        };
        this.current = new ReplaySubject(1);
        this.clear();
    }
    BreadcrumbService.prototype.set = function (data) {
        this.current.next(data);
    };
    BreadcrumbService.prototype.clear = function () {
        this.set(this.initialData);
    };
    BreadcrumbService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BreadcrumbService.ctorParameters = function () { return []; };
    return BreadcrumbService;
}());
export { BreadcrumbService };
//# sourceMappingURL=breadcrumb.service.js.map