import { Transaction } from './transaction.entity';
import crypto from 'crypto';

export class BankAccount {
  id: string;

  static new(props: BankAccountProps, id?: string) {
    return new BankAccount(props, id);
  }

  private constructor(public props: BankAccountProps, id?: string) {
    this.id = id || crypto.randomUUID();

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }

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
