import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs/Rx';
var initialMessages = [];
var MessagesService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function MessagesService() {
        var _this = this;
        this.messagesList = [];
        // a stream that publishes new messages only once
        this.newMessages = new Subject();
        // `messages` is a stream that emits an array of the most up to date messages
        this.messages = new ReplaySubject(1);
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new Subject();
        // action streams
        this.create = new Subject();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur messages
        this.updates.subscribe(function (ope) {
            _this.messagesList = ope(_this.messagesList);
            console.log(_this.messagesList);
            _this.messages.next(_this.messagesList);
        });
        this.newMessages
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessagesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessagesService.ctorParameters = function () { return []; };
    return MessagesService;
}());
export { MessagesService };
//# sourceMappingURL=messages.service.js.map