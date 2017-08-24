import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
export declare class LogoService {
    private router;
    currentLogo: ReplaySubject<any>;
    constructor(router: Router);
    setCurrentLogo(logo: any): void;
}
