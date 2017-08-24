(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/ReplaySubject'), require('@angular/router'), require('rxjs/Rx'), require('@ngx-translate/core'), require('@angular/http'), require('rxjs/add/operator/map'), require('rxjs/Observable'), require('angular2-toaster/angular2-toaster'), require('@angular/common/http'), require('@ngx-translate/http-loader'), require('angular2-toaster'), require('@angular/platform-browser'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/ReplaySubject', '@angular/router', 'rxjs/Rx', '@ngx-translate/core', '@angular/http', 'rxjs/add/operator/map', 'rxjs/Observable', 'angular2-toaster/angular2-toaster', '@angular/common/http', '@ngx-translate/http-loader', 'angular2-toaster', '@angular/platform-browser', '@angular/forms'], factory) :
	(factory((global['adm-lte-module'] = {}),global.ng.core,global.Rx,global._angular_router,global.rxjs_Rx,global._ngxTranslate_core,global._angular_http,global.Rx.Observable.prototype,global.Rx,global.angular2Toaster_angular2Toaster,global._angular_common_http,global._ngxTranslate_httpLoader,global.angular2Toaster,global._angular_platformBrowser,global._angular_forms));
}(this, (function (exports,_angular_core,rxjs_ReplaySubject,_angular_router,rxjs_Rx,_ngxTranslate_core,_angular_http,rxjs_add_operator_map,rxjs_Observable,angular2Toaster_angular2Toaster,_angular_common_http,_ngxTranslate_httpLoader,angular2Toaster,_angular_platformBrowser,_angular_forms) { 'use strict';

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
        this.current = new rxjs_ReplaySubject.ReplaySubject(1);
        this.clear();
    }
    BreadcrumbService.prototype.set = function (data) {
        this.current.next(data);
    };
    BreadcrumbService.prototype.clear = function () {
        this.set(this.initialData);
    };
    BreadcrumbService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    BreadcrumbService.ctorParameters = function () { return []; };
    return BreadcrumbService;
}());

var User = (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.connected = false;
        this.id = data.id || null;
        this.username = data.username || '';
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferredLang = data.preferredLang || null;
        this.preferredHome = data.preferredHome || null;
        this.connectFrom = data.connectFrom || null;
        this.connected = data.connected || false;
    }
    User.prototype.getName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return User;
}());

var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.currentUser = new rxjs_Rx.ReplaySubject(1);
        // TODO
    }
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser.next(user);
    };
    UserService.prototype.logout = function () {
        var user = new User();
        user.connected = false;
        this.setCurrentUser(user);
        this.router.navigate(['login']);
    };
    UserService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: _angular_router.Router, },
    ]; };
    return UserService;
}());

var CanActivateGuard = (function () {
    function CanActivateGuard(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.connected = false;
        this.userService.currentUser.subscribe(function (user) {
            _this.connected = user.connected;
        });
    }
    CanActivateGuard.prototype.canActivate = function () {
        // test here if you user is logged
        if (!this.connected) {
            this.router.navigate(['login']);
        }
        return this.connected;
    };
    CanActivateGuard.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    CanActivateGuard.ctorParameters = function () { return [
        { type: _angular_router.Router, },
        { type: UserService, },
    ]; };
    return CanActivateGuard;
}());

var langs = ['en', 'fr', 'ru', 'he', 'zh'];
var langmatch = /en|fr|ru|he|zh/;
var TranslateService$1 = (function () {
    function TranslateService$$1(userServ, translate) {
        var _this = this;
        this.userServ = userServ;
        this.translate = translate;
        this.lang = 'us';
        translate.addLangs(langs);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        this.userServ.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            var browserLang = _this.translate.getBrowserLang();
            var browserCultureLang = _this.translate.getBrowserCultureLang();
            console.log('Detected browser language: "' + browserCultureLang + '"');
            // check if current User has a Preferred Language set, and it differs from his browser lang
            var useLang = 'en';
            var prefLang = (_this.currentUser) ? _this.currentUser.preferredLang : null;
            if (!prefLang) {
                useLang = browserLang.match(langmatch) ? browserLang : 'en';
            }
            else {
                console.log('Detected User preferred language: "' + prefLang + '"');
                useLang = prefLang.match(langmatch) ? prefLang : 'en';
            }
            _this.translate.use(useLang);
            console.log('Translation language has been set to: "' + useLang + '"');
            // translate.use( 'ru' );
        });
    }
    TranslateService$$1.prototype.ngOnInit = function () {
        // TODO
    };
    TranslateService$$1.prototype.getTranslate = function () {
        return this.translate;
    };
    TranslateService$$1.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    TranslateService$$1.ctorParameters = function () { return [
        { type: UserService, },
        { type: _ngxTranslate_core.TranslateService, },
    ]; };
    return TranslateService$$1;
}());

