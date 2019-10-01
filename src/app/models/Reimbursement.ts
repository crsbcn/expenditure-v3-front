import { User } from './User';

export class Reimbursement {
    id: number;
    amount: number;
    submitted: Date;
    resolved: Date;
    description: string;
    receipt: string;
    author: User;
    resolver: User;
    status: number;
    type; number;
}