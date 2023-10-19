import { Transaction } from 'firebase/firestore';

export interface Expense {
    id?: string;
    name?: string;
    expenseAmount?: any;
    category?: string;
    createdAt?: any;
    userId?: string;
}

export interface Income {
    createdAt?: any;
    id?: string;
    name?: string;
    expenseAmount?: any;
}

export interface Transaction {
    id?: string;
    name?: string;
    expenseAmount?: any;
    category?: string;
    createdAt?: any;
    userId?: string;
    type?: string;
}