var LoggerService = (function () {
    function LoggerService(translate) {
        this.translate = translate;
        // TODO
    }
    LoggerService.prototype.log = function (component, msg, i18nRef, data) {
        {
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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: TranslateService$1, },
    ]; };
    return LoggerService;
}());

var MessagesService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function MessagesService() {
        var _this = this;
        this.messagesList = [];
        // a stream that publishes new messages only once
        this.newMessages = new rxjs_Rx.Subject();
        // `messages` is a stream that emits an array of the most up to date messages
        this.messages = new rxjs_Rx.ReplaySubject(1);
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new rxjs_Rx.Subject();
        // action streams
        this.create = new rxjs_Rx.Subject();
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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    MessagesService.ctorParameters = function () { return []; };
    return MessagesService;
}());

var NotificationsService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function NotificationsService() {
        var _this = this;
        this.notificationsList = [];
        // a stream that publishes new notifications only once
        this.newNotifications = new rxjs_Rx.Subject();
        // `notifications` is a stream that emits an array of the most up to date notifications
        this.notifications = new rxjs_Rx.ReplaySubject(1);
        // `updates` receives _operations_ to be applied to our `notifications`
        // it's a way we can perform changes on *all* notifications (that are currently
        // stored in `notifications`)
        this.updates = new rxjs_Rx.Subject();
        // action streams
        this.create = new rxjs_Rx.Subject();
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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    NotificationsService.ctorParameters = function () { return []; };
    return NotificationsService;
}());

var RestService = (function () {
    function RestService(http) {
        this.http = http;
        this.modelName = 'to-configure';
        this.headers = new _angular_http.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    RestService.prototype.setApiUrl = function (url) {
        this.serverWithApiUrl = url;
    };
    // HELPERS
    RestService.prototype.getAllFromLS = function (maxtime) {
        if (maxtime === void 0) { maxtime = 0; }
        var json = localStorage.getItem('rest_all_' + this.modelName);
        if (json) {
            var obj = JSON.parse(json);
            if (obj && (obj.date < (Date.now() - maxtime))) {
                return obj;
            }
        }
    };
    RestService.prototype.getFromCache = function (id) {
        if (this.lastGetAll) {
            return this.lastGetAll.find(function (unit) { return unit.id === id; });
        }
        else {
            return null;
        }
    };
    RestService.prototype.getActionUrl = function () {
        return this.serverWithApiUrl + this.modelName + '/';
    };
    // REST functions
    RestService.prototype.getAll = function () {
        var _this = this;
        return this.http.get(this.getActionUrl())
            .map(function (response) {
            // getting an array having the same name as the model
            var data = response.json()[_this.modelName];
            // transforming the array from indexed to associative
            var tab = data.records.map(function (elem) {
                var unit = {};
                // using the columns order and number to rebuild the object
                data.columns.forEach(function (champ, index) {
                    unit[champ] = elem[index];
                });
                return unit;
            });
            _this.lastGetAll = tab;
            var obj = {
                data: tab,
                date: Date.now()
            };
            localStorage.setItem('rest_all_' + _this.modelName, JSON.stringify(obj));
            return tab;
        })
            .catch(this.handleError);
    };
    RestService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(this.getActionUrl() + id)
            .map(function (response) {
            var data = response.json();
            _this.lastGet = data;
            return data;
        })
            .catch(this.handleError);
    };
    RestService.prototype.add = function (item) {
        var toAdd = JSON.stringify(item);
        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.addAll = function (tab) {
        var toAdd = JSON.stringify(tab);
        return this.http.post(this.getActionUrl(), toAdd, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.update = function (id, itemToUpdate) {
        return this.http.put(this.getActionUrl() + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.delete = function (id) {
        return this.http.delete(this.getActionUrl() + id)
            .catch(this.handleError);
    };
    RestService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs_Observable.Observable.throw(error.json().error || 'Server error');
    };
    RestService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    RestService.ctorParameters = function () { return [
        { type: _angular_http.Http, },
    ]; };
    return RestService;
}());

var MenuService = (function () {
    function MenuService(router) {
        this.router = router;
        this.currentMenu = new rxjs_Rx.ReplaySubject(1);
    }
    MenuService.prototype.setCurrentMenu = function (menu) {
        this.currentMenu.next(menu);
    };
    MenuService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    MenuService.ctorParameters = function () { return [
        { type: _angular_router.Router, },
    ]; };
    return MenuService;
}());

var LogoService = (function () {
    function LogoService(router) {
        this.router = router;
        this.currentLogo = new rxjs_Rx.ReplaySubject(1);
    }
    LogoService.prototype.setCurrentLogo = function (logo) {
        this.currentLogo.next(logo);
    };
    LogoService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    LogoService.ctorParameters = function () { return [
        { type: _angular_router.Router, },
    ]; };
    return LogoService;
}());

var LayoutAuthComponent = (function () {
    function LayoutAuthComponent(userServ, menuServ, toastr, translate) {
        this.userServ = userServ;
        this.menuServ = menuServ;
        this.toastr = toastr;
        this.translate = translate;
        this.mylinks = [];
        this.toastrConfig = new angular2Toaster_angular2Toaster.ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }
    LayoutAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  sedding the resize event, for AdminLTE to place the height
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE from @hakonamatata
            var event_1 = document.createEvent('Event');
            event_1.initEvent('resize', false, true);
            window.dispatchEvent(event_1);
        }
        // default menu structure, please use the menuService to modify
        this.mylinks = [
            {
                'title': 'Home',
                'icon': 'dashboard',
                'link': ['/']
            }
        ];
        // register to menu change
        this.menuServ.currentMenu.subscribe(function (menu) {
            _this.mylinks = menu;
        });
    };
    LayoutAuthComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    LayoutAuthComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-layouts-auth',
                    templateUrl: './auth.html'
                },] },
    ];
    /** @nocollapse */
    LayoutAuthComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: MenuService, },
        { type: angular2Toaster_angular2Toaster.ToasterService, },
        { type: TranslateService$1, },
    ]; };
    return LayoutAuthComponent;
}());

