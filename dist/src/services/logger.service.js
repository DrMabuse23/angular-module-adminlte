import { Injectable } from '@angular/core';
import { TranslateService } from './translate.service';
var LoggerService = (function () {
    function LoggerService(translate) {
        this.translate = translate;
        // TODO
    }
    LoggerService.prototype.log = function (component, msg, i18nRef, data) {
        if (true) {
            if (i18nRef) {
                var params = {};
                if (data) {
                    params = (data[0]) ? { 0: data[0] } : params;
                    params = (data[1]) ? { 0: data[0], 1: data[1] } : params;
                    params = (data[2]) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
                }
                this.translate.getTranslate().get(i18nRef, params).subscribe(function (res) {
                    console.log(component + ': ' + res);
                });
            }
            else {
                console.log(component + ': ' + msg);
            }
        }
    };
    LoggerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: TranslateService, },
    ]; };
    return LoggerService;
}());
export { LoggerService };
//# sourceMappingURL=logger.service.js.map