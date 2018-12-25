import { Statement } from "@angular/compiler";

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    image?: string,
    isActive?: boolean,
    registered?: boolean,
    hide?: boolean
}