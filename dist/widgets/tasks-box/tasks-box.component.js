import { Component, Input } from '@angular/core';
var TasksBoxComponent = (function () {
    function TasksBoxComponent() {
        this.tasksLength = { 0: '9' };
    }
    TasksBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    TasksBoxComponent.decorators = [
        { type: Component, args: [{
                    /* tslint:disable */
                    selector: '.tasksBox',
                    /* tslint:enable */
                    styleUrls: ['./tasks-box.component.css'],
                    templateUrl: './tasks-box.component.html'
                },] },
    ];
    /** @nocollapse */
    TasksBoxComponent.ctorParameters = function () { return []; };
    TasksBoxComponent.propDecorators = {
        'user': [{ type: Input },],
    };
    return TasksBoxComponent;
}());
export { TasksBoxComponent };
//# sourceMappingURL=tasks-box.component.js.map