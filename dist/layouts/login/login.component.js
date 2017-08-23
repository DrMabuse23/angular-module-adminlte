import { Component } from '@angular/core';
var LayoutLoginComponent = (function () {
    function LayoutLoginComponent() {
    }
    LayoutLoginComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new Event('resize'));
    };
    LayoutLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-layout-login',
                    styles: ['./login.css'],
                    templateUrl: './login.component.html'
                },] },
    ];
    /** @nocollapse */
    LayoutLoginComponent.ctorParameters = function () { return []; };
    return LayoutLoginComponent;
}());
export { LayoutLoginComponent };
//# sourceMappingURL=login.component.js.map