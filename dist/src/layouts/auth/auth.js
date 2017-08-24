import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { TranslateService } from '../../services/translate.service';
var LayoutAuthComponent = (function () {
    function LayoutAuthComponent(userServ, menuServ, toastr, translate) {
        this.userServ = userServ;
        this.menuServ = menuServ;
        this.toastr = toastr;
        this.translate = translate;
        this.mylinks = [];
        this.toastrConfig = new ToasterConfig({
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
        { type: Component, args: [{
                    selector: 'app-layouts-auth',
                    templateUrl: './auth.html'
                },] },
    ];
    /** @nocollapse */
    LayoutAuthComponent.ctorParameters = function () { return [
        { type: UserService, },
        { type: MenuService, },
        { type: ToasterService, },
        { type: TranslateService, },
    ]; };
    return LayoutAuthComponent;
}());
export { LayoutAuthComponent };
//# sourceMappingURL=auth.js.map