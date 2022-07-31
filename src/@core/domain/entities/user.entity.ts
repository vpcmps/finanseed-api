import { Wallet } from './wallet.entity';

export class User {
  id: string;
  fullName: string;
  email: string;
  wallets: Wallet[];
}
