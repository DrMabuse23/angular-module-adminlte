export declare class User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    avatarUrl: string;
    creationDate: string;
    preferredLang: string;
    preferredHome: string;
    connected: boolean;
    constructor(data?: any);
    getName(): string;
}
