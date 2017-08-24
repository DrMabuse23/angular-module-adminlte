import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
export declare class MenuService {
    private router;
    currentMenu: ReplaySubject<any>;
    constructor(router: Router);
    setCurrentMenu(menu: any): void;
}
