import { Component } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { LoggerService } from '../../services/logger.service';
var NotificationBoxComponent = (function () {
    function NotificationBoxComponent(notifServ, logger) {
        this.notifServ = notifServ;
        this.logger = logger;
        this.notifications = [];
    }
    NotificationBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Every incoming notification changes entire local notification Array.
        this.notifServ.notifications.subscribe(function (notif) {
            _this.logger.log('NotificationBox', null, 'RECEIVED.NOTIFICATION', null);
            _this.notifications = notif;
            _this.notifLength = { 0: _this.notifications.length };
        });
    };
    NotificationBoxComponent.decorators = [
        { type: Component, args: [{
                    /* tslint:disable */
                    selector: '.notificationsBox',
                    /* tslint:enable */
                    styleUrls: ['./notification-box.component.css'],
                    templateUrl: './notification-box.component.html'
                },] },
    ];
    /** @nocollapse */
    NotificationBoxComponent.ctorParameters = function () { return [
        { type: NotificationsService, },
        { type: LoggerService, },
    ]; };
    return NotificationBoxComponent;
}());
export { NotificationBoxComponent };
//# sourceMappingURL=notification-box.component.js.map