import { User } from '../models/user';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';
export declare class UserService {
    private router;
    currentUser: ReplaySubject<User>;
    constructor(router: Router);
    setCurrentUser(user: User): void;
    logout(): void;
}
