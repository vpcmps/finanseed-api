import { BankAccount } from './bank-account.entity';
import { CreditCard } from './credit-card.entity';
import crypto from 'crypto';

export class Wallet {
  id: string;
  constructor(public props: WalletProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      accounts: props.accounts || [],
      creditCards: props.creditCards || [],
    };
  }

  get accounts() {
    return [...this.props.accounts];
  }

  get creditCards() {
    return [...this.props.creditCards];
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
};
