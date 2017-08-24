import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { LoggerService } from '../../services/logger.service';
var MessagesBoxComponent = (function () {
    function MessagesBoxComponent(msgServ, logger) {
        this.msgServ = msgServ;
        this.logger = logger;
        this.messages = [];
    }
    MessagesBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Every incoming message changes entire local message Array.
        this.msgServ.messages.subscribe(function (msg) {
            _this.logger.log('MsgBox', null, 'RECEIVED.MESSAGE', null);
            _this.messages = msg;
            _this.msgLength = { 0: _this.messages.length };
        });
    };
    MessagesBoxComponent.decorators = [
        { type: Component, args: [{
                    /* tslint:disable */
                    selector: '.messagesBox',
                    /* tslint:enable */
                    styleUrls: ['./messages-box.component.css'],
                    templateUrl: './messages-box.component.html'
                },] },
    ];
    /** @nocollapse */
    MessagesBoxComponent.ctorParameters = function () { return [
        { type: MessagesService, },
        { type: LoggerService, },
    ]; };
    return MessagesBoxComponent;
}());
export { MessagesBoxComponent };
//# sourceMappingURL=messages-box.component.js.map