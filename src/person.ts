import { Timestamp } from './orm';

export type UserRole = 'USER' | 'ADMIN';

export type Telephone = {
    id: string;
    number: string;
} & Timestamp;

export type Person = {
    id: string;
    email: string;
    telephones: Telephone[];
    name?: string;
    password?: string;
    userRole?: UserRole;
} & Timestamp;
