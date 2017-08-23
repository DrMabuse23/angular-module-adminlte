import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs/Rx';
var initialNotifications = [];
var NotificationsService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function NotificationsService() {
        var _this = this;
        this.notificationsList = [];
        // a stream that publishes new notifications only once
        this.newNotifications = new Subject();
        // `notifications` is a stream that emits an array of the most up to date notifications
        this.notifications = new ReplaySubject(1);
        // `updates` receives _operations_ to be applied to our `notifications`
        // it's a way we can perform changes on *all* notifications (that are currently
        // stored in `notifications`)
        this.updates = new Subject();
        // action streams
        this.create = new Subject();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur notifications
        this.updates.subscribe(function (ope) {
            _this.notificationsList = ope(_this.notificationsList);
            console.log(_this.notificationsList);
            _this.notifications.next(_this.notificationsList);
        });
        this.newNotifications
            .map(function (notification) {
            return function (notifications) {
                return notifications.concat(notification);
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    NotificationsService.prototype.addNotification = function (notification) {
        this.newNotifications.next(notification);
    };
    NotificationsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NotificationsService.ctorParameters = function () { return []; };
    return NotificationsService;
}());
export { NotificationsService };
//# sourceMappingURL=notifications.service.js.map