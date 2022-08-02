import { Transaction } from './transaction.entity';
import crypto from 'crypto';

export class BankAccount {
  id: string;
  constructor(public props: BankAccountProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = { ...props, transactions: props.transactions || [] };
  }

  get transactions() {
    return [...this.props.transactions];
  }

  get name() {
    return this.props.name;
  }
  addTransaction(transaction: Transaction) {
    if (!transaction || transaction.value <= 0)
      throw new Error('Empty transaction error');
    this.props.transactions.push(transaction);
  }
}

type BankAccountProps = {
  name: string;
  transactions?: Transaction[];
};
