import { OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
export declare class MenuAsideComponent implements OnInit {
    private userServ;
    router: Router;
    currentUrl: string;
    currentUser: User;
    links: Array<any>;
    constructor(userServ: UserService, router: Router);
    ngOnInit(): void;
}