var LayoutLoginComponent = (function () {
    function LayoutLoginComponent() {
    }
    LayoutLoginComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new Event('resize'));
    };
    LayoutLoginComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-layout-login',
                    styles: ['./login.css'],
                    templateUrl: './login.component.html'
                },] },
    ];
    /** @nocollapse */
    LayoutLoginComponent.ctorParameters = function () { return []; };
    return LayoutLoginComponent;
}());

var LayoutRegisterComponent = (function () {
    function LayoutRegisterComponent() {
        // TODO
    }
    LayoutRegisterComponent.prototype.ngOnInit = function () {
        // TODO
    };
    LayoutRegisterComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-layout-register',
                    templateUrl: './register.component.html'
                },] },
    ];
    /** @nocollapse */
    LayoutRegisterComponent.ctorParameters = function () { return []; };
    return LayoutRegisterComponent;
}());

var Message = (function () {
    function Message(data) {
        if (data === void 0) { data = {}; }
        this.content = data.content || '';
        this.title = data.title || '';
        this.author = data.author || null;
        this.destination = data.destination || null;
        this.date = data.date || Date.now();
    }
    return Message;
}());

var Preferencies = (function () {
    function Preferencies(data) {
        if (data === void 0) { data = {}; }
        this.avatarUrl = data.avatarUrl || '';
        this.preferredLang = data.preferredLang || null;
    }
    return Preferencies;
}());

var Notification = (function () {
    function Notification(data) {
        if (data === void 0) { data = {}; }
        this.content = data.content || '';
        this.class = data.class || '';
        this.link = data.link || '';
    }
    return Notification;
}());

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
        // TODO
    }
    AppHeaderComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-header',
                    styleUrls: ['./app-header.component.css'],
                    templateUrl: './app-header.component.html'
                },] },
    ];
    /** @nocollapse */
    AppHeaderComponent.ctorParameters = function () { return []; };
    return AppHeaderComponent;
}());

var LogoComponent = (function () {
    function LogoComponent(logoServ) {
        this.logoServ = logoServ;
        // default logo
        this.logo = {
            small: {
                bold: 'A',
                normal: 'LT'
            },
            big: {
                bold: 'Admin',
                normal: 'LTE'
            }
        };
        // TODO
    }
    LogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logoServ.currentLogo.subscribe(function (logo) {
            _this.logo = logo;
        });
    };
    LogoComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-logo',
                    templateUrl: './logo.component.html'
                },] },
    ];
    /** @nocollapse */
    LogoComponent.ctorParameters = function () { return [
        { type: LogoService, },
    ]; };
    return LogoComponent;
}());

