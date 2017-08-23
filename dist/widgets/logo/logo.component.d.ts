import { OnInit } from '@angular/core';
import { LogoService } from '../../services/logo.service';
export declare class LogoComponent implements OnInit {
    private logoServ;
    logo: any;
    constructor(logoServ: LogoService);
    ngOnInit(): void;
}
