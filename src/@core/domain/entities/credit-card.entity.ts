import { Transaction } from './transaction.entity';
import crypto from 'crypto';
import { PaymentMethod } from './payment-method.interface';

export class CreditCard implements PaymentMethod {
  id: string;
  constructor(public props: CreditCardProps, id?: string) {
    id: id || crypto.randomUUID;

    this.props = { ...props, transactions: props.transactions || [] };
  }
  get transactions() {
    return this.props.transactions;
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

type CreditCardProps = {
  name: string;
  transactions?: Transaction[];
};