var AppFooterComponent = (function () {
    function AppFooterComponent() {
        // TODO
    }
    AppFooterComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-footer',
                    styleUrls: ['./app-footer.component.css'],
                    templateUrl: './app-footer.component.html'
                },] },
    ];
    /** @nocollapse */
    AppFooterComponent.ctorParameters = function () { return []; };
    return AppFooterComponent;
}());

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
        { type: _angular_core.Component, args: [{
                    selector: 'app-menu-aside',
                    styleUrls: ['./menu-aside.component.css'],
                    templateUrl: './menu-aside.component.html'
                },] },
    ];
    /** @nocollapse */
    MenuAsideComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: _angular_router.Router, },
    ]; };
    MenuAsideComponent.propDecorators = {
        'links': [{ type: _angular_core.Input },],
    };
    return MenuAsideComponent;
}());

var ControlSidebarComponent = (function () {
    function ControlSidebarComponent() {
        // TODO
    }
    ControlSidebarComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'app-aside',
                    styleUrls: ['./control-sidebar.component.css'],
                    templateUrl: './control-sidebar.component.html'
                },] },
    ];
    /** @nocollapse */
    ControlSidebarComponent.ctorParameters = function () { return []; };
    return ControlSidebarComponent;
}());

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
        { type: _angular_core.Component, args: [{
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
        { type: _angular_core.Component, args: [{
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

var TasksBoxComponent = (function () {
    function TasksBoxComponent() {
        this.tasksLength = { 0: '9' };
    }
    TasksBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    TasksBoxComponent.decorators = [
        { type: _angular_core.Component, args: [{
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
        'user': [{ type: _angular_core.Input },],
    };
    return TasksBoxComponent;
}());

var UserBoxComponent = (function () {
    function UserBoxComponent(userServ, router) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        // default user, only an example, please use the userService to modify
        this.currentUser = new User({
            avatarUrl: 'assets/img/user2-160x160.jpg',
            email: 'weber.antoine@outlook.com',
            firstname: 'WEBER',
            lastname: 'Antoine'
        });
        this.logout = function () {
            _this.userServ.logout();
        };
        // se connecter au modif du user courant
        this.userServ.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    UserBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    UserBoxComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    /* tslint:disable */
                    selector: '.userBox',
                    /* tslint:enable */
                    styleUrls: ['./user-box.component.css'],
                    templateUrl: './user-box.component.html'
                },] },
    ];
    /** @nocollapse */
    UserBoxComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: _angular_router.Router, },
    ]; };
    return UserBoxComponent;
}());

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
        { type: _angular_core.Component, args: [{
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

function createTranslateLoader(http) {
    return new _ngxTranslate_httpLoader.TranslateHttpLoader(http, './assets/i18n', '.json');
}
var widgets = [
    BreadcrumbComponent,
    AppHeaderComponent,
    LogoComponent,
    AppFooterComponent,
    MenuAsideComponent,
    ControlSidebarComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];
var services = [
    UserService,
    MenuService,
    LogoService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationsService,
    TranslateService$1,
    LoggerService
];
// les layouts
var layouts = [
    LayoutAuthComponent,
    LayoutLoginComponent,
    LayoutRegisterComponent
];
var AdmLteModule = (function () {
    function AdmLteModule() {
    }
    AdmLteModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: widgets.concat(layouts),
                    imports: [
                        _angular_platformBrowser.BrowserModule,
                        _angular_forms.FormsModule,
                        _angular_http.HttpModule,
                        _angular_common_http.HttpClientModule,
                        _angular_router.RouterModule,
                        angular2Toaster.ToasterModule,
                        _ngxTranslate_core.TranslateModule.forRoot({
                            loader: {
                                deps: [_angular_common_http.HttpClient],
                                provide: _ngxTranslate_core.TranslateLoader,
                                useFactory: createTranslateLoader
                            }
                        }),
                    ],
                    providers: services.slice(),
                    bootstrap: [],
                    exports: widgets.concat(layouts)
                },] },
    ];
    /** @nocollapse */
    AdmLteModule.ctorParameters = function () { return []; };
    return AdmLteModule;
}());

exports.AdmLteModule = AdmLteModule;
exports.BreadcrumbService = BreadcrumbService;
exports.CanActivateGuard = CanActivateGuard;
exports.LoggerService = LoggerService;
exports.MessagesService = MessagesService;
exports.NotificationsService = NotificationsService;
exports.RestService = RestService;
exports.TranslateService = TranslateService$1;
exports.UserService = UserService;
exports.MenuService = MenuService;
exports.LogoService = LogoService;
exports.LayoutAuthComponent = LayoutAuthComponent;
exports.LayoutLoginComponent = LayoutLoginComponent;
exports.LayoutRegisterComponent = LayoutRegisterComponent;
exports.Message = Message;
exports.Preferencies = Preferencies;
exports.User = User;
exports.Notification = Notification;

Object.defineProperty(exports, '__esModule', { value: true });

})));
