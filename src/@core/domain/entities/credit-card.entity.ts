import { Transaction } from './transaction.entity';
import crypto from 'crypto';
import { PaymentMethod } from './payment-method.interface';

export class CreditCard implements PaymentMethod {
  id: string;

  static new(props: CreditCardProps, id?: string) {
    return new CreditCard(props, id);
  }

  private constructor(public props: CreditCardProps, id?: string) {
    this.id = id || crypto.randomUUID();
    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }
    this.props = { ...props, transactions: props.transactions || [] };
  }
  get transactions() {
    return this.props.transactions as Transaction[];
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
