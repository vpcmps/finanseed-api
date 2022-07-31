import { Transaction } from './transaction.entity';

export interface PaymentMethod {
  transactions: Transaction[];
  addTransaction(transaction: Transaction);
}
