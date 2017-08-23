import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToasterModule } from 'angular2-toaster';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n', '.json');
}
import { AppHeaderComponent } from './widgets/app-header';
import { LogoComponent } from './widgets/logo';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { ControlSidebarComponent } from './widgets/control-sidebar';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';
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
import { UserService } from './services/user.service';
import { MenuService } from './services/menu.service';
import { LogoService } from './services/logo.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/can-activate-guard.service';
import { NotificationsService } from './services/notifications.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { TranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';
var services = [
    UserService,
    MenuService,
    LogoService,
    BreadcrumbService,
    MessagesService,
    CanActivateGuard,
    NotificationsService,
    TranslateService,
    LoggerService
];
// les layouts
import { LayoutAuthComponent } from './layouts/auth/auth';
import { LayoutLoginComponent } from './layouts/login/login.component';
import { LayoutRegisterComponent } from './layouts/register/register.component';
var layouts = [
    LayoutAuthComponent,
    LayoutLoginComponent,
    LayoutRegisterComponent
];
var AdmLteModule = (function () {
    function AdmLteModule() {
    }
    AdmLteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: widgets.concat(layouts),
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule,
                        HttpClientModule,
                        RouterModule,
                        ToasterModule,
                        TranslateModule.forRoot({
                            loader: {
                                deps: [HttpClient],
                                provide: TranslateLoader,
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
export { AdmLteModule };
//# sourceMappingURL=admlte.module.js.map