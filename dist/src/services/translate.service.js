import { Injectable } from '@angular/core';
import { TranslateService as NGXTranslateService } from '@ngx-translate/core';
import { UserService } from './user.service';
var langs = ['en', 'fr', 'ru', 'he', 'zh'];
var langmatch = /en|fr|ru|he|zh/;
var TranslateService = (function () {
    function TranslateService(userServ, translate) {
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
    TranslateService.prototype.ngOnInit = function () {
        // TODO
    };
    TranslateService.prototype.getTranslate = function () {
        return this.translate;
    };
    TranslateService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: UserService, },
        { type: NGXTranslateService, },
    ]; };
    return TranslateService;
}());
export { TranslateService };
//# sourceMappingURL=translate.service.js.map