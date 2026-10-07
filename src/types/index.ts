export type transactionType = 'income' | 'outcome';

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    category: string;
    type: transactionType;
    createdAt: string;
}

export interface SummaryData {
    totalIncome: number;
    totalOutcome: number;
    balance: number;
}