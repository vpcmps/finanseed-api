import { EntitySchema } from 'typeorm';
import { Wallet } from '../../../domain/entities/wallet.entity';
import { BankAccount } from '../../../domain/entities/bank-account.entity';
import { CreditCard } from '../../../domain/entities/credit-card.entity';
export const WalletSchema = new EntitySchema<Wallet>({
  name: 'Wallet',
  target: Wallet,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    name: {
      type: 'string',
    },
  },
  relations: {
    accounts: {
      type: 'one-to-many',
      target: BankAccount,
    },
    creditCards: {
      type: 'one-to-many',
      target: CreditCard,
    },
    user,
  },
});
