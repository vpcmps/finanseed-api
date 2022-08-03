import { BankAccount } from './bank-account.entity';
import { CreditCard } from './credit-card.entity';
import crypto from 'crypto';
import { User } from './user.entity';

export class Wallet {
  id: string;
  user: User;
  static new(props: WalletProps, id?: string) {
    return new Wallet(props, id);
  }

  private constructor(public props: WalletProps, id?: string) {
    this.id = id || crypto.randomUUID();
    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }
    this.props = {
      ...props,
      accounts: props.accounts || [],
      creditCards: props.creditCards || [],
    };
  }

  get accounts() {
    return this.props.accounts as BankAccount[];
  }

  get creditCards() {
    return this.props.creditCards as CreditCard[];
  }
  get name() {
    return this.props.name;
  }

  get userId() {
    return this.props.userId;
  }

  private set userId(value: string) {
    this.props.userId = value;
  }
  addBankAccount(account: BankAccount) {
    if (!account) throw new Error('Account invalid');
    this.props.accounts.push(account);
  }
  addCreditCard(card: CreditCard) {
    if (!card) throw new Error('Card invalid');
    this.props.creditCards.push(card);
  }
}

type WalletProps = {
  name: string;
  accounts?: BankAccount[];
  creditCards?: CreditCard[];
  userId: string;
};
