import { ReplaySubject } from 'rxjs/ReplaySubject';
export declare class BreadcrumbService {
    current: ReplaySubject<any>;
    private initialData;
    constructor();
    set(data: any): void;
    clear(): void;
}
