import { OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MenuService } from '../../services/menu.service';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { TranslateService } from '../../services/translate.service';
export declare class LayoutAuthComponent implements OnInit {
    private userServ;
    private menuServ;
    private toastr;
    private translate;
    toastrConfig: ToasterConfig;
    mylinks: Array<any>;
    private logger;
    constructor(userServ: UserService, menuServ: MenuService, toastr: ToasterService, translate: TranslateService);
    ngOnInit(): void;
    protected detectIE(): any;
}
