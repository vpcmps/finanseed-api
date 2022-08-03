import { Wallet } from './wallet.entity';
import crypto from 'crypto';

export class User {
  id: string;

  static create(props: UserProps, id?: string) {
    return new User(props, id);
  }

  private constructor(public props: UserProps, id?: string) {
    this.id = id || crypto.randomUUID();
    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }
    this.props = {
      ...props,
      wallets: props.wallets || [],
    };
  }

  public get fullName(): string {
    return this.props.fullName;
  }

  private set fullName(value: string) {
    this.props.fullName = value;
  }

  public get email(): string {
    return this.props.email;
  }
  private set email(value: string) {
    this.props.email = value;
  }
  public get wallets(): Wallet[] {
    return this.props.wallets as Wallet[];
  }
  private set wallets(value: Wallet[]) {
    this.props.wallets = value;
  }

  addWallet(wallet: Wallet) {
    if (!wallet) throw new Error('Invalid wallet');
    this.props.wallets.push(wallet);
  }
  toJSON() {
    return { ...this.props, id: this.id };
  }
}

type UserProps = {
  fullName: string;
  email: string;
  wallets?: Wallet[];
};
