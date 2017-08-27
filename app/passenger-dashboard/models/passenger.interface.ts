import { Child } from './child.interface';

export interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: Child[] | null;
}