import { Wallet } from './wallet.entity';
import crypto from 'crypto';

export class User {
  id: string;
  constructor(public props: UserProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      wallets: props.wallets || [],
    };
  }

  public get fullName(): string {
    return this.props.fullName;
  }

  public get email(): string {
    return this.props.email;
  }

  public get wallets(): Wallet[] {
    return [...this.props.wallets];
  }

  addWallet(wallet: Wallet) {
    if (!wallet) throw new Error('Invalid wallet');
    this.props.wallets.push(wallet);
  }
}

type UserProps = {
  fullName: string;
  email: string;
  wallets?: Wallet[];
};
